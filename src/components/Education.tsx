import CustomH2Title from './CustomH2Title';

const education = [
    {
        degree: "Information Technology, Bachelor of engineering",
        institution: "Metropolia University of Applied Sciences (2024 - 2028)",
    },
        {
        degree: "Information Technology, Bachelor of engineering",
        institution: "Metropolia University of Applied Sciences (2024 - 2028)",
    },
        {
        degree: "Information Technology, Bachelor of engineering",
        institution: "Metropolia University of Applied Sciences (2024 - 2028)",
    },
    
]

const Education = () => {
  return (
        <div className="max-w-[1440px] min-w-[360px] mx-auto">
            <CustomH2Title name="education-h2" alt="Education" />
            
            <div className='flex flex-col'>
                
                <ul className="bg-[var(--primary-color)] gap-10 rounded-xl grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 max-w-[1440px] mx-auto p-5">
                    {[...education].reverse().map((edu, index) => (
                        <li key={index} className="bg-[var(--secondary-color)] text-shadow-sm max-w-[730px] clip-path-custom p-10">
                            <h3 className="text-[1.4vh] font-[arial-black]">{edu.institution}</h3>
                            <p className="text-[1.4vh] font-[arial]">{edu.degree}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
  )
}

export default Education
