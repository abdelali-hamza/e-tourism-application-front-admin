import React from 'react'
import CardOne from './Cards/CardOne'
import CardTwo from './Cards/CardTwo'
import CardThree from './Cards/CardThree'
import CardFour from './Cards/CardFour'
import Comment from './Comment'
import Chart from './Chart'

const Dashbord = () => {

  return (
    <div className='flex flex-row justify-between w-full h-full '>
      <div className='flex flex-col  my-5 w-full'>
        <div className='text-3xl font-bold flex flex-col'>Dashboard
          <span className='text-sm text-gray-500 font-medium mt-1 hidden sm:flex'>Bonjour Imed , Bienvenue a Numidia admin dashboard</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4">
          <CardOne />
          <CardTwo />
          <CardThree />
          <CardFour />
        </div>
        <div className='mt-5'>
          <Chart />
        </div>
        <div className='text-xl font-medium  flex flex-col mt-5'>
          <h3 className='mb-3 font-bold'>Commentaires sur l'application</h3>
          <Comment />
        </div>
      </div>
    </div>
  )
}

export default Dashbord