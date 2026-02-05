import React from 'react'
import CustomHR from '../misc/CustomHR'
import { Link } from 'react-router-dom'
import type BlogPost from '../../types/BlogPost';

interface BlogCardProps {
  currentPosts: BlogPost[];
}

const BlogCard: React.FC<BlogCardProps> = ({ currentPosts }) => {
  return (
        <li>
            {currentPosts.map(article => (
                <div className='mx-10 mb-10 my-10 md:my-0 ' key={article.id}>
                    <Link to={`/blog/${article.id}`}>

                    <div className="text-white shadow-sm rounded-md overflow-hidden flex-col xl:flex-row border border-black/2 mb-11 xl:grid xl:grid-cols-[25%_75%]">
                        <div className='xl:h-auto flex overflow-hidden h-[240px]'>
                            <img
                              src={article?.articleCover}
                              alt={article.title}
                              className="w-full h-full object-cover"
                              width="290"
                              height="200"
                              />
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
                    </div>

                    </Link>
                    { article.id !== currentPosts[currentPosts.length - 1].id ? <hr className="border-black/10 my-10"/> : null}
                </div>
            ))}
        </li>
  )
}

export default BlogCard
