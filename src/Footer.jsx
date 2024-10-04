import React from 'react'
import { FaSquareXTwitter, FaSquareInstagram, FaPinterest, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className='bg-emerald-700 py-16'>
      <div className='container'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 items-center justify-between'>
          <div className='text-slate-200'>
            <h1 className='text-2xl font-bold mb-2'>Ver</h1>
            <p className='text-sm'>Built on Trust. Ver is All About Creating A trusted Community Where People Help Each Other.</p>
          </div>
          <div className='text-slate-200'>
            <h3 className='text-sm font-bold pb-4'>Quick Links</h3>
            <ul className='text-xs flex flex-col gap-2'>
              <li>Home</li>
              <li>About Us</li>
              <li>Blog Post</li>
              <li>Photo Gallery</li>
            </ul>
          </div>
          <div className='text-slate-200'>
            <h3 className='text-sm font-bold pb-4'>Get in Touch</h3>
            <ul className='text-xs flex flex-col gap-2'>
              <li>Contact Us</li>
              <li>Our Services</li>
              <li className='font-bold text-sm'>Address</li>
              <li className='w-[150px] max-w-full'>No 10, South Gate Estate, Old GRA, Maiduguri, Borno</li>
            </ul>
          </div>
          <div className='text-slate-200'>
            <h3 className='text-sm font-bold pb-4'>Legal</h3>
            <ul className='text-xs list-disc flex flex-col gap-1'>
              <li>Home</li>
              <li>About Us</li>
              <li>Blog Post</li>
              <li>Photo Gallery</li>
            </ul>
          </div>
          <div className='col-span-2 text-slate-200'>
            <h3 className='text-sm font-bold pb-4 text-slate-200'>Newsletter</h3>
            <div className='flex mb-1'>
              <input type="text" placeholder='Enter Your Email' className='border focus:outline-none border-slate-200 w-2/3 p-2 text-xs h-10' />
              <button className='bg-green-600 h-10 text-white text-sm px-3 py-2 rounded-sm'>Subscribe</button>
            </div>
            <p className='text-xs text-slate-200 mb-3'>Your email is safe with us. We don't spam</p>
            <p className='text-sm font-bold pb-2'>Follow Us</p>
            <div className='flex gap-2 text-black'>
              <FaSquareXTwitter className='text-xl bg-slate-200 rounded-full h-7 w-7 p-1' />
              <FaSquareInstagram className='text-xl bg-slate-200 rounded-full h-7 w-7 p-1' />
              <FaPinterest className='text-xl bg-slate-200 rounded-full h-7 w-7 p-1' />
              <FaYoutube className='text-xl bg-slate-200 rounded-full h-7 w-7 p-1' />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='bg-emerald-700'>
      <p className='p-4 text-sm container text-slate-200 text-center border-t border-slate-200'>© VER Website 2024. All Rights Reserved</p>
    </div>
    </div>
    
  )
}

export default Footer