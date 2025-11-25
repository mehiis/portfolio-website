import { Link, Outlet, useLocation } from 'react-router'
import gitHubLogo from '../assets/gh.png'
import linkedInLogo from '../assets/li.png'
import instagramLogo from '../assets/ig.png'
import resumedl from '../assets/resume-dl.png'
import { useEffect } from 'react';

const Layout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

  return (
    <>
            <header className='bg-[var(--primary-color)] sticky top-0 z-50 min-w-[360px]'>
                <div className="max-w-[1440px] min-w-[360px] mx-auto flex items-center justify-between ">
                    <Link to="/"><img src="/src/assets/logo-text-with-desc.png" alt="Logo" className="w-35 h-auto hover:scale-110 transition-transform duration-150"/></Link>

                    <nav className='flex justify-between items-center min-h-[80px] mb-3'>
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
            </header>

        <main className='mx-auto min-h-screen  min-w-[360px]'>
            <Outlet />
        </main>


        <footer mt-10>
            <img src="/src/assets/bottom-wave.svg" alt="Wave Top" className="w-full"/>
            <div className='bg-[var(--primary-color)] p-15 justify-center items-center min-w-[360px]'>
                <img src="/src/assets/full-name.png" alt="Image of stylized full name, small flower and text 'niko mehiläinen'." className="w-80 h-auto mx-auto mb-3"/>
                <div className='flex justify-center'>
                    <a href="https://github.com/mehiis" target="_blank"><img src={gitHubLogo} alt="GitHub Logo 2025" className="w-8 h-8 mx-3" /></a>
                    <a href="https://fi.linkedin.com/in/nikomehilainen" target="_blank"><img src={linkedInLogo} alt="LinkedIn Logo 2025" className="w-8 h-8 mx-3" /></a>
                    <a href="https://www.instagram.com/nikomehilainen/" target="_blank"><img src={instagramLogo} alt="Instagram Logo 2025" className="w-8 h-8 mx-3" /></a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Layout