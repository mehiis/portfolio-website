import { Link, Outlet, useLocation } from 'react-router'
import gitHubLogo from '../assets//images/icons/gh.png'
import linkedInLogo from '../assets/images/icons/li.png'
import instagramLogo from '../assets/images/icons/ig.png'
import resumedl from '../assets/images/misc/resume-dl.png'
import { useEffect, useState } from 'react';

let menu = ""

const Layout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [isVisible, setIsVisible] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [bttVisible, setBttVisible] = useState(false);

    useEffect(() => {
        if (mobileMenuOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [mobileMenuOpen]);

    useEffect(() => {
        let lastScrollY = window.scrollY;

            const toggleBttVisibility = () => {
            if (window.scrollY > 415 && !mobileMenuOpen) {
                setBttVisible(true);
            } else {
                setBttVisible(false);
            }
        };

        const controlNavbar = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100 && !mobileMenuOpen) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', controlNavbar);
        window.addEventListener('scroll', toggleBttVisibility);

        return () => { 
            window.removeEventListener('scroll', controlNavbar);
            window.removeEventListener('scroll', toggleBttVisibility);
         };
        
    }, []);

  return (
    <>
            <header className='bg-[var(--primary-color)] min-w-[360px] pb-2 shadow-sm sticky top-0 z-50 transition-transform duration-200 position-absolute px-5' style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
                
                <div className="max-w-[1440px] min-w-[360px] mx-auto flex items-center justify-between bg-[var(--primary-color)] hidden md:flex" >
                    <Link to="/"><img src="/src/assets/images/logos/logo-text-with-desc.png" alt="Logo" className="w-35 h-auto hover:scale-105 transition-transform duration-150"/></Link>

                        <nav className='flex justify-between items-center my-3 bg-[var(--primary-color)'>
                        {/*<ul className='flex justify-around items-center m-3 p-4'>
                            <li className='text-[1.5vw] font-[header] mr-5 text-white shadow-md px-5 py-1 bg-[var(--secondary-color)] hover:scale-110 transition-transform duration-300'><button><Link to="/">Home</Link></button></li>
                            <li className='text-[1.5vw] font-[header] mr-5 text-white shadow-md px-5 py-1 bg-[var(--secondary-color)] hover:scale-110 transition-transform duration-300'><button><Link to="/blogs">Blog</Link></button></li>
                        </ul>*/} 
                        <div className='flex justify-around items-center'>
                            <button><a href="https://github.com/mehiis" target="_blank"><img src={gitHubLogo} alt="GitHub Logo 2025" className="w-11 h-11 mx-2 hover:scale-120 transition-transform duration-300" /></a></button>
                            <button><a href="https://fi.linkedin.com/in/nikomehilainen" target="_blank"><img src={linkedInLogo} alt="LinkedIn Logo 2025" className="w-11 h-11 mx-2 hover:scale-120 transition-transform duration-300" /></a></button>
                            <button><a href="https://fi.linkedin.com/in/nikomehilainen" target="_blank"><img src={resumedl} alt="LinkedIn Logo 2025" className="w-33 h-11 mx-2 hover:scale-120 transition-transform duration-300" /></a></button>
                            {
                             //   <button><p className='text-[2.5vh] font-[mochi] mr-2 text-[var(--black-color)] pl-5 py-1 hover:scale-118 transition-transform duration-300'><Link to="/">resume</Link></p></button>
                            }
                        </div>
                    </nav>
                </div>

                    <div className="flex items-center justify-between bg-[var(--primary-color)] md:hidden" >
                        <Link to="/"><img src="/src/assets/images/logos/logo-text-with-desc.png" alt="Logo" className="w-35 h-auto hover:scale-105 transition-transform duration-150"/></Link>

                        <nav className='flex justify-between items-center my-3 bg-[var(--primary-color)'>
                            <div className='flex justify-around items-center'>
                                <button className='w-[50px] h-[50px]' onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: mobileMenuOpen ? menu="/src/assets/images/misc/close-menu.svg" : menu="/src/assets/images/misc/mobile-menu.svg"}}>
                                    <img src={menu} alt="Mobile Menu button"/>
                                </button>
                        </div>

                    </nav>
                </div> 
            </header>

        <main className='mx-auto min-h-screen  min-w-[360px]'>
            <Outlet />
        </main>


        <button 
        className='fixed bottom-5 right-1/2 translate-x-1/2 w-18 h-auto hover:scale-110 transition-transform duration-200' 
        style={{ transform: bttVisible ? 'translateY(0%)' : 'translateY(150%)' }} 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src="/src/assets/images/icons/btt-icon.svg" 
            alt="Scroll to top button"/>
        </button>

        
        <menu className='px-3 fixed right-0 flex flex-col items-left w-full h-[1000px] bg-[var(--primary-color)] top-20 transition-transform duration-300 overflow-hidden' style={{ transform: mobileMenuOpen ? 'translateX(0%)' : 'translateX(100%)'}}>
                <button className='flex items-center space-x-2 pl-4 my-3 mt-10' onClick={() => setMobileMenuOpen(false)}>
                    <img src="/src/assets/images/icons/home-icon.svg" alt="Homepage icon" className="w-8 h-8"/>
                    <a href="/" className='text-[115%] font-[arial-black]'>Home</a>
                </button>

                <button className='flex items-center space-x-2 pl-4 my-3' onClick={() => setMobileMenuOpen(false)}>
                    <img src="/src/assets/images/icons/blog-icon.svg" alt="Blog icon" className="w-8 h-8"/>
                    <a href="/blog" className='text-[115%] font-[arial-black]'>Blog</a>
                </button>

                <button className='flex items-center space-x-2 pl-4 my-3' onClick={() => setMobileMenuOpen(false)}>
                    <img src="/src/assets/images/icons/resume-icon.svg" alt="Resume icon" className="w-8 h-8"/>
                    <a href="/resume" className='text-[115%] font-[arial-black]'>Resume</a>
                </button>

            <p className='text-[100%] font-[arial-black] text-left items-left justify-left mt-10 px-5 '>My socials:</p>
            <div className='flex items-left pt-3 px-4 pb-5 justify-left '>
                <button><a href="https://github.com/mehiis" target="_blank"><img src={gitHubLogo} alt="GitHub Logo 2025" className="w-11 h-11 mx-2 hover:scale-120 transition-transform duration-300" /></a></button>
                <button><a href="https://fi.linkedin.com/in/nikomehilainen" target="_blank"><img src={linkedInLogo} alt="LinkedIn Logo 2025" className="w-11 h-11 mx-2 hover:scale-120 transition-transform duration-300" /></a></button>
            </div>
        </menu>

        <footer className='mt-10 '>
            <img src="/src/assets/images/style/bottom-wave.svg" alt="Wave Top" className="w-full"/>
            <div className='bg-[var(--primary-color)] p-15 justify-center items-center min-w-[360px] pb-25'>
                <img src="/src/assets/images/logos/full-name.png" alt="Image of stylized full name, small flower and text 'niko mehiläinen'." className="w-80 h-auto mx-auto mb-3"/>
                <div className='flex justify-center'>
                    <a href="https://github.com/mehiis" target="_blank"><img src={gitHubLogo} alt="GitHub Logo 2025" className="w-8 h-auto mx-3 hover:scale-115 transition-transform duration-150" /></a>
                    <a href="https://fi.linkedin.com/in/nikomehilainen" target="_blank"><img src={linkedInLogo} alt="LinkedIn Logo 2025" className="w-8 h-auto mx-3 hover:scale-115 transition-transform duration-150" /></a>
                    <a href="https://www.instagram.com/nikomehilainen/" target="_blank"><img src={instagramLogo} alt="Instagram Logo 2025" className="w-8 h-auto mx-3 hover:scale-115 transition-transform duration-150" /></a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Layout