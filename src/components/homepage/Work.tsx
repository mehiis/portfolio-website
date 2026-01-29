import CustomListView from "./components/CustomListView";
import CustomH2Title from "./components/CustomH2Title";
import titleIcon from "@/assets/images/h2/work-experience-h2.png";

const jobs = [
    {
        id: "1000",
        title: "Verkkokauppa.com",
        role: "Sales Specialist",
        duration: "2021 - Present",
        description: "Sales Representative at Verkkokauppa.com. Represented the company on social media, hosted auctions and live events, and appeared on the international reality TV show The Apprentice.",
        skills: ["Customer service", "Retail", "Sales"],
        image: "https://images.ctfassets.net/nggsuamsum0l/74DAKbD8bNPFIMT4RW1qRY/af0436ec104196a607817eec3b701b1a/Logo-musta-teksti.png?q=90&fm=avif&w=384"
    },
].reverse();

const Work = () => {
    return(
        <div className="max-w-[1440px] min-w-[360px] mx-auto p-2 md:px-30">
            <CustomH2Title source={titleIcon} alt="Work Experience" />
        <ul className="flex flex-col">
            {[...jobs].map((job, index) => (
                <li
                    key={index}
                    className="p-4 m-4 max-w-[1440px]">
                    <CustomListView title={job.title} role={job.role} description={job.description} duration={job.duration} skills={job.skills.sort()} image={job.image}  />
                </li>
            ))}
        </ul>

        </div>
    );
}

export default Work
