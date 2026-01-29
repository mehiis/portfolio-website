import github from "@/assets/images/icons/github-mark.svg";
{/*import linkedin from "@/assets/images/icons/inBug-Black.png";*/}
import instagram from "@/assets/images/icons/ig.png";
import fullNameLogo from "@/assets/images/logos/full-name.png"
import { Link } from "react-router";

const Footer = () => {
  return (
        <footer className='mt-0'>
            <div className='bg-[var(--primary-color)] p-15 justify-center items-center min-w-[360px] pb-25'>
                <Link to="/">
                  <img src={fullNameLogo}
                  loading="lazy"
                  alt="Image of stylized full name, small flower and text 'niko mehiläinen'."
                  className="w-auto max-h-[35px] mx-auto mb-3 hover:scale-105 transition-transform duration-150"
                  width="150"
                  height="75"
                  />
                </Link>

                <div className='flex justify-center'>
                    <a href="https://github.com/mehiis" target="_blank">
                      <img
                        src={github}
                        loading="lazy"
                        alt="GitHub Logo 2025"
                        className="w-8 h-auto mx-3 hover:scale-115 transition-transform duration-150"
                        width="32"
                        height="32"/>
                    </a>
                    {/*<a href="https://fi.linkedin.com/in/nikomehilainen" target="_blank"><img src={linkedin} loading="lazy" alt="LinkedIn Logo 2025" className="w-8 h-auto mx-3 hover:scale-115 transition-transform duration-150" /></a>*/}
                    <a href="https://www.instagram.com/nikomehilainen/" target="_blank">
                      <img
                        src={instagram}
                        loading="lazy"
                        alt="Instagram Logo 2025"
                        className="w-8 h-auto mx-3 hover:scale-115 transition-transform duration-150"
                        width="32"
                        height="32" />
                      </a>
                </div>
            </div>
        </footer>
  )
}

export default Footer
