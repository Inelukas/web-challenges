import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Products() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  return (
    <ul>
      {data.map((product) => {
        return (
          <li key={product.id}>
            <h1>{product.name}</h1>
            <span>{product.category}</span>
            <h2>{product.description}</h2>
            <h3>
              {product.price}
              {product.currency}
            </h3>
          </li>
        );
      })}
    </ul>
  );
}
