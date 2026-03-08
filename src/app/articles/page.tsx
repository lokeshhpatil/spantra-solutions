import Navbar from "@/components/common/navbar";
import Articles from "@/components/articles/Articles";

export default function ArticlesPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-16">
        <Articles />
      </main>
    </div>
  );
}
