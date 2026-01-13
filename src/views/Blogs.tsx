import { Link } from 'react-router-dom'
import BlogsHeader from '../components/blog/BlogsHeader'
import CustomHR from '../components/CustomHR'
import Articles from '../data/articles'

const Blogs = () => {
  return (
    <>
     <BlogsHeader />
      <div className="max-w-[1440px] mx-auto md:p-15">

      <ul>
        {[...Articles].reverse().map(article => (
          <div className='mx-10 mb-10 my-10 md:my-0 '>
            <Link to={`/article/${article.id}`}>

              <li className="text-white shadow-sm rounded-md overflow-hidden flex-col md:flex-row border border-black/2 mb-11 md:grid md:grid-cols-[25%_75%] ">
                  <div className='h-[180px] md:h-auto flex items-center'>
                    <img src={article.icon} alt={article.title} className="mx-auto" />
                  </div>
                  
                  <div className="bg-black/4  w-full p-4 h-auto">
                    <p className='font-[arial] text-sm text-[var(--black-color)] md:text-base line-clamp-1'>{article.date.toLocaleDateString()} / {article.tags.join(', ')}</p>
                    <CustomHR />
                    <h2 className='text-black text-lg md:text-2xl line-clamp-1'>{article.title}</h2>
                    <p className='text-black font-[arial] text-md md:text-lg max-h-[60px] line-clamp-2'>{article.description}</p>

                    <div className="flex md:justify-end my-3 md:my-1">
                      <div
                        className="bg-[var(--secondary-color)] text-md text-[var(--black-color)] inline-block mt-2 md:mt-0 px-4 py-2 rounded-lg hover:scale-110 transition-transform duration-300 shadow-sm flex-none max-h-[40px]">
                        Read more &#10230;
                      </div>
                    </div>
                  </div>
              </li>

            </Link>
            { article.id !== Articles[0].id ? <CustomHR /> : null}
          </div>
        ))}

      </ul>
    </div>
    </>
  )
}

export default Blogs