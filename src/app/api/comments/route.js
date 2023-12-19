import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect"
import { NextResponse } from "next/server"



//GET All Comments of a post
export const GET = async (req) => {

  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");


  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (e) {
    console.log(e)
    return new NextResponse(JSON.stringify({ message: "mahmut" }, { status: 500 }))
  }
};


//POST A COMMENT  
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    JSON.stringify({ message: "You must be logged in to comment" }, { status: 401 })
  };

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });
    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (e) {
    console.log(e)
    return new NextResponse(JSON.stringify({ message: "mahmut" }, { status: 500 }))
  }
}

