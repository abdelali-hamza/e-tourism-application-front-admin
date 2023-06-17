import React from 'react';
import comment from '../../public/comment.png';
import Image from 'next/image';

const CardTwo = () => {
  return (
    <div className="p-5 mt-6 bg-white rounded-lg shadow-md flex flex-col items-center sm:flex-row sm:items-center sm:justify-center">
      <Image src={comment} width={60} alt="Numidia-DZ" />

      <div className="flex flex-col text-center mt-4 sm:mt-0 sm:ml-4">
        <div className="text-2xl font-bold text-gray-900">357</div>
        <div className="text-gray-400">Commentaires</div>
        <div className="flex items-center justify-center mt-2 sm:justify-start">
          <div className="flex items-center p-1 text-sm rounded-full text-green-600 bg-green-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
          </div>
          <span className="text-sm text-gray-500 font-medium ml-1">
            4% (30 jours)
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
