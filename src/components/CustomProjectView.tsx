import React from 'react'

type Props = {
    title: string,
    year: number,
    description: string,
    tech: string[],
    image: string
}

const CustomProjectView: React.FC<Props> = ({title, description, year, tech, image}) => {
  return (
    <div className="bg-[var(--primary-color)] p-8 text-shadow-sm rounded-xl">
        <div className=" items-center md:grid md:grid-cols-[260px_1fr]">
            <img src={image} alt={"Cover image of the job place " + title} className="w-auto max-h-[150px] object-contain mx-auto"/>
            
            <div className="text-[var(--black-color)] p-4">
                <div className="md:flex md:gap-2">
                    <h3 className="text-[140%] font-[arial-black]">{title}</h3>
                    <p className="text-[80%]">{year}</p>
                </div>
                <p className="text-[120%] mt-4 font-[arial]">{description}</p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                    <p>Implemented with:</p>
                    {tech.map((skill, index) => (
                        <span key={index} className="bg-[var(--secondary-color)] text-[var(--black-color)] text-[90%] px-4 py-1 clip-path-custom">{skill}</span>
                    ))}
                </div>
            </div>

        </div>
    </div>
  )
}
export default CustomProjectView
