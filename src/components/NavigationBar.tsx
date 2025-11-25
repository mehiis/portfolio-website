import React from 'react'
import { Link } from 'react-router-dom'

type NavigationBarProps = {
    isVisible: boolean;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

let menu = "";

const NavigationBar = ({ isVisible, mobileMenuOpen, setMobileMenuOpen }: NavigationBarProps) => {
  return (
            <header className='bg-[var(--primary-color)] min-w-[360px] pb-2 shadow-sm sticky top-0 z-50 transition-transform duration-200 position-absolute px-5' style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
                
                <div className="max-w-[1440px] min-w-[360px] mx-auto flex items-center justify-between bg-[var(--primary-color)] hidden md:flex" >
                    <Link to="/"><img src="/src/assets/images/logos/logo-text-with-desc.png" alt="Logo" className="w-35 h-auto hover:scale-105 transition-transform duration-150"/></Link>

                        <nav className='flex justify-between items-center my-3 bg-[var(--primary-color)'>
                        {/*<ul className='flex justify-around items-center m-3 p-4'>
                            <li className='text-[1.5vw] font-[header] mr-5 text-white shadow-md px-5 py-1 bg-[var(--secondary-color)] hover:scale-110 transition-transform duration-300'><button><Link to="/">Home</Link></button></li>
                            <li className='text-[1.5vw] font-[header] mr-5 text-white shadow-md px-5 py-1 bg-[var(--secondary-color)] hover:scale-110 transition-transform duration-300'><button><Link to="/blogs">Blog</Link></button></li>
                        </ul>*/} 
                        <ul className='flex justify-around items-center m-3 p-4'>
                            <li>
                                <button className='text-[1.5vw] font-[header] mr-5shadow-md px-5 py-1 hover:scale-115 transition-transform duration-300'>
                                    <a href="/">
                                        <img src="/src/assets/images/buttons/home-button.svg" alt="Home button"/>
                                    </a>
                                </button>
                            </li>

                            {/* COMING SOON...
                            <li>
                                <button className='text-[1.5vw] font-[header] mr-5shadow-md px-5 py-1 hover:scale-115 transition-transform duration-300'>
                                <li>
                                <button className='text-[1.5vw] font-[header] mr-5shadow-md px-5 py-1 hover:scale-115 transition-transform duration-300'>
                                    <a href="/">
                                        <img src="/src/assets/images/buttons/blog-button.svg" alt="Blog button"/>
                                    </a>
                                </button>
                            </li>*/}
                            
                            <li>
                                <button className='text-[1.5vw] font-[header] mr-5shadow-md px-5 py-1 hover:scale-115 transition-transform duration-300'>
                                    <a href="/resume">
                                        <img src="/src/assets/images/buttons/resume-button.svg" alt="Resume button"/>
                                    </a>
                                </button>
                            </li>

                        </ul>
                        <div className='flex justify-around items-center'>
                            <button><a href="https://github.com/mehiis" target="_blank"><img src="/src/assets/images/icons/gh.png" alt="GitHub Logo 2025" className="w-11 h-11 mx-2 hover:scale-120 transition-transform duration-300" /></a></button>
                            <button><a href="https://fi.linkedin.com/in/nikomehilainen" target="_blank"><img src="/src/assets/images/icons/li.png" alt="LinkedIn Logo 2025" className="w-11 h-11 mx-2 hover:scale-120 transition-transform duration-300" /></a></button>
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
  )
}

export default NavigationBar
