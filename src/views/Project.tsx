import {useParams } from "react-router-dom"
import projects from "../data/projects";
import NotFound from "./NotFound";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === Number(id));

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {project ? (
          <div>
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg">{project.description}</p>

            {project.chapters.map((chapter, index) => (
              <div key={index} className="mt-6">
                <h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>
                <p className="text-base">{chapter.content}</p>
                {chapter.image && <img src={chapter.image} alt={chapter.title} className="mt-4 mx-auto" />}
              </div>
            ))}
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    </>
  )
}

export default Project