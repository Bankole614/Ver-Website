import React from 'react'
import Logo from '../assets/logo.jpg'

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
    path: '/#HowitWorks'
  },
  {
    id: 5,
    name: 'Contact Us',
    path: '/#Contact'
  },
]

const Navbar = () => {
  return (
    <div className='container flex'>
      <div>
        <img className='w-14' src={Logo} alt="" />
      </div>
      <div className='flex justify-center mx-auto'>
        <ul className='flex '>
          {
            navItems.map((item) => (
              <li key={item.id}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar