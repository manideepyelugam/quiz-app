import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

export const QuizResult = ({ quizData, score, userAnswers, restartQuiz }) => (
  <Card className="w-full max-w-2xl mx-auto mt-8">
    <CardHeader>
      <CardTitle className="text-2xl text-center">Quiz Complete!</CardTitle>
    </CardHeader>
    <CardContent className="p-6">
      <div className="text-center">
        <Trophy className="w-16 h-16 mx-auto text-yellow-500" />
        <h3 className="text-xl font-bold mb-6">Your Score: {score} points</h3>
      </div>

      <div className="space-y-6">
        {quizData.questions.map((question, index) => {
          const userAnswer = userAnswers[index];
          const correctAnswer = question.options.find(opt => opt.is_correct);

          return (
            <div key={question.id} className="p-4 border rounded-lg bg-gray-50">
              <div className="font-semibold text-lg mb-2">
                Question {index + 1}
              </div>
              <p className="text-gray-700 mb-4">{question.description}</p>

              <div className="space-y-2">
                <div className={`p-3 rounded-lg ${userAnswer?.isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                  <span className="font-medium">Your answer:</span> {userAnswer?.answer || 'Unanswered'}
                  {userAnswer?.isCorrect ? (
                    <span className="ml-2 text-green-600">✓</span>
                  ) : (
                    <span className="ml-2 text-red-600">✕</span>
                  )}
                </div>

                <div className="p-3 rounded-lg bg-green-100">
                  <span className="font-medium">Correct answer:</span> {correctAnswer.description}
                </div>
              </div>

              {question.detailed_solution && (
                <div className="mt-4 p-4 bg-white border rounded-lg">
                  <div className="font-medium text-gray-700 mb-2">Explanation:</div>
                  <div className="text-gray-600 whitespace-pre-wrap">
                    {question.detailed_solution}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Button 
        onClick={restartQuiz} 
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
      >
        Try Again
      </Button>
    </CardContent>
  </Card>
);