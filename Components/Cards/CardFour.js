import React from 'react';
import accessible from '../../public/accessible.png';
import Image from 'next/image';

const CardFour = () => {
    return (
        <div className="p-5 mt-6 bg-white rounded-lg shadow-md flex flex-col items-center sm:flex-row sm:items-center sm:justify-center">
            <Image src={accessible} width={60} alt="Numidia-DZ" />

            <div className="flex flex-col text-center mt-4 sm:mt-0 sm:ml-4">
                <div className="text-lg font-bold text-gray-900">12 800</div>
                <div className="text-gray-400 whitespace-nowrap">Accès à l'application</div>
                <div className="flex items-center justify-center mt-2 sm:justify-start">
                    <div className="flex items-center p-1 text-sm rounded-full text-red-600 bg-red-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
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

export default CardFour;
