import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Products() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <span>{data.category}</span>
      <h2>{data.description}</h2>
      <h3>
        {data.price}
        {data.currency}
      </h3>
    </div>
  );
}
