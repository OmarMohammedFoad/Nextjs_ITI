import Link from "next/link";
import {posts} from "../../lib/loader";

export default function HomePage() {
  const featuredPosts = posts.slice(0, 2); // First 2 posts as featured

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">Welcome to My Blog</h1>
      <p className="mb-4 text-gray-700">
        Discover articles on technology, health, and travel.
      </p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Featured Posts</h2>
        <ul className="flex gap-1 justify-center items-center">
        {featuredPosts.map((post) => (
          <div key={post.id} className="card bg-base-100 w-96 shadow-sm">
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

      {/* <div className="flex gap-4">
        <Link
          href="/posts"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          All Posts
        </Link>
        <Link
          href="/categories"
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          Categories
        </Link>
      </div> */}
    </div>
  );
}
