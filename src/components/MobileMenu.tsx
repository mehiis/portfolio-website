import { Link } from "react-router-dom";
import github from "@/assets/images/icons/gh.png";
import linkedin from "@/assets/images/icons/li.png";
import instagram from "@/assets/images/icons/ig.png";
import homeIcon from "@/assets/images/icons/home-icon.svg"
import resumeIcon from "@/assets/images/icons/resume-icon.svg"
import resume from "@/assets/resume.pdf"

type MobileMenuProps = {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuProps) => {
  return (
        <menu className='px-3 fixed right-0 flex flex-col items-left w-full h-[1000px] bg-[var(--primary-color)] top-17 transition-transform duration-300 overflow-hidden' style={{ transform: mobileMenuOpen ? 'translateX(0%)' : 'translateX(100%)'}}>

                <Link className='flex items-center space-x-2 pl-4 my-3 mt-10' to="" onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex">
                        <img src={homeIcon} alt="Homepage icon" className="w-8 h-8"/>
                        <p className='text-[115%] font-[arial-black] px-2'>Home</p>
                    </div>
                </Link>

                {/* COMING SOON...
                <button className='flex items-center space-x-2 pl-4 my-3' onClick={() => setMobileMenuOpen(false)}>
                    <img src="/src/assets/images/icons/blog-icon.svg" alt="Blog icon" className="w-8 h-8"/>
                    <a href="/blog" className='text-[115%] font-[arial-black]'>Blog</a>
                </button>*/}

                <a href={resume} className='flex items-center space-x-2 pl-4 my-3' onClick={() => setMobileMenuOpen(false)} target="_blank" rel="noopener noreferrer">
                    <div className="flex">
                        <img src={resumeIcon} alt="Resume icon" className="w-8 h-8"/>
                        <p className='text-[115%] font-[arial-black] px-2'>Resume</p>
                    </div>
                </a>

            <p className='text-[100%] font-[arial-black] text-left items-left justify-left mt-10 px-5 mb-2 '>My socials</p>
            <div className='flex items-left pt-3 px-5 pb-5 justify-left '>
                <button><a href="https://github.com/mehiis" target="_blank"><img src={github} alt="GitHub Logo 2025" className="w-11 h-11 mx-4 hover:scale-120 transition-transform duration-300" /></a></button>
                <button><a href="https://fi.linkedin.com/in/nikomehilainen" target="_blank"><img src={linkedin} alt="LinkedIn Logo 2025" className="w-11 h-11 mx-4 hover:scale-120 transition-transform duration-300" /></a></button>
                <button><a href="https://www.instagram.com/nikomehilainen/" target="_blank"><img src={instagram} alt="Instagram Logo 2025" className="w-11 h-11 mx-4 hover:scale-120 transition-transform duration-300" /></a></button>
            </div>
        </menu>
    );
}

export default MobileMenu
