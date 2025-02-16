import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BlogPost from "../../components/BlogPost"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <BlogPost id={params.id} />
      </main>
      <Footer />
    </div>
  )
}
