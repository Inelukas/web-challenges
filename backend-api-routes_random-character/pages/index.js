import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
  const { data, error } = useSWR(`/api/random-character`, fetcher);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <h1>{data.firstName + " " + data.lastName}</h1>
      <h3>{`Twitter: ${data.twitter}, Geohash: ${data.geohash}`}</h3>
    </>
  );
}
