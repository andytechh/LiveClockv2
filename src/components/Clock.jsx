import React, { useState, useEffect } from 'react';
import PlayPauseButton from './PlayPauseButton';
import TimeFormatToggle from './TimeFormatToggle';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);
  const [is24Hour, setIs24Hour] = useState(false);
  const [prevSecond, setPrevSecond] = useState(time.getSeconds());

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    let period = '';

    if (!is24Hour) {
      period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
    } else {
      hours = hours.toString().padStart(2, '0');
    }

    return { hours, minutes, seconds, period };
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        const newDate = new Date();
        setPrevSecond(time.getSeconds());
        setTime(newDate);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const { hours, minutes, seconds, period } = formatTime();
  const secondChanged = prevSecond !== parseInt(seconds);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
      <div className="relative p-8 md:p-10 max-w-md mx-auto shadow-lg border-4 border-transparent rounded-2xl w-200"
   style={{
    boxShadow: `
      0 0 15px rgba(255, 0, 0, 0.9), 
      0 0 30px rgba(0, 255, 0, 0.9), 
      0 0 45px rgba(0, 0, 255, 0.9)
    `,
    background: 'black', 
    border: '4px solid transparent'
  }}
  
      >
        <div className="clock-display mb-8 flex flex-col items-center justify-center text-white">
          <div className="text-5xl md:text-7xl font-medium tracking-tight flex items-baseline">
            <span className={`transition-opacity duration-300 ${secondChanged ? 'clock-digit-appear' : ''}`}>
              {hours}
            </span>
            <span className="mx-2 animate-pulse text-red-400">:</span>
            <span className={`transition-opacity duration-300 ${secondChanged ? 'clock-digit-appear' : ''}`}>
              {minutes}
            </span>
            <span className="mx-2 animate-pulse text-blue-400">:</span>
            <span className={`transition-opacity duration-300 ${secondChanged ? 'clock-digit-appear' : ''}`}>
              {seconds}
            </span>
            {!is24Hour && (
              <span className="ml-4 text-lg md:text-xl text-gray-400 font-normal animate-fade-in">
                {period}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between text-white">
          <TimeFormatToggle is24Hour={is24Hour} toggleFormat={() => setIs24Hour(!is24Hour)} />
          <PlayPauseButton isRunning={isRunning} toggleRunning={() => setIsRunning(!isRunning)} />
        </div>
      </div>
    </div>
  );
};

export default Clock;