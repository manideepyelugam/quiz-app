import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const QuizStart = ({ quizData, startQuiz }) => (
  <Card className="w-full max-w-2xl mx-auto mt-8">
    <CardHeader>
      <CardTitle className="text-2xl text-center">{quizData.title}</CardTitle>
    </CardHeader>
    <CardContent className="p-6">
      <div className="text-center">{quizData.description}</div>
      <div className="flex justify-center mt-4">
        <Button onClick={startQuiz}>Start Quiz</Button>
      </div>
    </CardContent>
  </Card>
);