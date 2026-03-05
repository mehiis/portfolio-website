import { Link } from 'react-router-dom';
import Quiz from '../data/koreaquiz';

const Korea = () => {
  return (
    <div className='items-start flex flex-col min-h-screen'>
      <div className='flex flex-col gap-4 items-start bg-(--secondary-color) w-full py-5 shadow-sm items-center px-5 md:px-30 xl:px-80'>
        <h1 className='font-[LeagueSpartanBold] text-2xl'>Simple quizes for learning Korean</h1>
        <p>This quizes were made for learning Korean when I was an exchange student in Seoul. I hope you find them helpful!</p>
      </div>
    <div className='flex flex-col gap-4 mt-6 w-max-360 mx-auto px-5 md:px-30 xl:px-80'>
        {Quiz.map((chapter, index) => (
            <Link to={`/korea/chapter/${index + 1}`} key={index} className='py-4 px-6 bg-(--secondary-color) text-(--black-color) rounded-lg text-center hover:scale-105 transition-transform duration-300 font-[LeagueSpartanRegular]'>
                {chapter[0]?.name || `Chapter ${index + 1}`}
            </Link>
        ))}
    </div>
    </div>
  )
}

export default Korea
