type Props = {
    id: number | string,
    title: string,
    year: number,
    description: string,
    tech: string[],
    icon: string
}

const CustomProjectView = (props: Props) => {
  return (
    <div className="bg-[var(--primary-color)] px-8 py-4 rounded-xl shadow-sm">
        <div className="items-center md:grid md:grid-cols-[260px_1fr]">
            <img src={props.icon} alt={"Icon of the project " + props.title} className="w-auto max-h-[150px] object-contain mx-auto"/>
            <div className="text-[var(--black-color)] p-4">
                <div className="md:flex md:gap-2">
                    <h3 className="text-lg md:text-2xl font-[arial-black]">{props.title}</h3>
                    <p className="text-sm font-[arial]">{props.year}</p>
                </div>

                <p className="text-md md:text-lg mt-4 font-[arial]">{props.description}</p>

                <div className="mt-4 md:justify-between md:flex md:items-end">
                    <div className="flex flex-wrap gap-1">
                        <p className="text-md mt-2 md:mt-0">Created using:</p>
                        {props.tech.map((skill, index) => (
                            <span key={index} className="text-[var(--black-color)] text-sm mx-1 border px-2 rounded-sm my-auto shadow-sm">{skill}</span>
                        ))}
                    </div>
                        <div className="mt-5 md:mt-0 bg-[var(--secondary-color)] text-md text-[var(--black-color)] inline-block px-4 py-2 rounded-lg hover:scale-110 transition-transform duration-300 shadow-sm flex-none max-h-[40px]">
                                Read more &#10230;
                        </div>
                </div>
            </div>

        </div>
    </div>
  )
}
export default CustomProjectView
