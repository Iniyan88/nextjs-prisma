import React from "react";
import DeletePost from "./DeletePost";

interface PostProps {
  id: string;
  title: string;
  content: string;
  author: string;
}
export default function Post({ id, title, content, author }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-xl mb-4">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        <span className="text-black">TITLE: </span>
        {title}
      </h2>
      <h2 className="text-xl font-semibold mb-2  text-gray-800">
        <span className="text-black">CONTENT: </span>
        {content}
      </h2>
      <h2 className="text-xl font-semibold mb-2  text-gray-800">
        <span className="text-black">AUTHOR: </span>
        {author}
      </h2>

      <DeletePost PostId={id} />
    </div>
  );
}
