import prisma from "@/utils/connect"
import { NextResponse } from "next/server"



//GET SINGLE POST
export const GET = async (req, { params }) => {

  const { slug } = params


  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: {user:true},
    });
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (e) {
    console.log(e)
    return new NextResponse(JSON.stringify({ message: "mahmut" }, { status: 500 }))
  }
}
