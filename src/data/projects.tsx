import porfolioIcon from "@/assets/images/logos/logo-text-with-desc.png"
import project0headerImg from "@/assets/images/projects/0_portfolio/project-0-header-img.jpg"
import project0img1 from "@/assets/images/projects/0_portfolio/project0-img-1.jpg"
import project0img2 from "@/assets/images/projects/0_portfolio/project0-img-2.jpg"

const Projects = [
    {
        id: 0,
        title: "Portfolio Website",
        description: "A personal portfolio website displaying my skills and projects. This project showcases my ability to create responsive and visually appealing web applications.",
        author: "Niko Mehiläinen",
        date: "17 Dec 2025",
        year: 2025,
        technologies: ["Vite", "React", "Tailwind CSS", "Figma"],
        icon: porfolioIcon,
        headerImage: project0headerImg,
        chapters: [
            {
                title: "From scratch",
                paragraphs: [
                    "The portfolio website was built from the ground up using Vite as the build tool and React for the frontend. I used Tailwind CSS for styling, which made the whole process super fast. The initial design was created in Figma, and a lot of elements were exported directly from there, like icons and buttons.",
                    "The most important thing for me when building this portfolio was making it simple and personal with no clutter, heavy animations, or videos like I’ve seen in a lot of other portfolios. Honestly, in my opinion, those kinds of things just makes the site feel hard to navigate and a bit unpleasant to use.",
                    "I really wanted to build this portfolio from scratch, even though there are plenty of no-code portfolio builders out there. I felt like doing it myself gave me a chance to show off my skills as a developer. Plus, I learned a ton and refreshed a lot of web development skills while working on it. It was a ton of fun!",
                ],
                image: project0img1
            },
            {
                title: "Design and Development",
                paragraphs: [
                    "I am really happy with how the design turned out. My first iteration was just not working and I felt stuck with it for a while. To make it clear I am not a designer by any means but I feel like I managed to create a simple and personal design that represents me well.",
                    "I first created simple idea using Figma and played around with different colors and created a few mockups and few components. I didn't want to spend too much time on Figma since I wanted to focus more on the development side of things and I was the only one working on this.",
                    "Figma as a desing tool was really powerful for a free tool and the ability to export assets as SVG or PNG directly from Figma made the development process a lot faster.",
                ],
                image: project0img2
            },
            {
                title: "Post mortem",
                paragraphs: [
                    "I'm really happy with how my portfolio turned out and I feel like I could capture the essence of who I am as a person with it and I could make it visually personal.",
                    
                    "The only thing I'm still kind of unsure about is using Tailwind CSS. I feel like it can make the code a bit harder to read, and the separation of concerns isn’t as clear as with traditional CSS.",
                    "That said, I was really hooked on the speed it brought to development. Next time, I’ll most probably try to stick with traditional CSS because I feel like it’ll help create more maintainable and easier-to-read code eventhough the development speed might be slower.",

                    "In the future, I plan to keep updating my portfolio with new projects and skills as I continue to grow as a developer.",
                ]
            }
        ],
        resources: [
            {
                name: "GitHub Repository",
                url: "https://github.com/mehiis/portfolio-website"
            }
        ]
    },
];

export default Projects;