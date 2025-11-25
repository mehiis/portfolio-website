    type Props = {
        name: string,
        alt: string
    }

const CustomH2Title = ({ name, alt }: Props) => {
    return (
    <h2>
        <img src={"/src/assets/h2/" + name + ".svg"} alt={"A topic title with text " + alt + "."} className="w-auto px-8 pt-15"/>
    </h2>
  )
}

export default CustomH2Title
