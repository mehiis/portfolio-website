import {useParams } from "react-router-dom"
import Articles from "../data/articles";
import NotFound from "./NotFound";
import ArticleHeader from "../components/blog/ArticleHeader";

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const article = Articles.find(currentArticle => currentArticle.id === Number(id));
  let figureIndex:number = 0;

  return (
    <>
      <div>
        {article ? (
          <div>
            <ArticleHeader title={article.title} desc={article.description} author={article.author} date={article.date} img={article.headerImage} resources={article.resources} />

            <article className="mt-6 max-w-[1440px] mx-auto py-4 px-5 md:px-30">
              {article.chapters.map((chapter, index) => (
                <div key={index} className="mt-4 mb-15">
                  <h2 className="text-xl font-semibold mb-2">{chapter.title}</h2>

                  {chapter.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-base font-[arial] mb-8 text-gray-700">{paragraph}</p>
                  ))}

                  {chapter.image &&

                    <figure>
                      <img className="mt-4 mx-auto shadow-sm rounded-md" src={chapter.image} alt={chapter.imageAlt} />
                      <figcaption className="text-left text-md text-[var(--black-color)] p-3 font-[arial] md:text-xl">{figureIndex += 1}. {chapter.imageFigcaption}</figcaption>
                    </figure>

                  }
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

export default Article
