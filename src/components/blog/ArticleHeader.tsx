type Props = {
    title: string,
    desc: string,
    author: string,
    date: string,
    img: string
    resources?: {name: string, url: string}[]
}

const ArticleHeader = (props: Props) => {
  return (
    <header className="py-5 items-center bg-[var(--primary-color)]">
      <div className="max-w-[1440px] min-w-[360px] m-auto px-10 py-3">
        <h1 className="text-3xl font-bold">{props.title}</h1>
        <p className="py-2 font-[arial] text-md md:text-xl">{props.desc}</p>
        <img className="mx-auto my-10 w-full h-auto shadow-sm rounded-sm" src={props.img} alt={props.title} />
        <hr className="border-black/10"/>

        <div className="md:flex md:justify-between md:items-center mt-6">
          <p className="text-md font-[arial]">{props.author} - {props.date}</p>
          
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
