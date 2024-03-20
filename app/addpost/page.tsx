"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddPost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch("/api/addpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      router.refresh();
    } catch (error) {
      console.error("Error:", error);
    }
    setTitle("");
    setContent("");
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Link href="/" className="mb-8 text-blue-500 hover:underline">
        View feed
      </Link>
      <h1 className="text-3xl font-bold mb-4 animate__animated animate__fadeInDown">
        Add Post
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg animate__animated animate__fadeInUp"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block mb-2 text-gray-700">
            Content:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
            className="w-full px-3 py-2 border rounded-md  text-black focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
