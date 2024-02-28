import connectToDB from "@/db";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();
    const extractData = await req.json();

    const newlyCreatedBlogData = await Blog.create(extractData);

    if (newlyCreatedBlogData) {
      return NextResponse.json({
        success: true,
        message: "Blog added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to add new blog to database! Please try again",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong!",
    });
  }
}
