function Hero() {
    return (
        <>
        <div className="py-10 items-center bg-[var(--primary-color)]">
            <div 
            className="max-w-[1440px] min-w-[360px] m-auto md:flex md:justify-between sm:center items-center justify-center">
                <img 
                className="object-contain mx-auto md:mx-0 mb-10" 
                width={"30%"}
                height="auto" 
                alt="Hero Image 2025"
                src="/src/assets/images/misc/hero-image.png" 
                />

                <p className="text-[2.5vh] font-[arial] font-bold bg-[var(--white-color)] text-[var(--black-color)] shadow-sm rounded-lg my-auto  mx-10 p-8">What I love most about programming is its creative power to turn ideas into immersive, meaningful experiences. <br></br> <br></br>It brings together various forms of art and has the unique ability to connect people.</p>
            </div>
        </div>

        <img src="/src/assets/images/style/top-wave.svg" alt="Wave Bottom" className="w-full"/>
        </>
        );
}

export { Hero };