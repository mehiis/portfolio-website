import CustomH2Title from './CustomH2Title';
import titleIcon from "@/assets/images/h2/education-h2.svg";

const education = [
    {
        degree: "Information Technology, Bachelor of engineering",
        institution: "Metropolia University of Applied Sciences (2024 - 2028)",
    }

]

const Education = () => {
  return (
        <div className="max-w-[1440px] min-w-[360px] mx-auto p-2 md:px-10 2xl:px-0">
            <CustomH2Title source={titleIcon} alt="Education" />

            <div className='p-4 m-4'>

                <ul className="bg-[var(--primary-color)] w-full rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-10 shadow-sm">

                    {[...education].reverse().map((edu, index) => (
                        <li key={index} className="bg-[var(--secondary-color)] text-shadow-sm max-w-[730px] clip-path-custom p-10">
                            <h3 className="text-[110%] font-[arial-black]">{edu.institution}</h3>
                            <p className="text-[120%] font-[arial]">{edu.degree}</p>
                        </li>
                    ))}

                </ul>
            </div>

        </div>
  )
}

export default Education
