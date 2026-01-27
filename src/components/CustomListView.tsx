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
        <div className="items-center lg:grid lg:grid-cols-[260px_1fr]">
            <img src={props.image} alt={"Cover image of the job place " + props.title} className="w-auto max-h-[70px] lg:max-h-[120px] object-contain mx-auto"/>

            <div className="text-[var(--black-color)] p-4">
                <div className="lg:flex lg:gap-2">
                    <h3 className="text-lg 2xl:text-xl font-[LeagueSpartanBold]">{props.title}</h3>
                    <p className="text-sm font-[LeagueSpartanRegular]">{props.duration}</p>
                </div>
                <p className="text-sm 2xl:text-md font-[LeagueSpartanBold]">{props.role}</p>
                <p className="text-md 2xl:text-lg font-[LeagueSpartanRegular] mt-2 mb-4 lg:line-clamp-3">{props.description}</p>

                <div className="flex flex-wrap gap-1 text-md">
                    <p className="text-md font-[LeagueSpartanBold]">Key skills:</p>
                    {props.skills.map((skill, index) => (
                        <span key={index} className="text-[var(--black-color)] text-sm mx-1 border px-2 rounded-sm my-auto shadow-sm font-[LeagueSpartanRegular]">{skill}</span>
                    ))}
                </div>
            </div>

        </div>
    </div>
  )
}

export default CustomListView
