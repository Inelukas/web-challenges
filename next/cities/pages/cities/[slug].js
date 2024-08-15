import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import Link from "next/link";

export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;

  const currentCity = cities.find((city) => {
    return city.slug === slug;
  });

  const { name, country, population, description } = currentCity;

  console.log(currentCity);

  return (
    <>
      <Link href="/cities">Back</Link>
      <h1>{name}</h1>
      <h2>{country}</h2>
      <h3>Population: {population}</h3>
      <p>{description}</p>
    </>
  );
}
