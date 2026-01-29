import { Link } from "react-router-dom";
import logo from "@/assets/images/logos/logo-text-with-desc.png";
import homebutton from "@/assets/images/buttons/home-button.png";
import resumebutton from "@/assets/images/buttons/resume-button.png"
import blogButton from "@/assets/images/buttons/blog-button.png"
import github from "@/assets/images/icons/github-mark.svg";
{/*import linkedin from "@/assets/images/icons/inBug-Black.png";*/}
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
                <div className="max-w-[1440px] min-w-[360px] mx-auto flex items-center justify-between bg-[var(--primary-color)] block hidden xl:flex lg:px-40" >
                    <Link to="/">
                      <img src={logo}
                      alt="Logo"
                      fetchPriority="high"
                      loading="eager"
                      className="h-auto hover:scale-105 transition-transform duration-300 w-auto max-h-[5px] lg:max-h-[60px]"/>
                      </Link>

                        <nav className='flex justify-between items-center'>
                        <ul className='flex justify-around items-center mr-10'>
                            <li className="mr-10">
                                    <Link to="/" className="py-1">
                                        <img src={homebutton} alt="Home button" className="hover:scale-110 transition-transform duration-300 w-auto max-h-[22px]"/>
                                    </Link>
                            </li>


                            <li className="mr-10">
                                    <Link to="/blogs/1" className="py-1">
                                        <img src={blogButton} alt="Blogs button" className="hover:scale-110 transition-transform duration-300 w-auto max-h-[26px]"/>
                                    </Link>
                            </li>

                            <li className="mr-10">
                                        <a href={resume} target="_blank" rel="noopener noreferrer" className="py-1">
                                            <img src={resumebutton} alt="Resume button" className="hover:scale-110 transition-transform duration-300 w-auto max-h-[22px]"/>
                                        </a>
                            </li>

                        </ul>
                        <div className='flex justify-around items-center'>
                            <a href="https://github.com/mehiis" target="_blank"><img src={github} alt="GitHub Logo 2025" className="w-8 h-8 mx-2 hover:scale-115 transition-transform duration-300" /></a>
                            {/*<a href="https://fi.linkedin.com/in/nikomehilainen" target="_blank"><img src={linkedin} alt="LinkedIn Logo 2025" className="w-8 h-8 mx-2 hover:scale-115 transition-transform duration-300" /></a>*/}
                        </div>
                    </nav>
                </div>

                <div className="flex items-center justify-between xl:hidden" >
                        <Link to="/">
                          <img src={logo}
                          fetchPriority="high"
                          loading="eager"
                          alt="Logo"
                          className="w-auto h-auto hover:scale-105 mx-2 transition-transform duration-150 max-h-[50px]"/>
                        </Link>

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
