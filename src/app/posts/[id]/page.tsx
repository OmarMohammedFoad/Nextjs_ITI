import Link from "next/link";
import { posts } from "../../../../lib/loader";
import GlobalError from "@/app/error";

export default function PostDetail({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return <GlobalError error={Error("Page not found")} reset={() => {}} />;
  }

  return (
    <div className="flex items-center justify-center h-lvh">
      <div key={post.id} className="card bg-base-100 w-full h-1/2">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
}
