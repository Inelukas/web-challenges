import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <h3>Comments:</h3>
      {data.reviews.length > 0 ? (
        data.reviews.map((review) => (
          <div key={review._id}>
            <h5>{review.title}</h5>
            <span>
              {review.text} {review.rating}/10
            </span>
            <span></span>
          </div>
        ))
      ) : (
        <p>No reviews yet</p>
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
