// app/posts/page.tsx
import Link from "next/link";

export default async function PostsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posts = await res.json();
  console.log(posts);
  

  return (
    <div>
      <h1 className="text-6xl text-center font-bold mb-4">All Posts</h1>
      <ul className="flex gap-4 flex-wrap justify-center items-center">
        {posts.slice(0, 20).map((post: any) => (
          <div
            key={post.id}
            className="card h-[250] bg-base-100 w-96  shadow-sm"
          >
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.body}</p>
              <div className="card-actions justify-center">
                <Link href={`/posts/${post.id}`} className="btn btn-primary ">
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
