    type Props = {
        sourceLg: string,
        sourceSm: string,
        alt: string,
    }

const CustomH2Title = (props: Props) => {
    return (
    <h2>
        <img
        src={props.sourceSm}
        srcSet={
            props.sourceSm + " 300w, " + 
            props.sourceLg + " 600w"
        }
        sizes="(max-width: 768px) 300px, 400px"
        alt={"A topic title with text " + props.alt + "."}
        className="px-7 pt-10 w-auto h-[70px]"
        width="400"
        height="40"
        loading="lazy"
        />
        
    </h2>
  )
}

export default CustomH2Title
