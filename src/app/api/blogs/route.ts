import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Blog from '@/models/Blog';

export async function GET() {
  try {
    await dbConnect();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: blogs }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // Basic validation
    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json(
        { success: false, error: 'Title, slug, and content are required' },
        { status: 400 }
      );
    }

    const blog = await Blog.create(body);
    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error: any) {
    // Check for duplicate key error (duplicate slug)
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: 'A blog with this slug already exists' },
        { status: 400 }
      );
    }
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
