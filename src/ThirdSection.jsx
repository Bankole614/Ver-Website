import React from 'react'
import { MdVerified } from "react-icons/md";
import photo from './assets/happy.png'

const items = [
  {
    id: 1,
    icon: <MdVerified />,
    text: 'Empower Communities Through Sharing',
  },
  {
    id: 2,
    icon: <MdVerified />,
    text: 'Reduce Waste, Increase value',
  },
  {
    id: 3,
    icon: <MdVerified />,
    text: 'Simple, Safe, and Free to Use',
  },
  {
    id: 4,
    icon: <MdVerified />,
    text: 'Join a Growing Network of Givers and Recievers',
  },
  {
    id: 5,
    icon: <MdVerified />,
    text: 'Support when you need it',
  },
  {
    id: 6,
    icon: <MdVerified />,
    text: 'Make a Difference-One item at a time',
  },

]

const ThirdSection = () => {
  return (
    <>
      <div className='bg-green-600 text-white py-16'>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex flex-col justify-center'>
              <h1 className='text-2xl mb-4 font-semibold'>Why Ver?</h1>
              <p className='mb-5'>
              Ver is more than just a platform; it's a movement. By connecting people who have with those who need, Ver empowers communities to support one another, reducing waste and fostering a spirit of generosity.
              When you give through Ver, you're directly impacting the lives of those around you, helping to build a stronger, more connected community.
              </p>
              <div>
              {
              items.map((data) => (
                <div className='flex items-center gap-1' key={data.id}>
                  <div className=''>{data.icon}</div>
                  <p>{data.text}</p>
                </div>
              ))
            }
            </div>
            </div>
            
            <div className='flex items-center justify-center'>
              <img className='w-2/4 max-w-full' src={photo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThirdSection