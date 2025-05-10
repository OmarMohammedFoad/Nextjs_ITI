// import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "../../../../lib/loader";

export default async function UserPostsPage({
  params,
}: {
  params: { user: string };
}) {
  const { user } = params;
  console.log(user);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${user}`
  );

  const resUsers = await fetch(
    `https://jsonplaceholder.typicode.com/users/${user}`
  );

  const posts = await res.json();
  const { name } = await resUsers.json();
  // console.log(posts);

  if (posts.length === 0) {
    throw new Error("Invalid category: No posts found");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts of {name} </h1>
      <ul className="flex flex-wrap justify-center gap-2">
        {posts.map((post: any) => (
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
