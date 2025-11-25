

type MobileMenuProps = {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuProps) => {
  return (
        <menu className='px-3 fixed right-0 flex flex-col items-left w-full h-[1000px] bg-[var(--primary-color)] top-20 transition-transform duration-300 overflow-hidden' style={{ transform: mobileMenuOpen ? 'translateX(0%)' : 'translateX(100%)'}}>
                <button className='flex items-center space-x-2 pl-4 my-3 mt-10' onClick={() => setMobileMenuOpen(false)}>
                    <img src="/src/assets/images/icons/home-icon.svg" alt="Homepage icon" className="w-8 h-8"/>
                    <a href="/" className='text-[115%] font-[arial-black]'>Home</a>
                </button>

                {/* COMING SOON...
                <button className='flex items-center space-x-2 pl-4 my-3' onClick={() => setMobileMenuOpen(false)}>
                    <img src="/src/assets/images/icons/blog-icon.svg" alt="Blog icon" className="w-8 h-8"/>
                    <a href="/blog" className='text-[115%] font-[arial-black]'>Blog</a>
                </button>*/}

                <button className='flex items-center space-x-2 pl-4 my-3' onClick={() => setMobileMenuOpen(false)}>
                    <img src="/src/assets/images/icons/resume-icon.svg" alt="Resume icon" className="w-8 h-8"/>
                    <a href="/resume" className='text-[115%] font-[arial-black]'>Resume</a>
                </button>

            <p className='text-[100%] font-[arial-black] text-left items-left justify-left mt-10 px-5 '>My socials:</p>
            <div className='flex items-left pt-3 px-4 pb-5 justify-left '>
                <button><a href="https://github.com/mehiis" target="_blank"><img src="/src/assets/images/icons/gh.png" alt="GitHub Logo 2025" className="w-11 h-11 mx-2 hover:scale-120 transition-transform duration-300" /></a></button>
                <button><a href="https://fi.linkedin.com/in/nikomehilainen" target="_blank"><img src="/src/assets/images/icons/li.png" alt="LinkedIn Logo 2025" className="w-11 h-11 mx-2 hover:scale-120 transition-transform duration-300" /></a></button>
                <button><a href="https://www.instagram.com/nikomehilainen/" target="_blank"><img src="/src/assets/images/icons/ig.png" alt="Instagram Logo 2025" className="w-11 h-11 mx-2 hover:scale-120 transition-transform duration-300" /></a></button>
            </div>
        </menu>
    );
}

export default MobileMenu
