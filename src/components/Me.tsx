const Me = () => {
  const age = new Date().getFullYear() - 1998;

  return (
    <>
      <img src="/src/assets/images/style/wave-secondary.svg" alt="Wave Top" className="w-full mt-10"/>
      <div className='bg-[var(--secondary-color)] mx-auto py-5 m-full pb-40'>
          
          <div className='max-w-[1440px] min-w-[360px] mx-auto p-2'>
            <div className="text-[140%] font-[arial] text-gray-700 p-10 py-12 px-11 bg-[var(--white-color)] rounded-lg shadow-sm">
                <h3 className="font-[arial-black]">Hello there,</h3>
                <p>
                    I am Niko Mehiläinen, a {age}-year-old software developer from Helsinki, Finland and I thank you for showing interest in my portfolio! <b>&lt;3</b> <br/><br/>I’ve always enjoyed playing around with code, so ending up pursuing this field both academically and professionally feels pretty natural. My programming journey kicked off around 2014, when I discovered the Unity game engine and ever since, I’ve been coding on and off.<br/><br/>

                    I started out building small, quirky games in Unity, and that creative spark never really went away. I still love designing and making games, and generally anything that’s visually polished, functional, and fun to use. I’m the kind of person who gets unreasonably excited about clean UI and small technical victories.
                </p>
              </div>
          </div>

      </div>
    </>
  )
}

export default Me