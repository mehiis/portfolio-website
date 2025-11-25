const Me = () => {
  const age = new Date().getFullYear() - 1998;

  return (
    <div className='bg-[var(--primary-color)] mx-auto py-5'>
        <div className='max-w-[1440px] mx-auto text-white p-5'>
            <h1 className="text-[2vw] text-black">About Me</h1>
            <p className="text-[1.3vw] text-gray-700 p-10 bg-[var(--white-color)] m-4">
                Hi! <br/><br/>I’m Niko Mehiläinen, a {age}-year-old software developer from Finland. I’ve always enjoyed tinkering with code, so ending up in this profession feels pretty natural. My programming journey kicked off back in upper secondary school around 2014, and ever since then I’ve been coding on and off.<br/><br/>

                I started out building small, quirky games in Unity, and that creative spark never really went away. I still love designing and making games, and generally anything that’s visually polished, functional, and fun to use. I’m the kind of person who gets unreasonably excited about clean UI and small technical victories.
            </p>
        </div>
    </div>
  )
}

export default Me