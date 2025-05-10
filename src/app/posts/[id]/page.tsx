import Link from "next/link";
// import { posts } from "@/../lib/loader";
import GlobalError from "@/app/error";

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  // const id = await params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  const resComments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
  );

  const comments: any = await resComments.json();

  // const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return <GlobalError error={Error("Page not found")} reset={() => {}} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="card bg-base-100 w-full max-w-3xl shadow-md">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.body}</p>
        </div>

        <div className="card-body border-t">
          <h3 className="text-lg font-bold mb-2">Comments</h3>
          <ul className="space-y-2">
            {comments.map((comment: any) => (
              <li key={comment.id} className="p-2 rounded">
                <p className="font-bold">
                  name : <span>{comment.name.split(" ")[0]}</span>
                </p>
                <p className="text-sm text-gray-300">{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
