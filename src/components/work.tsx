import CustomListView from "./CustomListView";
import CustomH2Title from "./CustomH2Title";
import titleIcon from "@/assets/images/h2/work-experience-h2.png";

const jobs = [
    {
        id: "1000",
        title: "Verkkokauppa.com",
        role: "Sales Specialist",
        duration: "2021 - Present",
        description: "I worked with customers to find the best solutions for their needs, drawing on the knowledge provided by brand representatives. I also represented the company on social media, hosted auctions and events, and appeared on the Finnish version of the international reality TV show Diili (\"The Apprentice\").",
        skills: ["Customer service", "Retail", "Sales"],
        image: "https://images.ctfassets.net/nggsuamsum0l/74DAKbD8bNPFIMT4RW1qRY/af0436ec104196a607817eec3b701b1a/Logo-musta-teksti.png?q=90&fm=avif&w=384"
    },
].reverse();

const Work = () => {
    return(
        <div className="max-w-[1440px] min-w-[360px] mx-auto p-2 md:px-10 2xl:px-0">
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
