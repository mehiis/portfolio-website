const Me = () => {
  const month = (new Date().getMonth() + 1) - 8;
  const age = new Date().getFullYear() - 1998;

  return (
    <div className="bg-[var(--secondary-color)]">
      <section className='max-w-[1440px] min-w-[360px] mx-auto p-2'>

          <div className='p-4 m-4'>
            <div className="bg-[var(--white-color)] w-full rounded-lg flex flex-wrap gap-4 lg:px-15 p-8 md:p-15 lg:p-15">
                <h3 className="font-[arial-black] lg:text-3xl md:text-3xl text-2xl">Hi, I'm Niko</h3>
                <p className="lg:text-3xl md:text-3xl text-lg font-[arial]">
                    <br/>
                    I'm a {month >= 0 ?  age  : age - 1}-year-old software developer from Helsinki, Finland and I thank you for showing interest in my portfolio! &lt;3 
  
                    <br/><br/>I started out building small, quirky games in Unity, and that creative spark never really went away. I love designing and making games, and generally anything that’s visually polished, functional, and fun to use. I’m the kind of person who gets unreasonably excited about clean UI and small technical victories. I'm always looking for new ways to improve my knowledge and skills, and I thrive in environments that challenge me to think from a new perspective.

                    <br/><br/>I'm always open to chat, so feel free to reach out if you'd like to discuss about potential collaborations or just want to say hi! You can find my contact information from my resume or reach out via social media. Let's create something amazing together!
                </p>
              </div>
          </div>

      </section>
      </div>
  )
}

export default Me
