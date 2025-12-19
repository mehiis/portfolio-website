type Props = {
    title: string,
    role: string,
    duration: string,
    description: string,
    skills: string[],
    image: string
}


const CustomListView = (props: Props) => {
  return (
    <div className="bg-[var(--primary-color)] px-8 py-4 rounded-xl shadow-sm">
        <div className="items-center md:grid md:grid-cols-[260px_1fr]">
            <img src={props.image} alt={"Cover image of the job place " + props.title} className="w-auto max-h-[150px] object-contain mx-auto"/>
            
            <div className="text-[var(--black-color)] p-4">
                <div className="md:flex md:gap-2">
                    <h3 className="text-[140%] font-[arial-black]">{props.title}</h3>
                    <p className="text-[80%]">{props.duration}</p>
                </div>
                <p className="text-[100%] mb-4">{props.role}</p>
                <p className="text-[120%] font-[arial] mt-3 mb-8">{props.description}</p>
                
                <div className="mt-2 flex flex-wrap gap-1 text-md">
                    <p>Key skills:</p>
                    {props.skills.map((skill, index) => (
                        <span key={index} className="text-[var(--black-color)] text-md m-1 border px-2 rounded-sm my-auto shadow-sm">{skill}</span>
                    ))}
                </div>
            </div>

        </div>
    </div>
  )
}

export default CustomListView
