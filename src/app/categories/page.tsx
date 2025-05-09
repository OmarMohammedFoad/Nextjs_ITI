import Link from "next/link";

import { categories } from "../../../lib/loader";
export default function Categories() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <ul className="flex justify-evenly items-center ">
        {categories.map((category) => (
          <li key={category.id}>
            <Link 
              href={`/categories/${category.name.toLowerCase()}`}
              className="btn btn-primary"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
