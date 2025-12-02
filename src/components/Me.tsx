const Me = () => {
  const month = (new Date().getMonth() + 1) - 8;
  const age = new Date().getFullYear() - 1998;

  return (
    <div className="bg-[var(--secondary-color)]">
      <section className='max-w-[1440px] min-w-[360px] mx-auto p-2'>

          <div className='p-4 m-4'>
            <div className="bg-white w-full rounded-lg flex flex-wrap gap-4 lg:px-15 p-8 md:p-15 lg:p-15">
                <h3 className="font-[arial-black] lg:text-3xl md:text-3xl text-2xl">Hi, I'm Niko</h3>
                <p className="lg:text-3xl md:text-3xl text-lg font-[arial]">
                    <br/>
                    I'm a {month >= 0 ?  age  : age - 1}-year-old software developer from Helsinki, Finland and I thank you for showing interest in my portfolio!

                    <b> &lt;3</b> <br/><br/>I’ve always enjoyed playing around with code, so ending up pursuing this field both academically and professionally feels pretty natural. My programming journey kicked off around 2014, when I discovered the Unity game engine and ever since, I’ve been coding on and off.

                    <br/><br/>
                    I started out building small, quirky games in Unity, and that creative spark never really went away. I still love designing and making games, and generally anything that’s visually polished, functional, and fun to use. I’m the kind of person who gets unreasonably excited about clean UI and small technical victories.
                </p>
              </div>
          </div>

      </section>
      </div>
  )
}

export default Me
