import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const userData = [
  {
    
    name: 'Victor Moses',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, dolorum optio enim, nobis nesciunt ullam fugiat error cupiditate illum impedit doloremque! Sit exercitationem, voluptate quae fuga ex nisi quam quia, a consequuntur porro optio similique non tenetur rem deleniti est consectetur veritatis nulla. Consequatur vel adipisci eaque itaque quas.',
    img: 'https://randomuser.me/api/portraits/men/17.jpg',
    location: 'Lagos, Nigeria',
    Role: 'Reciever'
  },
  {
    
    name: 'Fatima Adamu',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, dolorum optio enim, nobis nesciunt ullam fugiat error cupiditate illum impedit doloremque! Sit exercitationem, voluptate quae fuga ex nisi quam quia, a consequuntur porro optio similique non tenetur rem deleniti est consectetur veritatis nulla. Consequatur vel adipisci eaque itaque quas.',
    img: 'https://randomuser.me/api/portraits/women/9.jpg',
    location: 'Kano, Nigeria',
    Role: 'Reciever'
  },
  {
    
    name: 'Emeka Okoye',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, dolorum optio enim, nobis nesciunt ullam fugiat error cupiditate illum impedit doloremque! Sit exercitationem, voluptate quae fuga ex nisi quam quia, a consequuntur porro optio similique non tenetur rem deleniti est consectetur veritatis nulla. Consequatur vel adipisci eaque itaque quas.',
    img: 'https://randomuser.me/api/portraits/men/2.jpg',
    location: 'Imo, Nigeria',
    Role: 'Reciever'
  },
  {
    
    name: 'Bamigboye Abiodun',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, dolorum optio enim, nobis nesciunt ullam fugiat error cupiditate illum impedit doloremque! Sit exercitationem, voluptate quae fuga ex nisi quam quia, a consequuntur porro optio similique non tenetur rem deleniti est consectetur veritatis nulla. Consequatur vel adipisci eaque itaque quas.',
    img: 'https://randomuser.me/api/portraits/men/5.jpg',
    location: 'Ondo, Nigeria',
    Role: 'Giver'
  },
  {
    
    name: 'Mathew Samson',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, dolorum optio enim, nobis nesciunt ullam fugiat error cupiditate illum impedit doloremque! Sit exercitationem, voluptate quae fuga ex nisi quam quia, a consequuntur porro optio similique non tenetur rem deleniti est consectetur veritatis nulla. Consequatur vel adipisci eaque itaque quas.',
    img: 'https://randomuser.me/api/portraits/men/7.jpg',
    location: 'Benue, Nigeria',
    Role: 'Giver'
  },
  {
    
    name: 'Kadiri Hassan',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, dolorum optio enim, nobis nesciunt ullam fugiat error cupiditate illum impedit doloremque! Sit exercitationem, voluptate quae fuga ex nisi quam quia, a consequuntur porro optio similique non tenetur rem deleniti est consectetur veritatis nulla. Consequatur vel adipisci eaque itaque quas.',
    img: 'https://randomuser.me/api/portraits/women/7.jpg',
    location: 'Edo, Nigeria',
    Role: 'Reciever'
  },
  
]

const FifthSection = () => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>
      <div className='bg-emerald-700 text-white py-16'>
        <div className='container'>
          <p className='font-bold text-2xl text-center'>What Our Users Say</p>
          <div>
          <Slider {...settings}> {
            userData.map((data, index) => (
              <div className='my-6'>
                <div key={index} className='flex flex-col gap-4  p-5 mx-4 rounded-xl border border-emerald-300 bg-gradient-to-t from-emerald-900 to-emerald-500 relative'>
                <div className='mb-4'>
                  <img src={data.img} alt="" className='rounded-full w-12 h-12 border-2' />
                </div>
                <div className='flex flex-col items-center gap-4'>
                  <div className='space-y-3'>
                  <p className='text-xs font-light'>{data.text}</p>
                  <div className='flex justify-between items-center'>
                    <div>
                      <p className='text-xs font-semibold '>Name: {data.name}</p>
                      <p className='text-xs font-light'>Location: {data.location}</p>
                    </div>
                    <div>
                    <p className='text-xs  '>Role: {data.Role}</p>
                    </div>
                    
                  </div>
                  
                  </div>
                </div>
                <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                  ,,
                </p>
              </div>
              </div>
            ))}
          </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default FifthSection