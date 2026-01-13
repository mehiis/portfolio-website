import CustomProjectView from "./CustomProjectView";
import CustomH2Title from "./CustomH2Title";
import titleIcon from "@/assets/images/h2/personal-projects-h2.png";
import project from "../data/articles";

const projects = project.reverse();

const Personal = () => {
    return(
        <div className="max-w-[1440px] min-w-[360px] mx-auto p-2 md:px-10 2xl:px-0">
            <CustomH2Title source={titleIcon} alt="Personal Projects" />

            <ul className='flex flex-col'>
                {[...projects].reverse().map((project, index) => (
                  project.featureOnHomePage && (
                    <li
                        key={index}
                        className="p-4 m-4 max-w-[1440px]"
                    >
                        <CustomProjectView id={project.id} title={project.title} description={project.description} year={project.date.getFullYear()} tech={project.technologies.sort()} icon={project.icon} />
                    </li>)
                ))}
            </ul>
        </div>
    );
}

export default Personal
