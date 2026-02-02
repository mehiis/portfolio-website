import CustomProjectView from "./components/CustomProjectView";
import CustomH2Title from "./components/CustomH2Title";
import titleIcon from "@/assets/images/h2/personal-projects.webp";
import project from "../../data/articles";
import { Link } from "react-router-dom";

const projects = project.reverse();

const Personal = () => {
    return(
        <div className="max-w-[1440px] min-w-[360px] mx-auto p-2 md:px-30">
            <CustomH2Title source={titleIcon} alt="Personal Projects" />

            <ul className='flex flex-col'>
                {[...projects].reverse().map((project, index) => (
                  project.featureOnHomePage && (
                    <li
                        key={index}
                        className="p-4 m-4 max-w-[1440px]"
                    >
                        <Link to={`/blog/${project.id}`}>
                            <CustomProjectView id={project.id} title={project.title} description={project.description} year={project.date.getFullYear()} tech={project.technologies.sort()} icon={project.icon} />
                        </Link>
                    </li>)
                ))}
            </ul>
        </div>
    );
}

export default Personal
