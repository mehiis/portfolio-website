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
        className="w-auto px-7 pt-10 max-h-[72px] h-auto"
        width="200"
        height="72"/>
    </h2>
  )
}

export default CustomH2Title
