import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";
import cover from "../../public/the-fellowship-of-the-ring.png";

export default function FirstMovie() {
  const firstMovie = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href={"../volumes"}>← All Volumes</Link>
      <h1>{firstMovie.title}</h1>
      <p>{firstMovie.description}</p>
      <ul>
        {firstMovie.books.map((book, index) => {
          return (
            <li key={index}>
              {book.ordinal}: {book.title}
            </li>
          );
        })}
      </ul>
      <Image src={cover} height={230} width={140} alt="First Movie" />
      <p>
        <Link href={"../volumes/the-two-towers"}>Next Volume</Link>
      </p>
    </>
  );
}
