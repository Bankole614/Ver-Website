import React, { useState } from 'react';

const navItems = [

  {
    id: 1,
    name: 'Home',
    path: '/#home'
  },
  {
    id: 2,
    name: 'About Us',
    path: '/#About'
  },
  {
    id: 3,
    name: 'Services',
    path: '/#Services'
  },
  {
    id: 4,
    name: 'How it Works',
    path: '/#How-it-works'
  },
  {
    id: 5,
    name: 'Contact Us',
    path: '/#Contact'
  },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=''>
            {/* Navbar Header */}
            <nav className="bg-green-50/60 fixed backdrop-blur top-0 z-50 shadow-lg  w-full py-3 px-1 sm:px-3 flex justify-between items-center">
              <div className='container flex justify-between items-center'>
              <a href="#" className="text-green-600 font-bold text-xl">VER</a>
                <button onClick={toggleMenu} className="text-green-600 md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                <ul className="hidden mx-auto md:flex">
                  {
                    navItems.map((item) => (
                      <li key={item.id}>
                        <a className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium" href={item.path}>{item.name}</a>
                      </li>
                    ))
                  }
                </ul>
                
                <div className="hidden md:flex items-center">
                  <a href="#" className="bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium">Log In</a>
                  <a href="#" className="ml-2 border border-green-600 text-gray-700 hover:bg-green-100 px-3 py-2 rounded-md text-sm font-medium">Register</a>
                </div>
              </div>
                
            </nav>

            <div
                className={`fixed inset-y-0 left-0 z-50 w-56 bg-white/65 backdrop-blur transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300  md:hidden`}>
                <div className="flex justify-end items-center p-3">
                    <button onClick={() => toggleMenu()} className="text-green-600">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </button>
                </div>

                <ul className="p-4 space-y-4">
                  {
                    navItems.map((item) => (
                      <li key={item.id}>
                        <a className="block text-gray-700 hover:text-green-500 text-lg font-medium" href={item.path} onClick={() => toggleMenu()}>{item.name}</a>
                      </li>
                    ))
                  }
                </ul>
                <div className="p-4 flex gap-2 flex-col">
                  <button className=" bg-green-500 text-white px-3 py-2 rounded-md text-lg font-medium">
                  <a href="#" >
                    Log In
                  </a>
                  </button>
                  <button className=" border border-green-500 text-gray-700  hover:bg-green-100 px-3 py-2 rounded-md text-lg font-medium">
                  <a href="#" >
                    Register
                  </a>
                  </button>
                </div>
                
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div onClick={toggleMenu} className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"></div>
            )}
        </div>
    );
};

export default Navbar;