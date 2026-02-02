type Props = {
    title: string,
    role: string,
    duration: string,
    description: string,
    skills: string[],
}


const CustomListView = (props: Props) => {
  return (
    <div className="bg-[var(--primary-color)] px-8 py-4 rounded-xl shadow-sm">
        <div className="items-center lg:grid lg:grid-cols-[260px_1fr]">

                <div className=" lg:gap-2 mx-auto text-center my-3 lg:mb-0">
                    <h3 className="text-lg 2xl:text-xl font-[LeagueSpartanBold]">{props.title}</h3>
                    <p className="text-sm font-[LeagueSpartanRegular]">{props.duration}</p>
                </div>

            <div className="text-[var(--black-color)] p-4">

                <p className="text-md 2xl:text-lg font-[LeagueSpartanBold]">{props.role}</p>
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
