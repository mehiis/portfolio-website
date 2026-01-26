import { Link, useNavigate, useParams } from 'react-router-dom'
import BlogsHeader from '../components/blog/BlogsHeader'
import CustomHR from '../components/CustomHR'
import Articles from '../data/articles'

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

      <ul>
        {currentPosts.map(article => (
          <div className='mx-10 mb-10 my-10 md:my-0 ' key={article.id}>
            <Link to={`/article/${article.id}`}>

              <li className="text-white shadow-sm rounded-md overflow-hidden flex-col md:flex-row border border-black/2 mb-11 md:grid md:grid-cols-[25%_75%] ">
                  <div className='h-[180px] md:h-auto flex items-center justify-center overflow-hidden'>
                    <img src={article?.articleCover} alt={article.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="bg-black/4  w-full p-4 h-auto">
                    <p className='font-[LeagueSpartanRegular] text-sm text-[var(--black-color)] md:text-base line-clamp-1'>{article.date.toLocaleDateString()} | {article.tags.join(', ')}</p>
                    <CustomHR />
                    <h2 className='font-[LeagueSpartanBold] text-black text-lg 2xl:text-lg line-clamp-1'>{article.title}</h2>
                    <p className='text-black font-[LeagueSpartanRegular] text-md 2xl:text-md max-h-[60px] line-clamp-2'>{article.description}</p>

                    <div className="flex md:justify-end my-3 md:my-1">
                      <div
                        className="bg-[var(--secondary-color)] font-[LeagueSpartanRegular] text-sm text-[var(--black-color)] inline-block mt-2 px-4 py-2 rounded-lg hover:scale-110 transition-transform duration-300 shadow-sm flex-none max-h-[40px]">
                        Read more &#10230;
                      </div>
                    </div>
                  </div>
              </li>

            </Link>
            { article.id !== currentPosts[currentPosts.length - 1].id ? <hr className="border-black/10 my-10"/> : null}
          </div>
        ))}

      </ul>
      <div className="flex justify-center mb-10">
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
