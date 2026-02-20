import {useNavigate, useParams } from 'react-router-dom'
import BlogsHeader from '../components/blogspage/BlogsHeader'
import Articles from '../data/articles'
import BlogCard from '../components/blogspage/BlogCard';

const Blogs = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postsPerPage:number = 6;
  const currentPage:number = id ? Number(id) : 1;
  const totalPages:number = Math.ceil(Articles.length / postsPerPage);
  const startIndex:number = (currentPage - 1) * postsPerPage;
  const endIndex:number = startIndex + postsPerPage;
  const currentPosts = Articles.slice(startIndex, endIndex);

  return (
    <>
     <BlogsHeader />
     <div className="max-w-[1440px] mx-auto md:px-30">

      <ul className="justify-start items-start">
        <BlogCard currentPosts={currentPosts}></BlogCard>
      </ul>

      <div className="flex justify-center mb-10 ">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(number => (
          <button
            key={number}

            onClick={() =>
              {
                navigate(`/blogs/${number}`)

          }}
            className={`mx-2 px-4 py-2 rounded-lg font-[LeagueSpartanBold]
              ${currentPage === number ? 'bg-[var(--primary-color)]'
                :
              'bg-[var(--secondary-color)] text-[var(--black-color)] hover:bg-[var(--primary-color)] hover:scale-105'}

              transition-colors duration-300`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
    </>
  )
}

export default Blogs
