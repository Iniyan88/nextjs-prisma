import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import React from "react";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  console.log(id);
  const post = await prisma.post.delete({
    where: {
      id,
    },
  });
  return NextResponse.json(post);
}
