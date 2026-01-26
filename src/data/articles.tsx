import type BlogPost from "../types/BlogPost"

import porfolioIcon from "@/assets/images/logos/logo-text-with-desc.png"
import cover0 from "@/assets/images/blog/0/cover_0.jpg"
import project0img1 from "@/assets/images/projects/0_portfolio/project0-img-1.jpg"
import project0img2 from "@/assets/images/projects/0_portfolio/project0-img-2.jpg"

import cover1 from "@/assets/images/blog/1/cover_1.jpg"


const Articles: BlogPost[] = [
    {
        id: 0,
        title: "Portfolio Website",
        description: "A personal portfolio website displaying my skills and projects. This project showcases my ability to create responsive and visually appealing web applications.",
        author: "Niko Mehiläinen",
        date: new Date("2026-01-01"),
        technologies: ["Vite", "React", "Tailwind CSS", "Figma"],
        tags: ["Web Development", "Frontend", "Personal Project"],
        icon: porfolioIcon,
        articleCover: cover0,
        featureOnHomePage: true,
        chapters: [
            {
                title: "From Scratch",
                paragraphs: [
                    "The portfolio website was built from the ground up using Vite as the build tool and React for the frontend. I used Tailwind CSS for styling, which made the whole process super fast. The initial design was created in Figma, and a lot of elements were exported directly from there, like icons and buttons.",
                    "The most important thing for me when building this portfolio was keeping it simple and personal. To me, a portfolio should be easy to navigate and show the key info right away. This idea was the main motivation behind how I designed my portfolio. I wanted it to be clean, fast, and focused on what's most important.",
                    "I really wanted to build this portfolio from scratch, even though there are plenty of no-code portfolio builders out there. I felt like doing it myself gave me a chance to show off my skills as a developer, make it stand out visually, and make it much more personal compared to using ready-made templates and components. Plus, I learned a ton and refreshed a lot of my web development skills while working on it. It was a plenty of fun!",
                ],
                image: project0img1,
                imageAlt: "A screenshot of Figma components designed for the portfolio website.",
                imageFigcaption: "Components I created for the portfolio's design in Figma."
            },
            {
                title: "Design and Development",
                paragraphs: [
                    "I first came up with a simple idea in Figma, playing around with different colors, creating a few mockups, and building some components. I didn’t want to spend too much time in Figma since I wanted to focus more on the development side of things. Figma was surprisingly powerful for a free tool, and the ability to export assets as SVG or PNG directly from it made the development process a lot faster.",
                    "Making a portfolio website was a really pleasant, low-threshold project because I only worked on the front-end. I thought about fetching all the blog content from a database, but it felt like overkill for this kind of project, so I decided to pull all the data directly from the code instead. Of course, now updating the project means uploading the whole file with text to the server, which is a bit of a hassle. If there’s a lot more content in the future, I might move it to a database, but for now, I feel like this setup works just fine.",
                    "If you're interested in the detailed implementation, I’ve left a GitHub link for this website where you can check out the latest version of the portfolio. You can find the link at the top of this site or search for 'mehiis' on GitHub!"
                ],
                image: project0img2,
                imageAlt: "A screenshot of the first design of the portfolio website.",
                imageFigcaption: "My first design."
            },
            {
                title: "Post Mortem",
                paragraphs: [
                    "All in all, I’m really happy with how my portfolio turned out. I feel like I managed to capture the essence of who I am as a person, and I was able to make it visually personal. ",

                    "Development-wise I’m still a little unsure about using Tailwind CSS. I feel like it can make the code harder to read, and the separation of concerns isn’t as clear as with traditional CSS, since it adds styles directly to the code.",
                    "That said, I was really hooked on how much faster development was with it. It can really speed up and make the development of personal styles really straightforward. Next time, though, I’ll probably try sticking with traditional CSS because I think it’ll help me write more maintainable and easier-to-read code, even if the development speed is slower.",

                    "In the future, I plan to keep updating my portfolio with new projects and skills as I continue to grow as a developer. Thanks for showing interest in my work! :)",
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
    {
        id: 1,
        title: "Preparing for exchange at SEOULTECH - Spring 2026",
        description: "A detailed overview of my preparations for the student exchange program at Seoul National University of Science and Technology (SEOULTECH) in Spring 2026. In this blog I discuss application processes, cultural insights, and tips for future exchange students departing from Finland.",
        author: "Niko Mehiläinen",
        date: new Date("2026-01-13"),
        technologies: [],
        tags: ["SEOULTECH", "Student Exchange", "Spring 2026"],
        icon: "",
        articleCover: cover1,
        featureOnHomePage: false,
        chapters: [
            {
                title: "Preparing for SEOULTECH Exchange",
                paragraphs: [
                    " This article is currently under construction. Stay tuned for updates on my preparations for the student exchange program at SEOULTECH in Spring 2026!",
                ],
                image: "",
                imageAlt: "",
                imageFigcaption: ""
            },
        ],
        resources: []
    },
  ];

export default Articles;
