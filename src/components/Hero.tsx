import heroImg from "@/assets/images/misc/hero-image.png";

function Hero() {
    return (
          <>
          <section className="py-10 items-center bg-[var(--primary-color)]">
              <div
              className="max-w-[1440px] min-w-[360px] m-auto md:flex md:justify-between sm:center items-center justify-center">
                  <img
                  className="object-contain mb-10 md:mb-0 md:mr-10 w-2/3 sm:w-1/2 md:w-1/3 mx-auto md:mx-0"
                  alt="Hero Image 2025"
                  src={heroImg}
                  />

                  <p className="text-3xl lg:text-3xl md:text-3xl sm:text-lg font-[arial] font-bold bg-[var(--white-color)] text-[var(--black-color)] shadow-sm rounded-lg my-auto  mx-10 p-8">What I love most about programming is its creative power to turn ideas into immersive, meaningful experiences. <br></br> <br></br>It brings together various forms of art and has the unique ability to connect people.</p>
              </div>
          </section>
</>
        );
}

export { Hero };
