import { Clock } from 'lucide-react';

export const QuizTimer = ({ timeLeft }) => (
  <div className="flex items-center gap-1">
    <Clock className="w-5 h-5" /> {timeLeft}s
  </div>
);