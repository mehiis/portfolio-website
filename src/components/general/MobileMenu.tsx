import { Link } from "react-router-dom";
import github from "@/assets/images/icons/gh.webp";
import linkedin from "@/assets/images/icons/li.webp";
import instagram from "@/assets/images/icons/ig.webp";
import homeIcon from "@/assets/images/icons/home-icon.webp"
import blogIcon from "@/assets/images/icons/blog-icon.webp"
import resumeIcon from "@/assets/images/icons/resume-icon.webp"

type MobileMenuProps = {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuProps) => {
  return (
        <div className='px-3 fixed right-0 flex flex-col items-left w-full h-screen bg-[var(--primary-color)] top-17 transition-transform duration-300 overflow-hidden' style={{ transform: mobileMenuOpen ? 'translateX(0%)' : 'translateX(100%)'}}>

                <Link className='flex items-center space-x-2 pl-4 my-3 mt-10' to="/" onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex">
                        <img
                          src={homeIcon}
                          loading="lazy"
                          alt="Homepage icon"
                          className="w-8 h-auto aspect-square"
                          width="64"
                          height="64"
                          />
                        <p className='text-2xl font-[LeagueSpartanBold] px-2'>Home</p>
                    </div>
                </Link>

                <Link className='flex items-center space-x-2 pl-4 my-3' to="/blogs/1" onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex">
                        <img
                          src={blogIcon}
                          loading="lazy"
                          alt="Blogs icon"
                          className="w-8 h-auto aspect-square"
                          width="64"
                          height="64"
                          />
                        <p className='text-2xl font-[LeagueSpartanBold] px-2'>Blogs</p>
                    </div>
                </Link>

                <a href="/resume.pdf" className='flex items-center space-x-2 pl-4 my-3' onClick={() => setMobileMenuOpen(false)} target="_blank" rel="noopener noreferrer">
                    <div className="flex">
                        <img
                          src={resumeIcon}
                          loading="lazy"
                          alt="Resume icon"
                          className="w-8 h-auto aspect-square"
                          width="64"
                          height="64"
                          />
                        <p className='text-2xl font-[LeagueSpartanBold] px-2'>Resume</p>
                    </div>
                </a>

                        <hr className="border-black/10 my-5"/>

                <p className='text-xl font-[LeagueSpartanBold] text-left items-left justify-left px-5 mb-2 '>My socials</p>
                <div className='flex items-left pt-3 px-5 pb-5 justify-left '>
                    <button><a href="https://github.com/mehiis" target="_blank" rel="noopener noreferrer">
                    <img
                      src={github}
                      loading="lazy"
                      alt="GitHub Logo 2025"
                      className="w-8 h-auto mx-4 hover:scale-120 transition-transform duration-300 aspect-square"
                      width="64"
                      height="64"
                      /></a></button>
                    <button><a href="https://fi.linkedin.com/in/nikomehilainen" target="_blank" rel="noopener noreferrer">
                    <img 
                        src={linkedin} 
                        loading="lazy" 
                        alt="LinkedIn Logo 2025" 
                        className="w-8 h-auto mx-4 hover:scale-120 transition-transform duration-300 aspect-square"
                        width="64"
                        height="64"
                        /></a></button>
                    <button><a href="https://www.instagram.com/nikomehilainen/" target="_blank" rel="noopener noreferrer">
                    <img
                      src={instagram}
                      loading="lazy"
                      alt="Instagram Logo 2025"
                      className="w-8 h-auto mx-4 hover:scale-120 transition-transform duration-300 aspect-square"
                      width="64"
                      height="64"
                      /></a></button>
                </div>
        </div>
    );
}

export default MobileMenu
