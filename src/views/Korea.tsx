import { Link } from 'react-router-dom';
import Quiz from '../data/koreaquiz';
import { Helmet } from 'react-helmet-async';

const Korea = () => {
  return (
    <div className='mb-8'>
    <Helmet>
        <title>Niko Mehiläinen - Learn Korean</title>
        <meta name="description" content={`Simple Korean quizzes for beginners! Learn the alphabet, words, and expressions. Created to support my exchange studies in Seoul.`} />
    </Helmet>

    <div className='items-start flex flex-col min-h-screen'>
      <div className='flex flex-col gap-4 bg-(--secondary-color) w-full py-5 shadow-sm items-center px-5 md:px-30 xl:px-80'>
        <h1 className='font-[LeagueSpartanBold] text-2xl'>Simple Quizzes for Learning Korean</h1>
        <p>These quizzes were made to help learn Korean when I was an exchange student in Seoul. I hope you find them helpful!</p>
      </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8 px-10 xl:px-80'>
        {Quiz.map((chapter, index) => (
          chapter[0]?.write ? (
            <Link to={`/korea/write/${index + 1}`} key={index} className='py-4 px-6 bg-(--secondary-color) text-(--black-color) rounded-lg text-center hover:scale-105 transition-transform duration-300 font-[LeagueSpartanRegular] justify-center items-center flex'>
                {chapter[0]?.name || `Chapter ${index + 1}`}
            </Link>
          ) : (
             <Link to={`/korea/chapter/${index + 1}`} key={index} className='py-4 px-6 bg-(--secondary-color) text-(--black-color) rounded-lg text-center hover:scale-105 transition-transform duration-300 font-[LeagueSpartanRegular] justify-center items-center flex'>
                {chapter[0]?.name || `Chapter ${index + 1}`}
            </Link>
          )
        ))}
      </div>
    </div>
    </div>
  )
}

export default Korea
