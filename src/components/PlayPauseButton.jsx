import React from 'react';
import { Play, Pause } from 'lucide-react';

const PlayPauseButton = ({ isRunning, toggleRunning }) => {
  return (
    <button
      onClick={toggleRunning}
      className="control-button inline-flex items-center justify-center p-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
      aria-label={isRunning ? "Pause clock" : "Start clock"}
    >
      {isRunning ? (
        <Pause size={20} className="stroke-[2.5px]" />
      ) : (
        <Play size={20} className="stroke-[2.5px]" />
      )}
    </button>
  );
};

export default PlayPauseButton;