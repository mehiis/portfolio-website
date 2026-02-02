import project from "../../data/articles";


const projects = project.reverse();

const Personal = () => {
    return(
        <div className="max-w-[1440px] min-w-[360px] mx-auto p-2 md:px-30">

            <ul className='flex flex-col'>
                {[...projects].reverse().map((project, index) => (
                  project.featureOnHomePage && (
                    <li
                        key={index}
                        className="p-4 m-4 max-w-[1440px]"
                    >
                    </li>)
                ))}
            </ul>
        </div>
    );
}

export default Personal
