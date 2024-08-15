import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>My cities app</h1>
      <Link href="/cities">Cities</Link>
    </div>
  );
}
