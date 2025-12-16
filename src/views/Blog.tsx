import { useParams } from "react-router-dom"
import blogs from "../data/blogs"

const Blog = () => {

  const { id } = useParams<{ id: string }>();
  const blog = blogs.find(b => b.id === Number(id));

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {blog ? (
          <div>
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-lg">{blog.content}</p>
          </div>
        ) : (
          <p>Blog post not found.</p>
        )}
      </div>
    </>
  )
}

export default Blog
