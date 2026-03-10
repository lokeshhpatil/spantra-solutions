import Navbar from "@/components/common/navbar";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

// Define the Blog interface
interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  coverImage?: string;
  tags?: string[];
  createdAt: string;
}

import dbConnect from "@/lib/mongoose";
import BlogModel from "@/models/Blog";

// Fetch a single blog by its slug directly from the database
async function getBlog(slug: string): Promise<Blog | null> {
  try {
    await dbConnect();
    const doc = await BlogModel.findOne({ slug }).lean();
    if (!doc) return null;

    // Map Mongoose document to our Blog interface
    return {
      _id: doc._id.toString(),
      title: doc.title,
      slug: doc.slug,
      content: doc.content,
      author: doc.author || "Unknown Author",
      coverImage: doc.coverImage,
      tags: doc.tags || [],
      createdAt:
        doc.createdAt instanceof Date
          ? doc.createdAt.toISOString()
          : new Date(doc.createdAt).toISOString(),
    };
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    return null;
  }
}

// Set up dynamic layout
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  // Format the date
  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-16 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto font-sans">
        {/* Article Header */}
        <header className="mb-10 lg:mb-14">
          {/* Tags */}
          <div className="flex items-center gap-4 text-[11px] font-bold tracking-widest mb-6">
            <span className="bg-[#e4fc54] text-gray-900 px-3 py-1 uppercase rounded-full">
              {blog.tags && blog.tags.length > 0 ? blog.tags[0] : "ARTICLE"}
            </span>
            <span className="text-gray-500 uppercase">{formattedDate}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 leading-tight mb-8">
            {blog.title}
          </h1>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
              {blog.author ? blog.author.charAt(0).toUpperCase() : "U"}
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">
                {blog.author || "Unknown Author"}
              </p>
              <p className="text-gray-500 text-xs">Author</p>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative w-full aspect-video md:aspect-21/9 bg-gray-100 mb-12 rounded-2xl overflow-hidden shadow-sm">
          {blog.coverImage ? (
            <Image
              src={blog.coverImage}
              alt={blog.title}
              width={1200}
              height={630}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No cover image available
            </div>
          )}
        </div>

        {/* Article Body */}
        <article className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed">
          {/* 
            Note: If your content is HTML string, use dangerouslySetInnerHTML: 
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            If it's plain text, standard output works. 
          */}
          <p className="whitespace-pre-wrap">{blog.content}</p>
        </article>
      </main>
    </div>
  );
}
