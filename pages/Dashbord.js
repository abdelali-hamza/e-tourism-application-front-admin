import React from 'react'
import CardOne from '../Components/Cards/CardOne'
import CardTwo from '../Components/Cards/CardTwo'
import CardThree from '../Components/Cards/CardThree'
import CardFour from '../Components/Cards/CardFour'
import Comment from '../Components/Comment'
import Chart from '../Components/Chart'
import { PieChart } from '../Components/PieChart'

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
        <div className='mt-5 flex justify-between items-center'>
           <div className='mt-5 flex w-1/4justify-between'>
            <PieChart />
          </div>
          <div className='mt-5 flex w-3/4 justify-between pl-8'>
            <Chart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashbord