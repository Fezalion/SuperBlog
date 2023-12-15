import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async ()=>{
try{
  const catergories = await prisma.category.findMany()
  return new NextResponse(JSON.stringify(catergories, {status:200}))
}catch(e){
  console.log(e)
  return new NextResponse(JSON.stringify({message:"Something went wrong"}, {status:500}))
}
}
