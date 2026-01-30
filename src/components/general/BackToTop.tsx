import backToTopIcon from "@/assets/images/buttons/back-to-top.webp";

type BackToTopProps = {
    bttVisible: boolean;
}

const BackToTop = (props: BackToTopProps) => {
  return (
        <button
        className='fixed bottom-5 right-1/2 translate-x-1/2 w-20 h-auto hover:scale-105 transition-transform duration-200'
        style={{ transform: props.bttVisible ? 'translateY(0%)' : 'translateY(150%)' }}
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src={backToTopIcon}
            loading="lazy"
            alt="Scroll to top button"
            width="80"
            height="80"
            />
        </button>
  )
}

export default BackToTop
