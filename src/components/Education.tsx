import { Link } from 'react-router-dom';
import CustomH2Title from './CustomH2Title';
import titleIcon from "@/assets/images/h2/education-h2.png";

const education = [
    {
        degree: "Bachelor of Engineering, Information Technology and Communications",
        institution: "Metropolia University of Applied Sciences",
        location: "Helsinki, Finland",
        time: "2024 - 2028",
        website: "https://www.metropolia.fi/en"
    },


]

const Education = () => {
  return (
        <div className="max-w-[1440px] min-w-[360px] mx-auto p-2 md:px-10 2xl:px-0">
            <CustomH2Title source={titleIcon} alt="Education" />

            <div className='p-4 m-4'>

                <ul className="bg-[var(--primary-color)] w-full rounded-lg grid grid-cols-1 2xl:grid-cols-2 gap-4 px-4 py-10 shadow-sm">

                    {[...education].reverse().map((edu, index) => (
                        <Link to={edu.website} target="_blank" className="hover:scale-102 transition-transform duration-300" key={index}>
                            <li key={index} className="bg-[var(--secondary-color)] text-shadow-sm max-w-[730px] clip-path-custom p-10">
                                <div className="flex 2xl:flex-row flex-col 2xl:items-top 2xl:gap-2">
                                    <h3 className="text-md 2xl:text-lg font-[arial-black]">{edu.institution}</h3>
                                    <p className="text-sm font-[arial]">{edu.time}</p>
                                </div>
                                <p className="text-md 2xl:text-lg font-[arial] my-5 md:my-0">{edu.degree}</p>
                                <p className="text-md font-[arial]">{edu.location}</p>
                            </li>
                        </Link>
                    ))}
                </ul>

            </div>

        </div>
  )
}

export default Education
