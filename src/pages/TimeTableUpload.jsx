
import React from 'react';
import UploadForm from '../components/UploadForm';
import FileUpload from '../components/FileUpload';
import Logo from '../components/Logo';

const TimeTableUpload = () => {
  return (
    <div 
  className="min-h-screen min-w-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-4 md:bg-[url('./src/assets/pcte_ludhiana_cover.jpeg')]"
  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    backgroundBlendMode: 'overlay'
  }}
>

      <div className="w-full max-w-7xl h-full max-h-3xl bg-white backdrop-blur-md rounded-xl shadow-lg p-8">
        <Logo />
        <div className="rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-black">Upload Time Table</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <UploadForm />
            <FileUpload />
          </div>
        </div>
        <footer className="mt-8 text-center text-sm text-gray-600">
          © 2025 PCTE ALL RIGHTS RESERVED
        </footer>
      </div>
    </div>
  );
};

export default TimeTableUpload;