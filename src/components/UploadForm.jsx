// src/components/TimeTableUpload/UploadForm.jsx
import React, { useState } from 'react';
import { showSuccessAlert } from '../utils/alerts';

const UploadForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    'ET Block',
    'MT Block',
    'HM Block',
    'PH Block',
    'Campus 1'
  ];

  const handleUpdate = () => {
    if (selectedOption) {
      showSuccessAlert();
    } else {
      alert('Please select an option before updating');
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-black mb-4">Upload new Time Table</h2>
      
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg flex justify-between items-center hover:border-gray-400 transition-colors"
        >
          <span className={selectedOption ? "text-gray-900" : "text-gray-400"}>
            {selectedOption || "Select an option"}
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isDropdownOpen && (
          <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-10">
            {options.map((option) => (
              <button
                key={option}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                onClick={() => {
                  setSelectedOption(option);
                  setIsDropdownOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      <button 
        onClick={handleUpdate}
        className="w-full px-6 py-3 !bg-black !hover:bg-gray-800 text-white rounded-lg transition-colors shadow-md"
      >
        Update
      </button>
    </div>
  );
};

export default UploadForm;