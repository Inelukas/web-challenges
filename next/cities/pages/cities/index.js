import Link from "next/link";
import { cities } from "../../lib/data";

export default function Cities() {
  return (
    <ul>
      {cities.map((city, index) => {
        return (
          <li key={index}>
            <Link href={`/cities/${city.slug}`}>{city.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
