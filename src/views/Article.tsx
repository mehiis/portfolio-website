import {useParams } from "react-router-dom"
import Articles from "../data/articles";
import NotFound from "./NotFound";
import ArticleHeader from "../components/blog/ArticleHeader";
import LatestBlogs from "../components/LatestBlogs";

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const article = Articles.find(currentArticle => currentArticle.id === Number(id));
  let figureIndex:number = 0;

  return (
    <>
      <div>
        {article ? (
          <div>
            <ArticleHeader title={article.title} desc={article.description} author={article.author} date={article.date} resources={article.resources} />

            <article className="mt-6 max-w-[1440px] mx-auto py-4 px-5 md:px-50">
              <div className="md:grid md:grid-cols-[1fr_0.4fr] gap-10">
                <div className="flex flex-col">
                {article.chapters.map((article, index) => (
                  <div key={index} className="mt-4 mb-15">
                    <h2 className="text-2xl font-[LeagueSpartanBold] mb-2" id={`chapter-${index}`}>{article.title}</h2>

                    {article.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-xl font-[LeagueSpartanRegular] mb-8 text-gray-700">{paragraph}</p>
                    ))}

                    {article.image &&
                      <figure>
                        <img className="mt-4 mx-auto shadow-sm rounded-md" src={article.image} alt={article.imageAlt} />
                        <figcaption className="text-left text-md text-[var(--black-color)] p-3 font-[LeagueSpartanRegular] 2xl:text-xl italic">{figureIndex += 1}. {article.imageFigcaption}</figcaption>
                      </figure>

                    }
                  </div>
                ))}
                </div>

                <div className="sticky top-20 hidden md:block p-5 rounded-lg h-fit">
                  <p className="text-xl font-[LeagueSpartanBold]">Table of contents</p>
                  <div className="mt-4 flex flex-col gap-3">
                    {article.chapters.map((chapter, index) => (
                     <button key={index} className="text-md text-left text-blue-600 hover:underline font-[LeagueSpartanRegular]" onClick={() =>
                      {
                        const element = document.getElementById(`chapter-${index}`);
                        element?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      {chapter.title}
                     </button>
                    ))}
                </div>
                <button className="mt-10 bg-[var(--secondary-color)] font-[LeagueSpartanRegular] text-sm text-[var(--black-color)]  px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200 inline-block shadow-sm"
                onClick={() => {
                  window.history.back()
                  }}>&#10229; Back to previous page</button>
                </div>
              </div>
              </article>
          </div>
        ) : (
          <NotFound />
        )}
      </div>
      <LatestBlogs/>
    </>
  )
}

export default Article
