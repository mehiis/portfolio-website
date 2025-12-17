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
            <ArticleHeader title={project.title} desc={project.description} author={project.author} date={project.date} img={project.headerImage} />

            <article className="mt-6 max-w-[1440px] mx-auto p-4">
              {project.chapters.map((chapter, index) => (
                <div key={index} className="mt-6">
                  <h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>
                  <p className="text-base">{chapter.content}</p>
                  {chapter.image && <img src={chapter.image} alt={chapter.title} className="mt-4 mx-auto" />}
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