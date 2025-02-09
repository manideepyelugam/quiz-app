import { useState, useEffect } from 'react';
import { QuizStart } from './QuizStart';
import { QuizInProgress } from './QuizInProgress';
import { QuizResult } from './QuizResult';

const QuizApp = () => {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [streakCount, setStreakCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isActive, setIsActive] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);



    useEffect(() => {
      const fetchQuiz = async () => {
        try {
          const response = await fetch("http://localhost:2000/api/questions");
          if (!response.ok) throw new Error('Failed to fetch quiz data');
          const data = await response.json();
          setQuizData(data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
      fetchQuiz();
    }, []);


      useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
          interval = setInterval(() => {
            setTimeLeft((time) => time - 1);
          }, 1000);
        } else if (timeLeft === 0) {
          handleNextQuestion();
          setTimeLeft(quizData.duration || 15);
        }
        return () => clearInterval(interval);
      }, [isActive, timeLeft]);
    


  const startQuiz = () => {
    setIsActive(true);
    setTimeLeft(quizData.duration || 15);
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    const correctOption = quizData.questions[currentQuestion].options.find(opt => opt.is_correct);
    const isCorrect = answer === correctOption.description;
    
    if (isCorrect) {
      setStreakCount(prev => prev + 1);
      setScore(prev => prev + parseFloat(quizData.correct_answer_marks));
    } else {
      setStreakCount(0);
    }

    setUserAnswers([...userAnswers, { 
      question: currentQuestion, 
      answer, 
      isCorrect 
    }]);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setTimeLeft(quizData.duration || 15);
    } else {
      setShowResult(true);
      setIsActive(false);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswers([]);
    setShowResult(false);
    setIsActive(false);
    setTimeLeft(15);
  };


  if (loading) return <div className="text-center">Loading quiz...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  if (!isActive && !showResult) return (
    <QuizStart quizData={quizData} startQuiz={startQuiz} />
  );

  if (showResult) return (
    <QuizResult 
      quizData={quizData} 
      score={score} 
      userAnswers={userAnswers} 
      restartQuiz={restartQuiz} 
    />
  );

  return (
    <QuizInProgress
      quizData={quizData}
      currentQuestion={currentQuestion}
      timeLeft={timeLeft}
      score={score}
      streakCount={streakCount}
      selectedAnswer={selectedAnswer}
      handleAnswerSelect={handleAnswerSelect}
      handleNextQuestion={handleNextQuestion}
    />
  );
};

export default QuizApp;