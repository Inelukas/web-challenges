import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
