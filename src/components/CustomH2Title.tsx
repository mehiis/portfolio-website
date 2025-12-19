    type Props = {
        source: string
        alt: string,
    }

const CustomH2Title = (props: Props) => {
    return (
    <h2>
        <img src={props.source} alt={"A topic title with text " + props.alt + "."} className="w-auto px-7 pt-10 max-h-[85px]"/>
    </h2>
  )
}

export default CustomH2Title