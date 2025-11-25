import { useNavigate } from "react-router";
import CustomProjectView from "./CustomProjectView";
import CustomH2Title from "./CustomH2Title";


const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website displaying my skills and projects. This project showcases my ability to create responsive and visually appealing web applications.",
        year: 2025,
        technologies: ["Vite", "React", "Tailwind CSS", "Figma"],
        id: "2000",
        image: "/src/assets/images/logos/logo-text-with-desc.png",
    }
].reverse();

const Personal = () => {
    const navigate = useNavigate();

    return(
        <div className="max-w-[1440px] min-w-[360px] mx-auto p-2">
            <CustomH2Title name="personal-h2" alt="Personal Projects" />
        
        <ul className='flex flex-col'>
            {[...projects].reverse().map((project, index) => (
                <li 
                    key={index} 
                    className="p-4 m-4 max-w-[1440px] hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => navigate(`/blogs/${project.id}`)}
                >
                    <CustomProjectView title={project.title} description={project.description} year={project.year} tech={project.technologies} image={project.image} />
                </li>
            ))}
        </ul>

        </div>
    );
}

export default Personal
