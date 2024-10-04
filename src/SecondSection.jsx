import React from 'react'
import { BiSolidDonateHeart } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { FaPeopleArrows } from "react-icons/fa";

const sectionItems = [
  {
    id: 1,
    icon: <BiSolidDonateHeart />,
    title: 'Givers',
    text: 'Receivers can easily browse through a wide range of items listed by givers in their community. Whether they need clothing, household items, or other essentials, Ver allows them to search and find exactly what they re looking for. Receivers can view detailed descriptions and images of available items, and with just a few clicks, they can request.'
  },
  {
    id: 2,
    icon: <GiReceiveMoney />,
    title: 'Recievers',
    text: 'Receivers can browse through a wide range of available items that meet their needs. With an intuitive search and filter system, they can easily find what they are looking for-from essential everyday items to special finds. Once an item is identified, receivers can request it with a single click, knowing that their request will be matched with a suitable giver nearby.'
  },
  {
    id: 3,
    icon: <FaPeopleArrows />,
    title: 'Matching',
    text: 'Once a match is made, the exchange process begins. Ver offers flexibility in how items are transferred, allowing givers and receivers to choose the method that works best for them. They can arrange for a convenient pickup location or opt for delivery, depending on their preferences and circumstances. Ver provides guidance and support.'
  },
]

const SecondSection = () => {
  return (
    <>
    <section className='bg-emerald-700 text-white py-16' id='How-it-works'>
    <div className='container '>
        <div className='w-[400px] max-w-full mb-6'>
          <h1 className='text-2xl mb-4 font-semibold'>How Ver Works</h1>
          <p>Discover how Ver connects givers and recievers in a seamless and impactful way. Through simple steps.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
          sectionItems.map((data) => (
            <div key={data.id} className=' text-sm border border-emerald-300 px-5 py-5 rounded-lg bg-gradient-to-t from-emerald-900 to-emerald-500'>
              <div className='text-3xl border inline-block rounded-full p-3 border-emerald-300 mb-3'>{data.icon}</div>
              <h2 className='text-xl pb-3'>{data.title}</h2>
              <p className=''>{data.text}</p>
            </div>
            
          ))
          }
        </div>
      </div>
    </section>
      
    </>
  )
}

export default SecondSection