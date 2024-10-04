import React from 'react'
import Jacket from './assets/pictures/jacket.jpeg'
import Fridge from './assets/pictures/fridge.jpeg'
import Chair from './assets/pictures/chair.jpeg'
import Roller from './assets/pictures/roller.jpeg'
import Spoon from './assets/pictures/spoon.jpeg'

const FourthSection = () => {
  return (
      <div className='py-16' id='Services'>
        <div className='container'>
          <div className='mb-6'>
            <h1 className='text-2xl font-semibold mb-3 text-green-600'>Featured Items</h1>
            <p className='mb-3 w-[800px] max-w-full text-green-600'>The "Featured Listings" section showcases some of the most recent or popular items currently available on Ver. This is where you can discover a diverse range of good others in the community have generously offered. From household essentials to un. finds, these items have been highlighted because they are either in high demand or have just been added to the platform. Whether you're looking for something specific or simply browsing, our Featured Listings give you a snapshot of what's available right now, helping you find exactly what you need quickly and easily.</p>
            <button className='bg-green-600 text-white text-sm px-3 py-2 rounded-sm'>View Details</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <div className="rounded-lg overflow-hidden">
              <img src={Jacket} alt="jacket" className=" h-full w-full object-cover" />
            </div>
            <div className=" rounded-lg row-span-2 overflow-hidden">
              <img src={Fridge} alt="fridge" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={Spoon} alt="laptop" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg row-span-2 overflow-hidden">
              <img src={Roller} alt="sofa" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={Spoon} alt="stroller" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg  overflow-hidden">
              <img src={Chair} alt="chair" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default FourthSection