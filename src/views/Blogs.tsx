import React from 'react'
import { Link } from 'react-router-dom'

const blogs = [
  { id: 1, title: 'Designing portfolio website', image: 'https://placehold.co/250x250', theme: 'Projects', date: '2025-07-24', 
    description: 'Is designing portfolio website necessary? I go through my thought process and the tools I used. I also discuss how much hosting website costs and where is my website hosted.', 
    content: 'It is not necessary, but i feel like it is like a cherry on top of the cake and also helps in showcasing work efficiently. I used React, TypeScript, Tailwind CSS and Vite to build my portfolio website. I also used GitHub for version control and hosting. The hosting costs are minimal, as I use GitHub Pages for free hosting. My website is hosted on GitHub Pages, which allows me to showcase my work without any additional costs.' },

  { id: 2, title: 'Blog Post 2', image: 'https://placehold.co/250x250', theme: 'Project', date: '2025-02-01', description: 'This is a brief description of blog post 2.', content: 'This is the content of blog post 2.' },
  { id: 3, title: 'Blog Post 3', image: 'https://placehold.co/250x250', theme: 'Project', date: '2025-03-01', description: 'This is a brief description of blog post 3.', content: 'This is the content of blog post 3.' },]

const Blogs = () => {
  return (  
        <div className="p-5 max-w-[1600px] mx-auto">
            <h1 className="text-[2vw] font-[header] text-black">BLOGS</h1>
      
      <ul>
        {[...blogs].reverse().map(blog => (
          <Link to={`/blogs/${blog.id}`} key={blog.id}>
          <li className="text-white hover:scale-105 transition-transform duration-300 flex m-10">
              <img src={blog.image} alt={blog.title} className="mb-4 shadow-lg" />
              
              <div className="text-[0.8vw] bg-[var(--secondary-color)] w-full p-4 h-[250px]">
                <p className='text-white'>{blog.date} / {blog.theme}</p>
                <h2 className='text-white font-[header] text-[1.4vw]'>{blog.title}</h2>
                <p className='text-white text-[0.9vw]'>{blog.description}</p>
              </div>
          
          </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Blogs
