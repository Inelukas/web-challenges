import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";
import cover from "../../public/the-return-of-the-king.png";

export default function ThirdMovie() {
  const thirdMovie = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );

  return (
    <>
      <Link href={"../volumes"}>← All Volumes</Link>
      <h1>{thirdMovie.title}</h1>
      <p>{thirdMovie.description}</p>
      <ul>
        {thirdMovie.books.map((book) => {
          return (
            <li>
              {book.ordinal}: {book.title}
            </li>
          );
        })}
      </ul>
      <Image src={cover} height={230} width={140} alt="Third Movie" />
      <p>
        <Link href={"../volumes/the-two-towers"}>Previous Volume</Link>
      </p>
    </>
  );
}
