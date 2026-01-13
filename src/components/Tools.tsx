import CustomH2Title from "./CustomH2Title";
import titleIcon from "@/assets/images/h2/familiar-tools-h2.png";

function Tools(){
    const tools = ["Java", "C#", "Python", "JavaScript / TypeScript", "Unity Game Engine", "Godot", "React", ".NET MAUI", "JavaFX", "Express.js", "Tailwind CSS", "Node.js", "HTML+CSS", "SonarQube", "Jenkins", "Expo", "Figma", "MariaDB", "Dockers", "StarUML", "Trello", "Miro"].sort();

    return(
        <div className="max-w-[1440px] min-w-[360px] mx-auto p-2 md:px-10 2xl:px-0">
            <CustomH2Title source={titleIcon} alt="Tools and Technologies" />

        <div className="p-4 m-4">
                <ul className="bg-[var(--primary-color)] w-full rounded-lg flex flex-wrap gap-4 px-6 py-8 shadow-sm">
                    {tools.map(
                        (tool) => (<li className="bg-[var(--secondary-color)] px-4 py-1 font-[arial-black] text-sm 2xl:text-md clip-path-custom" key={tool}>{tool}</li>))
                        }
                </ul>
            </div>
        </div>
    );
}

export default Tools;
