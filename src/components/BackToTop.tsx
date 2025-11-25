import React from 'react'

type BackToTopProps = {
    bttVisible: boolean;
}

const BackToTop = ({ bttVisible }: BackToTopProps) => {
  return (
        <button 
        className='fixed bottom-5 right-1/2 translate-x-1/2 w-18 h-auto hover:scale-110 transition-transform duration-200' 
        style={{ transform: bttVisible ? 'translateY(0%)' : 'translateY(150%)' }} 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src="/src/assets/images/icons/btt-icon.svg" 
            alt="Scroll to top button"/>
        </button>
  )
}

export default BackToTop
