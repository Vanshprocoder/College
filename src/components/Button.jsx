import React from 'react';

const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full !bg-black text-white py-3 rounded-md !hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
    >
      {text}
    </button>
  );
};

export default Button;
