import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { QuizTimer } from './QuizTimer';
import { ScoreDisplay } from './ScoreDisplay';
import { StreakDisplay } from './StreakDisplay';

export const QuizInProgress = ({
  quizData,
  currentQuestion,
  timeLeft,
  score,
  streakCount,
  selectedAnswer,
  handleAnswerSelect,
  handleNextQuestion
}) => (
  <Card className="w-full max-w-2xl mx-auto mt-8">
    <CardHeader>
      <div className="flex justify-between items-center mb-4">
        <QuizTimer timeLeft={timeLeft} />
        <ScoreDisplay score={score} />
        <StreakDisplay streakCount={streakCount} />
      </div>
      <Progress value={(currentQuestion + 1) / quizData.questions.length * 100} />
      <CardTitle className="text-xl mt-4">
        {quizData.questions[currentQuestion].description}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        {quizData.questions[currentQuestion].options.map((option) => (
          <Button
            key={option.id}
            onClick={() => handleAnswerSelect(option.description)}
            className={`w-full justify-start p-4 text-left ${
              selectedAnswer === option.description 
                ? option.is_correct 
                  ? 'bg-green-500 hover:bg-green-500' 
                  : 'bg-red-500 hover:bg-red-500'
                : ''
            }`}
            disabled={selectedAnswer !== null}
          >
            {option.description}
          </Button>
        ))}
      </div>
      {selectedAnswer && (
        <div className="flex justify-end mt-4">
          <Button 
            onClick={handleNextQuestion}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {currentQuestion === quizData.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </Button>
        </div>
      )}
    </CardContent>
  </Card>
);