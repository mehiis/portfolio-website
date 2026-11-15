import Wave from "../homepage/components/Wave";

const Me = () => {
  const month = (new Date().getMonth() + 1) - 8;
  const age = new Date().getFullYear() - 1998;


  return (
    <div className="bg-(--secondary-color) justify-end flex flex-col">
      <div className="bg-(--white-color)">
        <Wave waveColor="#FAFAFA" baseColor="#FFE063" />
      </div>
      <section className='max-w-360 min-w-90 mx-auto p-2 md:px-10'>

          <div className='p-4 m-4'>
            <div className="bg-(--white-color) w-full rounded-lg flex flex-wrap gap-4 lg:px-15 p-8 md:p-15 lg:p-15">
                <h3 className="font-[LeagueSpartanBold] md:text-xl text-2xl">Moi, I'm Niko</h3>
                <p className="text-lg md:text-xl font-[LeagueSpartanRegular]">

                    I’m a {month >= 0 ?  age  : age - 1}-year-old software engineering student from Helsinki, Finland. I thank you for showing interest in my portfolio!<br/><br/>

                    My coding journey started with building small, quirky games in Unity, and that creative spark never really went away. <b>I love designing and making games</b>, and generally anything that is visually polished, functional, and fun to use. I live for <b>clean UI</b> and <b>small technical victories</b>.

                    <br/><br/>

                    I thrive on challenging myself and constantly <b>seeking new ways to improve my skills</b>. I'm always open to chat, whether it's about potential job opportunities or just to say hi! Find my contact details on my resume or connect via social media. <b>Let's create something amazing together!</b>

                    </p>
              </div>
          </div>

      </section>
      </div>
  )
}

export default Me
