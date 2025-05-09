import Link from "next/link";
import { categories } from "../../../lib/loader";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link href={'/'} className="btn btn-ghost text-xl">Blog</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Categories</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                {categories.map((cat) => (
                  <div key={cat.id}>
                    <li>
                      <Link href={`/categories/${cat.name.toLowerCase()}`}>
                        {cat.name}
                      </Link>
                    </li>
                  </div>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
