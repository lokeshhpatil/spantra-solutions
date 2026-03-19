import Navbar from "@/components/common/navbar";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const dynamic = "force-dynamic";

export default async function ArticlesPage() {
  // Fetch ALL posts from Sanity CMS
  const query = `*[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    tags,
    _createdAt
  }`;
  
  const blogs = await client.fetch(query);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto font-sans">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 leading-tight">
            Our Articles
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Explore our collection of insights, news, and technical deep-dives.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-12">
          {blogs.length > 0 ? (
            blogs.map(
              (blog: {
                _id: string;
                title: string;
                slug: string;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                coverImage?: any;
                tags?: string[];
                _createdAt: string;
              }) => (
                <div key={blog._id} className="group flex flex-col gap-4">
                  {/* Image Container */}
                  <div className="relative w-full aspect-4/3 bg-gray-100 overflow-hidden rounded-xl">
                    {blog.coverImage ? (
                      <Image
                        src={urlFor(blog.coverImage).url()}
                        alt={blog.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                        No Image Available
                      </div>
                    )}
                  </div>

                  {/* Meta info: Tag and Read Time */}
                  <div className="flex items-center gap-4 text-[11px] font-bold tracking-widest mt-2">
                    <span className="bg-[#e4fc54] text-gray-900 px-3 py-1 uppercase rounded-full">
                      {blog.tags && blog.tags.length > 0
                        ? blog.tags[0]
                        : "ARTICLE"}
                    </span>
                    <span className="text-gray-500 uppercase">
                      {new Date(blog._createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] font-medium text-gray-900 leading-[1.3] mt-1">
                    {blog.title}
                  </h3>

                  {/* Link */}
                  <Link
                    href={`/articles/${blog.slug}`}
                    className="inline-flex items-center text-[15px] font-semibold text-gray-900 hover:text-gray-600 transition-colors mt-auto pt-2"
                  >
                    Read Article <ArrowUpRight className="w-[18px] h-[18px] ml-1" />
                  </Link>
                </div>
              ),
            )
          ) : (
            <div className="col-span-full text-center text-gray-500 py-10">
              No articles found. Check back later!
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
