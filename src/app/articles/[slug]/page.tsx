import Navbar from "@/components/common/navbar";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const dynamic = "force-dynamic";

// Define the Blog interface
interface Blog {
  _id: string;
  title: string;
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  author: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coverImage?: any;
  tags?: string[];
  _createdAt: string;
}

// Fetch a single blog by its slug directly from Sanity
async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      content,
      author,
      coverImage,
      tags,
      _createdAt
    }`;
    
    const doc = await client.fetch(query, { slug });
    if (!doc) return null;

    return doc;
  } catch (error) {
    console.error("Failed to fetch blog from Sanity:", error);
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
  const formattedDate = new Date(blog._createdAt).toLocaleDateString("en-US", {
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
              src={urlFor(blog.coverImage).url()}
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
          <PortableText value={blog.content} />
        </article>
      </main>
    </div>
  );
}
