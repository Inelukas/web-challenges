import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";
import cover from "../../public/the-two-towers.png";

export default function SecondMovie() {
  const secondMovie = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <>
      <Link href={"../volumes"}>← All Volumes</Link>
      <h1>{secondMovie.title}</h1>
      <p>{secondMovie.description}</p>
      <ul>
        {secondMovie.books.map((book) => {
          return (
            <li>
              {book.ordinal}: {book.title}
            </li>
          );
        })}
      </ul>
      <Image src={cover} height={230} width={140} alt="Second Movie" />
      <p>
        <Link href={"../volumes/the-fellowship-of-the-ring"}>
          Previous Volume
        </Link>
      </p>
      <p>
        <Link href={"../volumes/the-return-of-the-king"}>Next Volume</Link>
      </p>
    </>
  );
}
