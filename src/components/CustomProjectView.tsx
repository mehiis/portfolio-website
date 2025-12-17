import { Link } from "react-router"

type Props = {
    id: number | string,
    title: string,
    year: number,
    description: string,
    tech: string[],
    icon: string
}

const CustomProjectView = ({id, title, description, year, tech, icon}: Props) => {
  return (
    <div className="bg-[var(--primary-color)] p-8 text-shadow-sm rounded-xl">
        <div className="items-center md:grid md:grid-cols-[260px_1fr]">
            <img src={icon} alt={"Icon of the project " + title} className="w-auto max-h-[150px] object-contain mx-auto"/>
            <div className="text-[var(--black-color)] p-4">
                <div className="md:flex md:gap-2">
                    <h3 className="text-[140%] font-[arial-black]">{title}</h3>
                    <p className="text-[80%]">{year}</p>
                </div>

                <p className="text-[120%] mt-4 font-[arial]">{description}</p>

                <div className="mt-2 flex flex-wrap gap-1 text-md">
                    <p>Created using:</p>
                    {tech.map((skill, index) => (
                        <span key={index} className="text-[var(--black-color)] text-md m-1 border px-2 rounded-sm my-auto">{skill}</span>
                    ))}
                </div>

                <Link to={`/project/${id}`} className="bg-[var(--secondary-color)] text-md text-[var(--black-color)] px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200 mt-5 inline-block shadow-sm">
                        Click here to read more...
                </Link>
            </div>
                    
        </div>
    </div>
  )
}
export default CustomProjectView
