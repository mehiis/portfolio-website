import CustomH2Title from "./CustomH2Title";

function Tools(){
    let tools = ["Java", "C#", "Python", "JavaScript / TypeScript", "Unity Game Engine", "Godot", "React", ".NET MAUI", "JavaFX", "Git", "Express.js", "Tailwind CSS", "Node.js", "HTML+CSS", "SonarQube", "Jenkins", "Expo", "Figma", "MariaDB", "Dockers", "StarUML", "Trello", "Miro"].sort();

    return(
        <div className="max-w-[1440px] mx-auto">
            <CustomH2Title name="tools-h2" alt="Tools and Technologies" />

        <div className="p-6 bg-[var(--primary-color)] rounded-xl">
                <ul className="p-4 rounded-lg text-[var(--black-color)] flex flex-wrap gap-4 m-4 )">
                    {tools.map(
                        (tool) => (<li className="bg-[var(--secondary-color)] px-4 py-1 font-[arial-black] text-[1.6vh] clip-path-custom" key={tool}>{tool}</li>))
                        }
                </ul>
            </div>
        </div>
    );
}

export { Tools };