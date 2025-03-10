import React from 'react';

const TimeFormatToggle = ({ is24Hour, toggleFormat }) => {
  return (
    <div className="flex items-center space-x-3">
      <span className={`text-sm font-medium ${!is24Hour ? 'text-primary' : 'text-gray-500'}`}>12h</span>
      
      <button
        onClick={toggleFormat}
        className={`toggle-switch relative inline-flex items-center rounded-full w-12 h-6 transition-colors ${
          is24Hour ? 'bg-primary' : 'bg-gray-300'
        }`}
        aria-label={`Switch to ${is24Hour ? '12 hour' : '24 hour'} format`}
      >
        <span 
          className={`toggle-handle absolute left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transform ${
            is24Hour ? 'translate-x-6' : ''
          }`} 
        />
      </button>
      
      <span className={`text-sm font-medium ${is24Hour ? 'text-primary' : 'text-gray-500'}`}>24h</span>
    </div>
  );
};

export default TimeFormatToggle;
