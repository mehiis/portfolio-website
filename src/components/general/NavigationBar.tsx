import { Link } from "react-router-dom";
import logoLg from "@/assets/images/nav-logo/logo-lg.webp";
import logoSm from "@/assets/images/nav-logo/logo-sm.webp";
import homebutton from "@/assets/images/buttons/home-button.webp";
import resumebutton from "@/assets/images/buttons/resume-button.webp";
import blogButton from "@/assets/images/buttons/blog-button.webp"
import github from "@/assets/images/icons/gh.webp";
import linkedin from "@/assets/images/icons/li.webp";
import mobilemenuclosed from "@/assets/images/misc/close-mobile-menu.webp"
import mobilemenuopenicon from "@/assets/images/misc/mobile-menu.webp"

type NavigationBarProps = {
    isVisible: boolean;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

const NavigationBar = (navProps: NavigationBarProps) => {
  return (
            <div className='bg-[var(--primary-color)] min-w-[360px] shadow-sm sticky top-0 z-50 transition-transform duration-200 position-absolute px-5 py-2 z-200' style={{ transform: navProps.isVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
                <div className="max-w-[1440px] min-w-[360px] mx-auto flex items-center justify-between bg-[var(--primary-color)] hidden xl:flex lg:px-40" >
                    <Link to="/">
                      <img 
                      src={logoLg}
                      srcSet={`
                        ${logoSm} 100w,
                        ${logoLg} 200w`
                      }
                      sizes="(max-width: 768px) 100px, 200px"
                      alt="Logo"
                      className="hover:scale-105 h-auto w-[100px] transition-transform duration-300 aspect-[2/1]"
                      width="200"
                      height="100"
                      loading="lazy"
                      />

                      </Link>

                        <nav className='flex justify-between items-center'>
                        <ul className='flex justify-around items-center mr-10'>
                            <li className="mr-10">
                                    <Link to="/" className="py-1">
                                        <img src={homebutton}
                                          alt="Home button"
                                          className="hover:scale-110 transition-transform duration-300 h-auto w-[80px] aspect-[10/3]"
                                          width="160"
                                          height="48"
                                          loading="lazy"
                                          />
                                    </Link>
                            </li>


                            <li className="mr-10">
                                    <Link to="/blogs/1" className="py-1">
                                        <img
                                          src={blogButton}
                                          alt="Blogs button"
                                          className="hover:scale-110 transition-transform duration-300 h-auto w-[75px] aspect-[5/2]"
                                          width="150"
                                          height="60"
                                          loading="lazy"
                                          />
                                    </Link>
                            </li>

                            <li className="mr-10">
                                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="py-1">
                                            <img
                                              src={resumebutton}
                                              alt="Resume button"
                                              className="hover:scale-110 transition-transform duration-300 w-[120px] h-auto aspect-[4/1]"
                                              width="200"
                                              height="50"
                                              loading="lazy"
                                              />
                                        </a>
                            </li>

                        </ul>
                        <div className='flex justify-around items-center'>
                            <a href="https://github.com/mehiis" target="_blank" rel="noopener noreferrer">
                            <img
                              src={github}
                              alt="GitHub Logo 2025 - Link to my GitHub"
                              className="w-8 h-auto mx-2 hover:scale-115 transition-transform duration-300 aspect-square"
                              width="64"
                              height="64"
                              loading="lazy"
                              />
                            </a>
                            <a href="https://fi.linkedin.com/in/nikomehilainen" target="_blank" rel="noopener noreferrer">
                              <img 
                              src={linkedin} alt="LinkedIn Logo 2025 - Link to my LinkedIn" 
                              className="w-8 h-auto mx-2 hover:scale-115 transition-transform duration-300 aspect-square" 
                              width="64"
                              height="64"
                              loading="lazy"
                              />
                            </a>
                        </div>
                    </nav>
                </div>

                <div className="flex items-center justify-between xl:hidden z-200" >
                        <Link to="/">
                          <img 
                          src={logoLg}
                          srcSet={`
                            ${logoSm} 100w,
                             ${logoLg} 200w`
                            }
                          sizes="(max-width: 768px) 100px, 200px"
                          alt="Logo"
                          className="hover:scale-105 mx-2 transition-transform duration-150 h-auto w-[100px] aspect-[2/1]"
                          width="64"
                          height="64"
                          loading="lazy"
                          />

                        </Link>

                        <nav className='flex justify-between items-center my-1'>
                            <div className='flex justify-around items-center'>
                          <button
                            className="w-[50px] h-[50px]"
                            onClick={() => navProps.setMobileMenuOpen(!navProps.mobileMenuOpen)}
                          >
                            <img
                              src={navProps.mobileMenuOpen ? mobilemenuclosed : mobilemenuopenicon}
                              className="h-auto w-[50px] aspect-square"
                              alt="Mobile Menu toggle button"
                              width="100"
                              height="100"
                              loading="lazy"
                            />
                          </button>
                        </div>

                    </nav>
                </div>
            </div>
  )
}

export default NavigationBar
