import { Link } from "react-router-dom";
import logo from "@/assets/images/logos/logo-text-with-desc.png";
import homebutton from "@/assets/images/buttons/home-button.png";
import resumebutton from "@/assets/images/buttons/resume-button.png"
import github from "@/assets/images/icons/gh.png";
import linkedin from "@/assets/images/icons/li.png";
import mobilemenuclosed from "@/assets/images/misc/close-menu.svg"
import mobilemenuopenicon from "@/assets/images/misc/mobile-menu.svg"
import resume from "@/assets/resume.pdf"

type NavigationBarProps = {
    isVisible: boolean;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

const NavigationBar = (navProps: NavigationBarProps) => {
  return (
            <div className='bg-[var(--primary-color)] min-w-[360px] shadow-sm sticky top-0 z-50 transition-transform duration-200 position-absolute px-5 py-2' style={{ transform: navProps.isVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
                <div className="max-w-[1440px] min-w-[360px] mx-auto flex items-center justify-between bg-[var(--primary-color)] hidden md:flex md:px-10" >
                    <Link to="/"><img src={logo} alt="Logo" className="w-35 h-auto hover:scale-115 transition-transform duration-150 w-auto max-h-[65px]"/></Link>

                        <nav className='flex justify-between items-center'>
                        <ul className='flex justify-around items-center mr-10'>
                            <li className="mr-10">
                                    <Link to="/" className="py-1">
                                        <img src={homebutton} alt="Home button" className="hover:scale-115 transition-transform duration-300 w-auto max-h-[28px]"/>
                                    </Link>
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

                            <li className="mr-10">
                                        <a href={resume} target="_blank" rel="noopener noreferrer" className="py-1">
                                            <img src={resumebutton} alt="Resume button" className="hover:scale-115 transition-transform duration-300 w-auto max-h-[28px]"/>
                                        </a>
                            </li>

                        </ul>
                        <div className='flex justify-around items-center'>
                            <a href="https://github.com/mehiis" target="_blank"><img src={github} alt="GitHub Logo 2025" className="w-11 h-11 mx-2 hover:scale-120 transition-transform duration-300" /></a>
                            <a href="https://fi.linkedin.com/in/nikomehilainen" target="_blank"><img src={linkedin} alt="LinkedIn Logo 2025" className="w-11 h-11 mx-2 hover:scale-120 transition-transform duration-300" /></a>
                        </div>
                    </nav>
                </div>

                    <div className="flex items-center justify-between md:hidden" >
                        <Link to="/"><img src={logo} alt="Logo" className="w-35 h-auto hover:scale-105 transition-transform duration-150"/></Link>

                        <nav className='flex justify-between items-center my-1'>
                            <div className='flex justify-around items-center'>
                          <button
                            className="w-[50px] h-[50px]"
                            onClick={() => navProps.setMobileMenuOpen(!navProps.mobileMenuOpen)}
                          >
                            <img
                              src={navProps.mobileMenuOpen ? mobilemenuclosed : mobilemenuopenicon}
                              alt="Mobile Menu button"
                            />
                          </button>
                        </div>

                    </nav>
                </div>
            </div>
  )
}

export default NavigationBar
