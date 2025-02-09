import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const QuizQuestion = ({ question, handleAnswerSelect, handleNextQuestion, selectedAnswer }) => (
  <Card className="w-full max-w-2xl mx-auto mt-8">
    <CardHeader>
      <CardTitle className="text-xl">{question.description}</CardTitle>
    </CardHeader>
    <CardContent>
      {question.options.map((option) => (
        <Button
          key={option.id}
          onClick={() => handleAnswerSelect(option.description)}
          className={`w-full justify-start p-4 text-left ${
            selectedAnswer === option.description ? (option.is_correct ? 'bg-green-500' : 'bg-red-500') : ''
          }`}
          disabled={!!selectedAnswer}
        >
          {option.description}
        </Button>
      ))}
      {selectedAnswer && (
        <div className="flex justify-end mt-4">
          <Button onClick={handleNextQuestion}>
            Next Question
          </Button>
        </div>
      )}
    </CardContent>
  </Card>
);

export default QuizQuestion;