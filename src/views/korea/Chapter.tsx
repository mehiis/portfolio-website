import { Link, useParams } from 'react-router-dom';
import Quiz from '../../data/koreaquiz';
import { useState, useMemo, useEffect } from 'react';

interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

interface QuizChapter {
  name: string;
  questions: QuizQuestion[];
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Chapter = () => {
  const { id } = useParams<{ id: string }>();

  // State
  const [currentQuizData, setCurrentQuizData] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [yourAnswer, setYourAnswer] = useState('');

  // Derived variables
  const questionAmount = currentQuizData.length;
  const currentQuestion = currentQuizData[currentIndex];

  useEffect(() => {
    if (!id) return;

    // FIX: Access the nested array structure [ChapterIndex][0]
    const rawData = Quiz;
    const chapterObject = rawData[parseInt(id) - 1]?.[0] as QuizChapter | undefined;

    if (chapterObject?.questions) {
      setCurrentQuizData(shuffleArray(chapterObject.questions));
      setCurrentIndex(0);
      setQuizDone(false);
      setCheckAnswer(false);
      setRightAnswers(0);
      setYourAnswer('');
    }
  }, [id]);

  const shuffledOptions = useMemo(() => {
    if (!currentQuestion) return [];
    return shuffleArray(currentQuestion.options);
  }, [currentIndex, currentQuestion]);

  if (currentQuizData.length === 0 && !quizDone) {
    return <div className="flex justify-center items-center min-h-screen text-2xl font-bold">Loading Quiz {id}...</div>;
  }

  return (
    <div className='max-w-360 flex flex-col justify-center items-center p-5 min-h-screen md:px-30 xl:px-80'>
      <h1 className='text-2xl font-bold my-3 font-[LeagueSpartanBold] text-center'>
        {(Quiz)[parseInt(id!) - 1]?.[0]?.name || `Chapter ${id}`}
      </h1>

      <p className='mb-4 font-[LeagueSpartanRegular] text-lg'>
        Question {currentIndex + 1} / {questionAmount}
      </p>

      {!quizDone ? (
        <div className='w-full bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mb-4'>
          <p className='text-2xl font-bold mb-2 text-center font-[LeagueSpartanBold]'>{currentQuestion?.question}</p>

          {checkAnswer ? (
                          <p className={`mb-2 text-lg text-center italic font-[LeagueSpartanRegular] ${yourAnswer === currentQuestion?.answer ? 'text-green-600' : 'text-red-600'}`}>
                {yourAnswer === currentQuestion?.answer ? 'Correct!' : 'Incorrect!'}
              </p>) : (<p className='mb-2 text-lg text-center italic font-[LeagueSpartanRegular]'>Please select an answer.</p>)}

          <div className='flex flex-col space-y-3'>
            {shuffledOptions.map((option) => (
              <button
                key={`${currentIndex}-${option}`}
                className={`py-3 px-4 rounded-xl font-bold text-lg transition-all transform active:scale-95 ${
                  checkAnswer
                    ? option === currentQuestion?.answer
                      ? "bg-green-500 text-white"
                      : option === yourAnswer
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 text-gray-400"
                    : "bg-gray-100 text-gray-800 hover:bg-(--primary-color) hover:scale-105 duration-150"
                }`}
                onClick={() => {
                  if (!checkAnswer) {
                    setCheckAnswer(true);
                    setYourAnswer(option);
                    if (option === currentQuestion?.answer) {
                      setRightAnswers(prev => prev + 1);
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
            <div className='mt-8 pt-6 border-t border-gray-100 animate-in fade-in slide-in-from-bottom-2'>
                <button
                className='w-full py-4 font-[LeagueSpartanBold] bg-(--secondary-color) text-(--black-color) rounded-xl font-bold text-lg hover:scale-103 transition-transform mb-4'
                onClick={() => {
                  setCheckAnswer(false);
                  if (currentIndex + 1 < questionAmount) {
                    setCurrentIndex(prev => prev + 1);
                  } else {
                    setQuizDone(true);
                  }
                }}
              >
                {currentIndex + 1 < questionAmount ? 'Next Question' : 'See Results'}
              </button>

              <p className='text-gray-700 leading-relaxed mb-6 font-[LeagueSpartanRegular]'>{currentQuestion?.explanation}</p>

              <p className='text-xs text-gray-500 mt-4 font-[LeagueSpartanRegular] italic'>
                (Most explanations are written with the help of an AI model and checked by a person, but they may not be 100% accurate. If you find any mistakes, feel free to point them out!)
              </p>
            </div>
          )}
        </div>
      ) : (

        <div className='text-center p-8 bg-(--white-color) rounded-3xl shadow-sm w-full'>
          <p className='text-md uppercase tracking-widest text-gray-500 font-bold font-[LeagueSpartanBold]'>Your Grade</p>
          <p className='text-9xl my-4 font-black text-(--secondary-color)'>
            {(() => {
                const score = (rightAnswers / questionAmount) * 100;
                if (score >= 95) return 'A+';
                if (score >= 90) return 'A';
                if (score >= 85) return 'B+';
                if (score >= 80) return 'B';
                if (score >= 75) return 'C+';
                if (score >= 70) return 'C';
                if (score >= 65) return 'D+';
                if (score >= 60) return 'D';
                return 'F';
            })()}
          </p>
          <p className='text-2xl font-bold text-gray-800 font-[LeagueSpartanBold]'>
            Score: {rightAnswers} / {questionAmount}
          </p>

          <div className='grid grid-cols-1 gap-3 mt-10'>
            <button
              className='py-4 bg-(--secondary-color) text-(--black-color) rounded-xl font-bold text-lg hover:scale-105 duration-300 font-[LeagueSpartanRegular]'
              onClick={() => {
                const rawData = Quiz;
                const chapterObject = rawData[parseInt(id!) - 1]?.[0];
                if (chapterObject) {
                  setCurrentQuizData(shuffleArray(chapterObject.questions));
                  setQuizDone(false);
                  setCheckAnswer(false);
                  setCurrentIndex(0);
                  setRightAnswers(0);
                  setYourAnswer('');
                }
              }}
            >
              Try Again
            </button>

            {id && Quiz.length > parseInt(id) && (
              <Link to={`/korea/chapter/${parseInt(id) + 1}`} className='py-4 bg-gray-200 text-gray-800 rounded-xl font-bold text-lg hover:scale-105 duration-300 font-[LeagueSpartanRegular]'>
                Next Lesson
              </Link>
            )}
          </div>
        </div>
      )}

      <Link to='/korea' className="m-3 bg-(--secondary-color) font-[LeagueSpartanRegular] text-sm text-(--black-color)  px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200 inline-block shadow-sm">
        &#10229; Back to Chapters
      </Link>
    </div>
  );
};

export default Chapter;
