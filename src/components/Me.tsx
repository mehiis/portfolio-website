const Me = () => {
  const age = new Date().getFullYear() - 1998;

  return (
    <div className='bg-[var(--primary-color)] mx-auto py-5'>
        <div className='max-w-[1440px] mx-auto text-white p-5'>
            <h1 className="text-[2vw] font-[header] text-black italic">About Me</h1>
            <p className="text-[1.3vw] text-gray-700 p-10 bg-[var(--white-color)] m-4">
                Hi, I am Niko Mehiläinen* an {age}-year-old software developer from Finland. I enjoy programming, so I would say I am in the right profession. I started my programming jorney when I got to upper secondary school in ~2014?, and I have been on-off coding ever since. <br/><br/>I started my jorney programming little funny games made with Unity Game Engine and I still enjoy making and designing games. I like to create visually appealing and functional software, and I am always eager to learn new technologies and improve my skills. <br/><br/> I have a dream to get to work in the field of software development, and I am currently looking for opportunities to gain more experience and knowledge. I am passionate about coding and I believe that with hard work and dedication, I can achieve my goals in this field.
            </p>
            <p className="text-[var(--secondary-color)] mx-5" >* My last name means 'bee' in English, pronounced [ˈme̞hiˌlæi̯nen]. 🐝</p>
        </div>
    </div>
  )
}

export default Me