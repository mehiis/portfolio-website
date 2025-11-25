import React from 'react'

type Props = {
    title: string,
    role: string,
    duration: string,
    description: string,
    skills: string[],
    image: string
}


const CustomListView: React.FC<Props> = ({title, description, role, duration, skills, image}) => {
  return (
    <div className="bg-[var(--primary-color)] p-8 text-shadow-sm rounded-xl">
        <div className=" items-center md:grid md:grid-cols-[260px_1fr]">
            <img src={image} alt={"Cover image of the job place " + title} className="w-auto max-h-[150px] object-contain mx-auto"/>
            
            <div className="text-[var(--black-color)] p-4">
                <div className="flex gap-2 items-bottom">
                    <h3 className="text-[2vh] font-[arial-black]">{title}</h3>
                    <p className="text-[1.6vh]">{duration}</p>
                </div>
                <p className="text-[1.6vh] mb-4">{role}</p>
                <p className="text-[1.6vh]">{description}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                    <p>Skills:</p>
                    {skills.map((skill, index) => (
                        <span key={index} className="bg-[var(--secondary-color)] text-[var(--black-color)] text-[1.4vh] px-4 py-1 clip-path-custom">{skill}</span>
                    ))}
                </div>
            </div>

        </div>
    </div>
  )
}

export default CustomListView
