import { posts } from "../../../lib/loader";
import Link from "next/link";

export default function PostsPage() {
  return (
    <div>
      <h1 className="text-6xl text-center font-bold mb-4">All Posts</h1>
      <ul className="flex gap-1 flex-wrap justify-center items-center">
        {posts.map((post) => (
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
