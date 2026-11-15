import Articles from "../../data/articles"
import { Wave } from "../homepage/components/Wave"

const BlogsHeader = () => {
  return (
    <>
    <header className="py-2 items-center bg-(--secondary-color) text-(--black-color)">
      <div className="max-w-360 min-w-90 m-auto px-10 py-3 md:px-40">
        <h1 className="text-2xl font-bold font-[LeagueSpartanBold]">Blogs</h1>
        <p className="py-2 font-[LeagueSpartanRegular] text-md 2xl:text-lg">
          Welcome to my blog section, where I share my thoughts, insights, and experiences on a variety of topics. From Personal projects, work and life. I cover a wide range of subjects that I'm passionate about. I hope you find something that resonates with you.

          <br/><br/>{Articles.length} written blog posts.</p>
        </div>
    </header>
    <Wave waveColor="#FFE063" baseColor="#FAFAFA" />
    </>
  )
}

export default BlogsHeader
