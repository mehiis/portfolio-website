import Articles from "../../data/articles"

const BlogsHeader = () => {
  return (
    <header className="py-2 items-center bg-[var(--secondary-color)] text-[var(--black-color)] shadow-sm mb-8">
      <div className="max-w-[1440px] min-w-[360px] m-auto px-10 py-5 md:px-40">
        <h1 className="text-2xl font-bold font-[LeagueSpartanBold]">Blogs</h1>
        <p className="py-2 font-[LeagueSpartanRegular] text-md 2xl:text-lg">
          Welcome to my blog section, where I share my thoughts, insights, and experiences on a variety of topics. From Personal projects, work and life. I cover a wide range of subjects that I'm passionate about. I hope you find something that resonates with you. 
          
          <br/><br/>{Articles.length} written blog posts.</p>
        </div>
    </header>
  )
}

export default BlogsHeader
