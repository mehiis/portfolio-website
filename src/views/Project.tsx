import {useParams } from "react-router-dom"
import projects from "../data/projects";
import NotFound from "./NotFound";
import ArticleHeader from "../components/blog/ArticleHeader";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === Number(id));

  return (
    <>

      <div>
        {project ? (
          <div>
            <ArticleHeader title={project.title} desc={project.description} author={project.author} date={project.date} img={project.headerImage} resources={project.resources} />

            <article className="mt-6 max-w-[1440px] mx-auto py-4 px-5 mx-auto md:px-30">
              {project.chapters.map((chapter, index) => (
                <div key={index} className="mt-4 mb-15">
                  <h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>
                  
                  {chapter.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-base font-[arial] mb-8 text-gray-700 text-xl">{paragraph}</p>
                  ))}

                  {chapter.image && <img className="mt-4 mx-auto shadow-sm rounded-md" src={chapter.image} alt={chapter.title} />}
                </div>
              ))}
            </article>
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    </>
  )
}

export default Project