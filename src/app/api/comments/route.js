import prisma from "@/utils/connect"
import { NextResponse } from "next/server"



//GET All Comments of a post
export const GET = async (req) => {

  const { searchparams } = new URL(req.url);
  const postSlug = searchparams.get("posSlug");


  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...GET(postSlug && { postSlug }),
      },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (e) {
    console.log(e)
    return new NextResponse(JSON.stringify({ message: "mahmut" }, { status: 500 }))
  }
}
