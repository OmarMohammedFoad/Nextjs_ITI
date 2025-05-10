import Link from "next/link";

// import { categories } from "@/../lib/loader";
export default async function Categories() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <ul className="flex flex-wrap justify-center gap-2">
        {users.map((user: any) => (
          <li key={user.id}>
            <Link
              href={`/users/${user.id}`}
              className="btn btn-primary"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
