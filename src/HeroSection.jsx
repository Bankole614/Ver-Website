import React from 'react';
import Donate from './assets/donation.png';
import MercyCorps from './assets/Mercy.jpg'
import Unicef from './assets/Group.jpg'
import Intersos from './assets/intersos.jpg'
import Inso from './assets/inso.jpg'
import Nrc from './assets/NRC.jpg'
import Unfpa from './assets/unfpa.jpg'

const HeroSection = () => {
  return (
    <>
      <div className='container py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8'>
          <div className='flex flex-col justify-center items-center md:items-start text-center sm:text-left pb-6 lg:pb-0'>
            <div className='pb-5 lg:pb-8'>
              <h2 className='font-semibold xl:text-5xl lg:text-3xl md:text-3xl sm:text-lg text-3xl lg:pb-8 pb-5'>
                Ver helps you donate unused items to those who need them. Start sharing today.
              </h2>
              <p className='font-medium md:font-normal lg:text-xl md:text-lg sm:text-sm text-base'>
                Your excess can become someone's essentials. Sign up now to start giving and recieving with Ver.
              </p>
            </div>
            <div className=" items-center">
              <a href="#" className="bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                Log In
              </a>
              <a href="#" className="ml-2 border border-green-600 hover:bg-green-100 px-3 py-2 rounded-md text-sm font-medium">
                Register
              </a>
            </div>
          </div>

         
          <div className=' flex items-center justify-center'>
            <img className='rounded-xl' src={Donate} alt="" />
          </div>
          
        </div>
        <div className='flex items-center justify-center text-center pt-8 mb-4'>
          <p className='text-xl text-green-600'>
          We collaborate with organizations worldwide for positive change
          </p>
        </div>
        
        
       <div className='grid grid-cols-3 md:grid-cols-6 gap-3  justify-between items-center'>
        <div className='flex justify-center'><img src={MercyCorps} alt="" className='border py-1.5 px-3 rounded-xl h-10 ' /></div>
        <div className='flex justify-center'><img src={Unicef} alt="" className='border p-1.5 rounded-xl h-10' /></div>
        <div className='flex justify-center'><img src={Intersos} alt="" className='border py-1.5 px-0.5 rounded-xl h-10' /></div>
        <div className='flex justify-center '><img src={Inso} alt="" className='border p-2 rounded-xl h-10' /></div>
        <div className='flex justify-center'><img src={Nrc} alt="" className='border  p-2 rounded-xl h-10' /></div>
        <div className='flex justify-center'><img src={Unfpa} alt="" className='border py-1.5 px-3 rounded-xl h-10' /></div>
        
        
        
        
        
        
       </div>
      </div>
    </>
  )
}

export default HeroSection