"use client";

import { useRouter } from "next/navigation";
export default function DeletePost({ PostId }: { PostId: String }) {
  const router = useRouter();
  async function handleDelete() {
    try {
      await fetch(`/api/post/${PostId}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button
        onClick={handleDelete}
        className="bg-black text-white hover:bg-gray-900 font-semibold py-2 px-4 rounded-md shadow-md transition-colors duration-300 ease-in-out"
      >
        Delete
      </button>
    </div>
  );
}
