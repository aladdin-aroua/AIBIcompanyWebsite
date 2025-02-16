import Header from "../components/Header"
import Footer from "../components/Footer"
import BlogList from "../components/BlogList"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <BlogList />
      </main>
      <Footer />
    </div>
  )
}
