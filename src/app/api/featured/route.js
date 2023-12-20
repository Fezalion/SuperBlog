import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//gets the most recent post
export const GET = async (req) => {
  try {
    const post = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
    });
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Couldnt get featured data" }, { status: 500 })
    );
  }
};
