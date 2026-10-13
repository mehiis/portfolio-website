import CustomH2Title from "./components/CustomH2Title";
import h2sm from "@/assets/images/h2/familiar-tools/ft-sm.webp";
import h2lg from "@/assets/images/h2/familiar-tools/ft-lg.webp";

function Tools(){
    const tools = ["Machine Learning", "Object-Oriented Programming", "Relational Databases", "Web Development", "Mobile Development", "UI/UX Design", "Game Development", "3D Modeling", "Version Control", "DevOps", "CI/CD", "Information Security"].sort();

    return(
        <div className="max-w-360 min-w-90 mx-auto p-2 md:px-30">
            <CustomH2Title sourceSm={h2sm} sourceLg={h2lg} alt="Tools and Technologies" />

        <div className="p-4 m-4">
                <ul className="bg-(--primary-color) w-full rounded-lg flex flex-wrap gap-4 px-6 py-8 shadow-sm">
                    {tools.map(
                        (tool) => (<li className="bg-(--secondary-color) px-4 py-1 font-[LeagueSpartanBold] text-sm clip-path-custom" key={tool}>{tool}</li>))
                        }
                </ul>
            </div>
        </div>
    );
}

export default Tools;
