type Props = {
    title: string,
    desc: string,
    author: string,
    date: string,
    img: string
}

const ArticleHeader = (props: Props) => {
  return (
    <header className="py-5 items-center bg-[var(--primary-color)]">
      <div className="max-w-[1440px] min-w-[360px] m-auto px-10 py-5">
        <h1 className="text-3xl font-bold">{props.title}</h1>
        <p className="py-2 font-[arial] text-md">{props.desc}</p>
        <img className="mx-auto my-10 w-full h-auto shadow-sm rounded-sm" src={props.img} alt={props.title} />
        <p className="text-md mt-10 font-[arial]">{props.author} - {props.date}</p>
      </div>
    </header>
  )
}

export default ArticleHeader
