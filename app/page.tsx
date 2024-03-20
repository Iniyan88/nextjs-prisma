import prisma from "@/lib/prisma";
import Post from "./components/Post";
import Link from "next/link";

interface PostProps {
  id: string;
  title: string;
  content: string | null;
  author: string;
}

async function getPosts(): Promise<PostProps[]> {
  const res = await prisma.post.findMany({
    where: { published: true },
    include: { author: { select: { name: true } } },
  });
  return res;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/addpost" className="text-blue-500 hover:underline">
        Add Post
      </Link>
      <h1 className="text-4xl font-bold mt-8 mb-4">Feed</h1>
      {posts.map((post: PostProps) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
          />
        );
      })}
    </main>
  );
}
