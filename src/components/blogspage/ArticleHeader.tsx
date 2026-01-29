import CustomHR from "../misc/CustomHR"

type Props = {
    title: string,
    desc: string,
    author: string,
    date: Date,
    resources?: {name: string, url: string}[]
}

const ArticleHeader = (props: Props) => {
  return (
    <header className="py-5 items-center bg-[var(--secondary-color)] text-[var(--black-color)] shadow-sm">
      <div className="max-w-[1440px] min-w-[360px] m-auto px-10 py-10 md:px-50">

        <h1 className="text-xl font-bold font-[LeagueSpartanBold]">{props.title}</h1>
        <p className="py-2 font-[LeagueSpartanRegular] text-lg">{props.desc}</p>
        <CustomHR />

        <div className="md:flex md:justify-between md:items-center mt-4">
          <p className="text-md font-[LeagueSpartanRegular]">{props.author} - {props.date.toLocaleDateString()}</p>
          {props.resources && (
            <div className="mt-3 md:mt-0 md:ml-10">
              <ul className="md:flex">
                  {props.resources.map((resource, index) => (
                    <li key={index}>
                      <a className="text-blue-600 hover:underline font-[LeagueSpartanRegular] md:mx-4" href={resource.url} target="_blank" rel="noopener noreferrer"> {resource.name} </a>
                    </li>
                  ))}
            </ul>
          </div>
          )}

        </div>
      </div>
    </header>
  )
}

export default ArticleHeader
