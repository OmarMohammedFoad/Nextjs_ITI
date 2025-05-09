// import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "../../../../lib/loader";

export default function CategoryPostsPage({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category;
  const filtered = posts.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  if (filtered.length === 0) {
    throw new Error("Invalid category: No posts found");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts in {category}</h1>
      <ul className="flex justify-center gap-2">
        {filtered.map((post) => (
          <div key={post.id} className="card bg-base-100 w-96  shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.description}</p>
              <div className="card-actions justify-end">
                <Link href={`/posts/${post.id}`} className="btn btn-primary">
                  Read Now!
                </Link>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

/**
 * 
 *  <div key={post.id} className="card bg-base-100 w-96  shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.description}</p>
              <div className="card-actions justify-end">
                <Link href={`/posts/${post.id}`} className="btn btn-primary">
                  Read Now!
                </Link>
              </div>
            </div>
          </div>
 * 
 */
