    type Props = {
        source: string
        alt: string,
    }

const CustomH2Title = (props: Props) => {
    return (
    <h2>
        <img
        src={props.source}
        alt={"A topic title with text " + props.alt + "."}
        className="px-7 pt-10 w-auto h-[75px]"
        width="2000"
        height="200"/>
    </h2>
  )
}

export default CustomH2Title
