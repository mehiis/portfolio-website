import CustomH2Title from "./components/CustomH2Title";
import h2sm from "@/assets/images/h2/familiar-tools/ft-sm.webp";
import h2lg from "@/assets/images/h2/familiar-tools/ft-lg.webp";

function Tools(){
    const tools = ["Java", "C#", "Python", "JavaScript / TypeScript", "Unity Game Engine", "Godot", "React", ".NET MAUI", "JavaFX", "Express.js", "Tailwind CSS", "Node.js", "HTML+CSS", "SonarQube", "Jenkins", "Expo", "Figma", "MariaDB", "Docker", "StarUML", "Trello", "Miro", "GitHub Actions", "Vercel"].sort();

    return(
        <div className="max-w-[1440px] min-w-[360px] mx-auto p-2 md:px-30">
            <CustomH2Title sourceSm={h2sm} sourceLg={h2lg} alt="Tools and Technologies" />

        <div className="p-4 m-4">
                <ul className="bg-[var(--primary-color)] w-full rounded-lg flex flex-wrap gap-4 px-6 py-8 shadow-sm">
                    {tools.map(
                        (tool) => (<li className="bg-[var(--secondary-color)] px-4 py-1 font-[LeagueSpartanBold] text-sm clip-path-custom" key={tool}>{tool}</li>))
                        }
                </ul>
            </div>
        </div>
    );
}

export default Tools;
