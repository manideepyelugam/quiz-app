import { Star } from 'lucide-react';

export const StreakDisplay = ({ streakCount }) => (
  <div className="flex items-center gap-1">
    <Star className="w-5 h-5 text-yellow-500" /> x{streakCount}
  </div>
);