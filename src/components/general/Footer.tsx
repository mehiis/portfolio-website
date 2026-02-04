import github from "@/assets/images/icons/gh.webp";
import linkedin from "@/assets/images/icons/li.webp"
import instagram from "@/assets/images/icons/ig.webp";
import fullNameLogoLg from "@/assets/images/full-name/nikomehilainen-lg.webp";
import fullNameLogoSm from "@/assets/images/full-name/nikomehilainen-sm.webp";
import { Link } from "react-router";

const Footer = () => {
  return (
        <footer className='mt-0'>
            <div className='bg-[var(--primary-color)] p-15 justify-center items-center min-w-[360px] pb-25'>
                <Link to="/">
                  <img 
                  src={fullNameLogoLg}
                  srcSet={`
                    ${fullNameLogoLg} 480w,
                    ${fullNameLogoSm} 240w
                  `}
                  loading="lazy"
                  alt="Image of stylized full name, small flower and text 'niko mehilaeinen'."
                  className="w-[240px] md:w-[280px] h-auto mx-auto mb-3 hover:scale-105 transition-transform duration-150 aspect-[8/1]"
                  width="240"
                  height="30"
                  />
                </Link>

                <div className='flex justify-center'>
                    <a href="https://github.com/mehiis" target="_blank">
                      <img
                        src={github}
                        loading="lazy"
                        alt="GitHub Logo 2025"
                        className="w-8 h-auto mx-3 hover:scale-115 transition-transform duration-150 aspect-square"
                        width="500"
                        height="500"/>
                    </a>
                    <a href="https://fi.linkedin.com/in/nikomehilainen" target="_blank">
                    <img 
                      src={linkedin} 
                      loading="lazy" 
                      alt="LinkedIn Logo 2025" 
                      className="w-8 h-auto mx-3 hover:scale-115 transition-transform duration-150 aspect-square" 
                      width="500"
                      height="500"/>
                    </a>
                    <a href="https://www.instagram.com/nikomehilainen/" target="_blank">
                      <img
                        src={instagram}
                        loading="lazy"
                        alt="Instagram Logo 2025"
                        className="w-8 h-auto mx-3 hover:scale-115 transition-transform duration-150 aspect-square"
                        width="500"
                        height="500" />
                      </a>
                </div>
            </div>
        </footer>
  )
}

export default Footer
