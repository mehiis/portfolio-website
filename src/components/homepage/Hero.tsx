function Hero() {
  return (
    <>
      <section className="py-10 items-center bg-[var(--primary-color)] px-0 shadow-sm 2xl:py-20">
        <div
          className="max-w-[1440px] min-w-[360px] m-auto md:flex md:justify-between sm:center items-center justify-center md:px-10 lg:px-25">
          <img
            className="w-2/3 sm:w-1/2 md:w-1/4 mx-auto md:mx-0 mb-6 md:mb-0 object-contain aspect-square"
            alt="Hero Image 2025"
            fetchPriority="high"
            loading="eager"
            src="/hero-img/hero-image-lg.webp"
            srcSet=
            {`
              /hero-img/hero-image-sm.webp 280w,
              /hero-img/hero-image-lg.webp 560w
            `}
            sizes="(max-width: 640px) 280px, 480px"
            width="280"
            height="280"
          />

          <p className="text-xl 2xl:text-2xl font-[LeagueSpartanRegular] bg-[var(--white-color)] text-[var(--black-color)] shadow-sm rounded-lg my-auto  mx-10 p-8">
            What I love most about programming is its <b>creative power</b> to turn ideas into immersive, meaningful experiences. <br></br> <br></br>It brings together various forms of art and has the <b>unique ability to connect people</b>.
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
