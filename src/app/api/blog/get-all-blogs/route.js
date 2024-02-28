import { NextResponse } from "next/server";
import connectToDB from "@/db";
import Blog from "@/models/blog";

export async function GET() {
  try {
    await connectToDB();
    const extractAllBlogs = await Blog.find({});

    if (extractAllBlogs && extractAllBlogs.length) {
      return NextResponse.json({
        success: true,
        data: extractAllBlogs,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}
