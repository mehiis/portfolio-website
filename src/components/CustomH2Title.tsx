    type Props = {
        source: string
        alt: string,
    }

const CustomH2Title = ({source, alt }: Props) => {
    return (
    <h2>
        <img src={source} alt={"A topic title with text " + alt + "."} className="w-auto px-8 pt-15"/>
    </h2>
  )
}

export default CustomH2Title
