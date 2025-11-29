import { Link } from "react-router-dom";
import logo from "@/assets/images/logos/logo-text-with-desc.png";
import homebutton from "@/assets/images/buttons/home-button.svg";
import resumebutton from "@/assets/images/buttons/resume-button.svg"
import github from "@/assets/images/icons/gh.png";
import linkedin from "@/assets/images/icons/li.png";
import mobilemenuclosed from "@/assets/images/misc/close-menu.svg"
import mobilemenuopenicon from "@/assets/images/misc/mobile-menu.svg"

type NavigationBarProps = {
    isVisible: boolean;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

const NavigationBar = ({ isVisible, mobileMenuOpen, setMobileMenuOpen }: NavigationBarProps) => {
  return (
            <header className='bg-[var(--primary-color)] min-w-[360px] shadow-sm sticky top-0 z-50 transition-transform duration-200 position-absolute px-5' style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
                <div className="max-w-[1440px] min-w-[360px] mx-auto flex items-center justify-between bg-[var(--primary-color)] hidden md:flex" >
                    <Link to="/"><img src={logo} alt="Logo" className="w-35 h-auto hover:scale-105 transition-transform duration-150"/></Link>

                        <nav className='flex justify-between items-center my-1'>
                        <ul className='flex justify-around items-center m-3 p-4'>
                            <li>
                                <button className='text-[1.5vw] font-[header] mr-5 px-4 py-1 hover:scale-115 transition-transform duration-300'>
                                    <Link to="/">
                                        <img src={homebutton} alt="Home button"/>
                                    </Link>
                                </button>
                            </li>

                            {/* COMING SOON...
                            <li>
                                <button className='text-[1.5vw] font-[header] mr-5 px-4 py-1 hover:scale-115 transition-transform duration-300'>
                                <li>
                                <button className='text-[1.5vw] font-[header] mr-5shadow-md px-5 py-1 hover:scale-115 transition-transform duration-300'>
                                    <a href="/">
                                        <img src="/src/assets/images/buttons/blog-button.svg" alt="Blog button"/>
                                    </a>
                                </button>
                            </li>*/}

                            <li>
                                <button className='text-[1.5vw] font-[header] mr-5 px-4 py-1 hover:scale-115 transition-transform duration-300'>
                                    <Link to="/resume">
                                        <img src={resumebutton} alt="Resume button"/>
                                    </Link>
                                </button>
                            </li>

                        </ul>
                        <div className='flex justify-around items-center'>
                            <button><a href="https://github.com/mehiis" target="_blank"><img src={github} alt="GitHub Logo 2025" className="w-11 h-11 mx-2 hover:scale-120 transition-transform duration-300" /></a></button>
                            <button><a href="https://fi.linkedin.com/in/nikomehilainen" target="_blank"><img src={linkedin} alt="LinkedIn Logo 2025" className="w-11 h-11 mx-2 hover:scale-120 transition-transform duration-300" /></a></button>
                        </div>
                    </nav>
                </div>

                    <div className="flex items-center justify-between md:hidden" >
                        <Link to="/"><img src={logo} alt="Logo" className="w-35 h-auto hover:scale-105 transition-transform duration-150"/></Link>

                        <nav className='flex justify-between items-center my-1'>
                            <div className='flex justify-around items-center'>
                          <button
                            className="w-[50px] h-[50px]"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          >
                            <img
                              src={mobileMenuOpen ? mobilemenuclosed : mobilemenuopenicon}
                              alt="Mobile Menu button"
                            />
                          </button>
                        </div>

                    </nav>
                </div>
            </header>
  )
}

export default NavigationBar
