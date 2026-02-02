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
        <div className="items-center lg:grid lg:grid-cols-[260px_1fr]">


            <div className="text-[var(--black-color)] p-4">
                <div className="lg:flex lg:gap-2">
                    <h3 className="text-lg 2xl:text-xl font-[LeagueSpartanBold] line-clamp-1">{props.title}</h3>
                    <p className="text-sm font-[LeagueSpartanRegular] line-clamp-1">{props.year}</p>
                </div>

                <p className="text-md 2xl:text-lg mt-4 font-[LeagueSpartanRegular] lg:line-clamp-2">{props.description}</p>
                <div className="mt-4 lg:justify-between lg:flex lg:items-end">
                    <div className="flex flex-wrap gap-1">
                        <p className="text-md mt-2 lg:mt-0 font-[LeagueSpartanBold]">Created using:</p>
                        {props.tech.map((skill, index) => (
                            <span key={index} className="text-[var(--black-color)] text-sm mx-1 border px-2 rounded-sm my-auto shadow-sm font-[LeagueSpartanRegular]">{skill}</span>
                        ))}
                    </div>
                        <div className="mt-5 lg:mt-0 bg-[var(--secondary-color)] text-sm font-[LeagueSpartanRegular] text-[var(--black-color)] inline-block px-4 py-2 rounded-lg hover:scale-110 transition-transform duration-300 shadow-sm flex-none max-h-[40px]">
                                Read more &#10230;
                        </div>
                </div>
            </div>

        </div>
    </div>
  )
}
export default CustomProjectView
