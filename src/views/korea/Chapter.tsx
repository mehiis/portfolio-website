import { Link, useParams } from 'react-router-dom';
import Quiz from '../../data/koreaquiz';
import { useState, useMemo } from 'react';

const Chapter = () => {
  const { id } = useParams<{ id: string }>();
  const [quizDone, setQuizDone] = useState(false);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const questionAmount = id ? Quiz[parseInt(id) - 1].length : 0;
  const quizAmmount = Quiz.length;
  const question = id ? Quiz[parseInt(id) - 1][currentIndex] : null;
  const [yourAnswer, setYourAnswer] = useState('');

  const shuffledOptions = useMemo(() => {
    if (!question) return [];
    return [...question.options].sort(() => Math.random() - 0.5);
  }, [currentIndex, id]);

  return (
<div className='m-auto max-w-360 flex flex-col justify-center items-center px-5 md:px-80 min-h-screen'>
      <h1 className='text-3xl font-bold my-6 mb-8 font-[LeagueSpartanBold]'>Basic korean quiz {id}</h1>
      <p className='mb-2 font-[LeagueSpartanRegular]'>Question {currentIndex + 1} / {questionAmount}</p>
      {!quizDone ? (
          <div className='w-full bg-(--primary-color) rounded-full mb-10'>
            <div className='bg-(--secondary-color) text-xs leading-none h-4 rounded-full' style={{ width: `${((currentIndex + 1) / questionAmount) * 100}%` }}></div>
          </div>
      ) : (
        <p className='text-green-500 font-bold mb-4 font-[LeagueSpartanBold]'>Quiz Completed!</p>
      )}
      {!quizDone && id && (
        <div className='w-full bg-(--primary-color) rounded-lg p-4 mb-4'>
          <p className='text-lg font-bold mb-2 font-[LeagueSpartanBold]'>{Quiz[parseInt(id) - 1][currentIndex].question}</p>
          <div className='flex flex-col space-y-2'>
      {shuffledOptions.map((option, index) => (
      <button
        key={index}
        className={`w-full py-2 px-4 rounded-lg font-[LeagueSpartanRegular] font-bold ${
          checkAnswer
            ? option === question?.answer
              ? "bg-green-500 text-white"
              : option === yourAnswer
              ? "bg-red-500 text-white"
              : "bg-(--secondary-color) text-(--black-color)"
            : "bg-(--secondary-color) text-(--black-color)"
        }`}
        onClick={() => {
          if (!checkAnswer) {
            setCheckAnswer(true);
            setYourAnswer(option);
            if (option === question?.answer) {
              setRightAnswers(rightAnswers + 1);
            }
          }
        }}
        disabled={checkAnswer}
      >
        {option}
      </button>
      ))}
          </div>
          {checkAnswer && (
            <div>
              <button
                className='mt-6 py-2 px-4 bg-(--secondary-color) text-(--black-color) rounded-lg font-[LeagueSpartanRegular]'
                onClick={() => {
                  setCheckAnswer(false);
                  if (currentIndex + 1 < questionAmount) {
                    setCurrentIndex(currentIndex + 1);
                  } else {
                    setQuizDone(true);
                  }
                }}
              >
                {currentIndex + 1 < questionAmount ? 'Next Question' : 'Finish Quiz'}
              </button>
              <p
              className={`mt-4 font-bold text-md italic font-[LeagueSpartanRegular] ${yourAnswer === question?.answer ? 'text-green-500' : 'text-red-500'}`}>
                {yourAnswer === question?.answer ? 'Correct!' : 'Incorrect!'}
              </p>
              <p
                className='mt-2 py-2 font-[LeagueSpartanRegular]'>
                {Quiz[parseInt(id) - 1][currentIndex].explanation}</p>
                <p className='mt-2 py-2 italic text-sm text-gray-500'>
                  (Most explanations are written with the help of an AI model and checked by a person, but they may not be 100% accurate. If you find any mistakes, feel free to point them out!)
                </p>
            </div>
          )}
        </div>
      )}
      {quizDone && (
        <>
             <p className='text-8xl mt-5 mb-10 font-bold'>{
                Math.round((rightAnswers / questionAmount) * 100) > 96 ? 'A+' :
                Math.round((rightAnswers / questionAmount) * 100) > 90 ? 'A' :
                Math.round((rightAnswers / questionAmount) * 100) > 83 ? 'B+' :
                Math.round((rightAnswers / questionAmount) * 100) > 80 ? 'B' :
                Math.round((rightAnswers / questionAmount) * 100) > 74 ? 'C+' :
                Math.round((rightAnswers / questionAmount) * 100) > 70 ? 'C' :
                Math.round((rightAnswers / questionAmount) * 100) > 57 ? 'D' : 'F'}</p>

          <p className='text-xl font-bold font-[LeagueSpartanBold]'>You got {rightAnswers} out of {questionAmount} correct!</p>
          <div className='flex space-x-4 mt-4'>
          <button
            className='mt-4 py-2 px-4 bg-(--secondary-color) text-(--black-color) rounded-lg font-[LeagueSpartanRegular]'
            onClick={() => {
              setQuizDone(false);
              setCheckAnswer(false);
              setCurrentIndex(0);
              setRightAnswers(0);
            }}
          >
            Retake Quiz
        </button>
        {id && quizAmmount > parseInt(id) && (
          <Link
          onClick={() => {
            setQuizDone(false);
            setCheckAnswer(false);
            setCurrentIndex(0);
            setRightAnswers(0);
          }}
          to={`/korea/chapter/${parseInt(id) + 1}`} className='mt-4 py-2 px-4 bg-(--secondary-color) text-(--black-color) rounded-lg'>
            Next Lesson
          </Link>
        )}
        </div>
        </>
      )}
    </div>
  )
}

export default Chapter
