import Link from "next/link";

type Post = {
  id: string;
  slug: string;
  title: string;
};

export default function PostList(posts: Post[]) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
