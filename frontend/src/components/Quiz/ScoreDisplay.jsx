import { Trophy } from 'lucide-react';

export const ScoreDisplay = ({ score }) => (
  <div className="flex items-center gap-1">
    <Trophy className="w-5 h-5 text-yellow-500" /> {score} pts
  </div>
);
