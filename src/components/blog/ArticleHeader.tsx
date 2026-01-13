import CustomHR from "../CustomHR"

type Props = {
    title: string,
    desc: string,
    author: string,
    date: Date,
    img: string
    resources?: {name: string, url: string}[]
}

const ArticleHeader = (props: Props) => {
  return (
    <header className="py-5 items-center bg-[var(--secondary-color)] text-[var(--black-color)] shadow-sm">
      <div className="max-w-[1440px] min-w-[360px] m-auto px-10 py-3 md:px-30">
        <button
        className="bg-[var(--primary-color)] text-sm 2xl:text-md text-[var(--black-color)]  px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200 mb-5 inline-block shadow-sm"
        onClick={() => {
          window.history.back()
          }
          }>&#10229; Back to previous page</button>

        <h1 className="text-xl 2xl:text-3xl font-bold">{props.title}</h1>
        <p className="py-2 font-[arial] text-md 2xl:text-xl">{props.desc}</p>
        {/*<img className="mx-auto my-10 w-full h-auto shadow-sm rounded-sm" src={props.img} alt={props.title} />*/}
        <CustomHR />

        <div className="md:flex md:justify-between md:items-center mt-4">
          <p className="text-md font-[arial]">{props.author} - {props.date.toLocaleDateString()}</p>

          {props.resources && (
            <div className="mt-3 md:mt-0 md:ml-10">
              <ul className="md:flex">
                  {props.resources.map((resource, index) => (
                    <li key={index}>
                      <a className="text-blue-600 hover:underline font-[arial] md:mx-4" href={resource.url} target="_blank" rel="noopener noreferrer"> {resource.name} </a>
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
