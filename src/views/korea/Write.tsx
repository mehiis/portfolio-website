import { Link, useParams } from 'react-router-dom';
import Quiz from '../../data/koreaquiz';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface QuizQuestion {
  question: string;
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

const Write = () => {
  const { id } = useParams<{ id: string }>();

  const [currentQuizData, setCurrentQuizData] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [userInput, setUserInput] = useState(''); // Stores what user types

  const questionAmount = currentQuizData.length;
  const currentQuestion = currentQuizData[currentIndex];

  useEffect(() => {
    if (!id) return;
    const rawData = Quiz;
    const chapterObject = rawData[parseInt(id) - 1]?.[0] as QuizChapter | undefined;

    if (chapterObject?.questions) {
      setCurrentQuizData(shuffleArray(chapterObject.questions));
      resetState();
    }
  }, [id]);

  const resetState = () => {
    setCurrentIndex(0);
    setQuizDone(false);
    setCheckAnswer(false);
    setRightAnswers(0);
    setUserInput('');
  };

  const handleVerify = (e?: React.FormEvent<HTMLFormElement>) => {
    const filtered: string = userInput.trim().toLowerCase().replaceAll("?", "");

    if (e) e.preventDefault();
    if (!userInput.trim() || checkAnswer) return;

    setCheckAnswer(true);

    const isCorrect = filtered === currentQuestion?.answer.trim().toLowerCase();

    if (isCorrect) {
      setRightAnswers(prev => prev + 1);
    }
  };

  if (currentQuizData.length === 0 && !quizDone) {
    return <div className="flex justify-center items-center min-h-screen text-2xl font-bold">Loading...</div>;
  }

  return (
    <>
        <Helmet>
          <title>Niko Mehiläinen - Korean Quiz</title>
          <meta name="description" content="Learn Korean & Hangul with interactive quizzes online." />
        </Helmet>

    <div className='max-w-360 flex flex-col justify-center items-center p-5 min-h-screen md:px-30 xl:px-80 '>
      <h1 className='text-2xl font-bold my-3 font-[LeagueSpartanBold] text-center'>
        {(Quiz)[parseInt(id!) - 1]?.[0]?.name || `Chapter ${id}`}
      </h1>

      <p className='mb-4 font-[LeagueSpartanRegular] text-lg text-gray-500'>
        Question {currentIndex + 1} / {questionAmount}
      </p>

      {!quizDone ? (
        <div className='w-full bg-white shadow-sm border border-gray-100 rounded-2xl px-10 mb-4 py-15'>
          <p className='text-3xl font-bold mb-6 text-center font-[LeagueSpartanBold]'>
            {currentQuestion?.question}
          </p>

          {checkAnswer ? (
            <div className={`text-center mb-2 rounded-lg ${userInput.trim().toLowerCase() === currentQuestion?.answer.toLowerCase() ? 'text-green-500' : 'text-red-500'}`}>
                  {
                  userInput.trim().toLowerCase() === currentQuestion?.answer.toLowerCase()
                    ? "Correct!"
                    : "Incorrect!"
                  }
                </div>) : null}
          <form onSubmit={handleVerify} className='flex flex-col space-y-4 items-center'>
            <input
              type="text"
              autoFocus
              className={`w-full p-4 text-xl rounded-xl border-2 outline-none transition-all text-center font-[LeagueSpartanRegular]
              ${
                checkAnswer
                  ? (userInput.trim().toLowerCase() === currentQuestion?.answer.toLowerCase()
                      ? "border-green-500 bg-green-50"
                      : "border-red-500 bg-red-50")
                  : "border-gray-200 focus:border-(--secondary-color)"
              }`}
              placeholder="Type your answer here..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={checkAnswer}
            />

            {!checkAnswer ? (
              <div className='flex flex-col md:flex-row gap-4 w-full justify-center items-center'>
              <button
                type="submit"
                className='py-4 bg-(--secondary-color) text-(--black-color) rounded-xl font-[LeagueSpartanBold] text-xl hover:scale-105 transition-transform duration-200 inline-block shadow-sm mt-2 px-10 justify-self-center items-center'
              >
                Check Answer
              </button>
              <button
              type = "button" className='py-4 bg-gray-200 text-[--black-color] font-[LeagueSpartanRegular] rounded-xl text-lg hover:scale-105 duration-300 mt-2 px-10 justify-self-center items-center inline-block shadow-sm'
              onClick={() => {
                setCheckAnswer(true);
              }
              }
              >
                I don't know
              </button>
              </div>

            ) : (
              <div className="animate-in fade-in slide-in-from-top-2">
                <button
                  type="button"
                  className='w-full py-4 bg-(--secondary-color) text-(--black-color) rounded-xl font-[LeagueSpartanBold] text-lg hover:scale-102 transition-transform duration-200 inline-block shadow-sm mt-2 px-10 justify-self-center items-center'
                  onClick={() => {
                    setCheckAnswer(false);
                    setUserInput('');
                    if (currentIndex + 1 < questionAmount) {
                      setCurrentIndex(prev => prev + 1);
                    } else {
                      setQuizDone(true);
                    }
                  }}
                >
                  {currentIndex + 1 < questionAmount ? 'Next Question' : 'See Results'}
                </button>

                <div className='mt-6 pt-6 border-t border-gray-100 flex justify-center'>
                   <p className='text-gray-700 leading-relaxed font-[LeagueSpartanRegular] font-bold text-center '>
                    {"Correct answer: " + currentQuestion?.explanation}
                   </p>
                </div>
              </div>
            )}
          </form>
        </div>
      ) : (
        <div className='text-center p-8 bg-white rounded-3xl shadow-sm w-full'>
          <p className='text-md uppercase tracking-widest text-gray-500 font-bold'>Your Grade</p>
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
          <p className='text-2xl font-bold text-gray-800'>Score: {rightAnswers} / {questionAmount}</p>
          <button
            className='mt-8 w-full py-4 bg-(--secondary-color) rounded-xl font-bold'
            onClick={resetState}
          >
            Try Again
          </button>
        </div>
      )}

      <Link to='/korea' className="m-3 bg-(--secondary-color) font-[LeagueSpartanRegular] text-sm text-(--black-color)  px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200 inline-block shadow-sm">
        &#10229; Back to Chapters
      </Link>
    </div>
    </>
  );
};

export default Write;
