const Me = () => {
  const age = new Date().getFullYear() - 1998;

  return (
    <>
      <img src="/src/assets/images/style/wave-secondary.svg" alt="Wave Top" className="w-full mt-10"/>
      <div className='bg-[var(--secondary-color)] mx-auto mb-[-125px] py-5 m-full'>
          
          <div className='max-w-[1440px] min-w-[360px] mx-auto p-2'>
            <div className="text-[160%] font-[arial] text-gray-700 p-10 bg-[var(--white-color)] rounded-md">
                <h3 className="font-[arial-black]">Hi! I'm Niko Mehiläinen,</h3>
                <p>
                    <br/>a {age}-year-old software developer from Finland and I thank you for showing interest in my portfolio! <b>&lt;3</b> I’ve always enjoyed playing around with code, so ending up pursuing this field academically and professionally feels pretty natural. My programming journey kicked off around 2014, when I discovered the Unity game engine and ever since, I’ve been coding on and off.<br/><br/>

                    I started out building small, quirky little games in Unity, and that creative spark never really went away. I still love designing and making games, and generally anything that’s visually polished, functional, and fun to use. I’m the kind of person who gets unreasonably excited about clean UIs and small technical victories.
                </p>
              </div>
          </div>

      </div>
    </>
  )
}

export default Me