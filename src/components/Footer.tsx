const Footer = () => {
  return (
        <footer className='mt-10 '>
            <img src="/src/assets/images/style/bottom-wave.svg" alt="Wave Top" className="w-full"/>
            <div className='bg-[var(--primary-color)] p-15 justify-center items-center min-w-[360px] pb-25'>
                <img src="/src/assets/images/logos/full-name.png" alt="Image of stylized full name, small flower and text 'niko mehiläinen'." className="w-80 h-auto mx-auto mb-3"/>
                <div className='flex justify-center'>
                    <a href="https://github.com/mehiis" target="_blank"><img src="/src/assets/images/icons/gh.png" alt="GitHub Logo 2025" className="w-8 h-auto mx-3 hover:scale-115 transition-transform duration-150" /></a>
                    <a href="https://fi.linkedin.com/in/nikomehilainen" target="_blank"><img src="/src/assets/images/icons/li.png" alt="LinkedIn Logo 2025" className="w-8 h-auto mx-3 hover:scale-115 transition-transform duration-150" /></a>
                    <a href="https://www.instagram.com/nikomehilainen/" target="_blank"><img src="/src/assets/images/icons/ig.png" alt="Instagram Logo 2025" className="w-8 h-auto mx-3 hover:scale-115 transition-transform duration-150" /></a>
                </div>
            </div>
        </footer>
  )
}

export default Footer
