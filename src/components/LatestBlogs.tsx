import { Link } from 'react-router-dom'
import Articles from '../data/articles'
import type BlogPost from '../types/BlogPost';

const LatestBlogs = () => {
  const latestBlogsDesktop:BlogPost[] = Articles.slice(0,4);
  const latestBlogsMobile:BlogPost[] = latestBlogsDesktop.slice(0,2);

  return (
    <section className=' bg-[var(--secondary-color)]'>
      <div className='mt-6 max-w-[1440px] mx-auto py-4 px-5 md:px-50'>
      <h2 className='my-5 font-[LeagueSpartanBold] text-xl'>Latest Blogs</h2>
      <hr className='mb-5 border-black/10'/>

      <ul className='gap-10 hidden md:visible md:grid md:grid-cols-4 md:auto-rows-fr'>
        {latestBlogsDesktop.map(article => (
          <div key={article.id}>
            <Link to={`/article/${article.id}`}>
              <li className="text-white shadow-sm rounded-sm overflow-hidden border border-black/2 mb-5 max-w-[200px] hover:scale-105 transition-transform duration-300">
                <img src={article.articleCover} alt={article.title} className="object-cover" />

                <div className='bg-[var(--white-color)] p-3 min-h-[85px]'>
                  <p className='font-[LeagueSpartanRegular] text-sm text-[var(--black-color)] line-clamp-1'>{article.date.toLocaleDateString()}</p>
                  <h3 className='font-[LeagueSpartanBold] text-black text-sm line-clamp-2 my-auto'>{article.title}</h3>
                </div>
              </li>
            </Link>
          </div>
        ))}
      </ul>

      <ul className='gap-10 md:hidden grid grid-cols-2 auto-rows-fr'>
        {latestBlogsMobile.map(article => (
          <div key={article.id}>
            <Link to={`/article/${article.id}`}>
              <li className="text-white shadow-sm rounded-sm overflow-hidden border border-black/2 mb-5 max-h-[200px] max-w-[200px] ">
                <img src={article.articleCover} alt={article.title} className="object-cover" />

                <div className='bg-[var(--white-color)] p-3 min-h-[85px]'>
                <p className='font-[LeagueSpartanRegular] text-sm text-[var(--black-color)] line-clamp-1 '>{article.date.toLocaleDateString()}</p>
                <h3 className='font-[LeagueSpartanBold] text-black text-sm line-clamp-2 px-2'>{article.title}</h3>
                </div>
              </li>

            </Link>
          </div>
        ))}
      </ul>
      </div>
    </section>
  )
}

export default LatestBlogs
