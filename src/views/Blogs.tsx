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
          <div className='mx-10 mb-10 my-10 md:my-0'>
            <Link to={`/article/${article.id}`}>
              <li className="text-white flex shadow-sm rounded-md overflow-hidden flex-col md:flex-row border border-black/2 mb-11 ">
                  <img src={article.icon} alt={article.title} className="m-auto h-[100px] md:h-auto" />
                  <div className="bg-black/4  w-full p-4 h-auto">
                    <p className='text-black font-[arial] text-sm text-[var(--black-color)] md:text-base overflow-hidden whitespace-nowrap overflow-ellipsis'>{article.date.toLocaleDateString()} / {article.tags.join(', ')}</p>
                    <CustomHR />
                    <h2 className='text-black text-lg md:text-2xl'>{article.title}</h2>
                    <p className='text-black font-[arial] text-[120%] max-h-[60px] overflow-hidden overflow-ellipsis'>{article.description}</p>
                    
                    <div className="flex justify-end my-3 md:my-1">
                      <Link to={`/article/${article.id}`} 
                      className="bg-[var(--secondary-color)] text-md text-[var(--black-color)] inline-block px-4 py-2 rounded-lg hover:scale-110 transition-transform duration-300 shadow-sm flex-none max-h-[40px]">
                      Read more &#10230;
                      </Link>
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