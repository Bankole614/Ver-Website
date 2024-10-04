import React from 'react';

const avatars = [
  { src: "https://randomuser.me/api/portraits/men/2.jpg", size: "large" },
  { src: "https://randomuser.me/api/portraits/men/3.jpg", size: "small" },
  { src: "https://randomuser.me/api/portraits/men/1.jpg", size: "medium" },
  { src: "https://randomuser.me/api/portraits/women/1.jpg", size: "large" },
  { src: "https://randomuser.me/api/portraits/men/4.jpg", size: "small" },
  { src: "https://randomuser.me/api/portraits/women/2.jpg", size: "medium" },
  { src: "https://randomuser.me/api/portraits/women/3.jpg", size: "large" },
  { src: "https://randomuser.me/api/portraits/men/5.jpg", size: "small" },
  { src: "https://randomuser.me/api/portraits/women/4.jpg", size: "medium" },
  { src: "https://randomuser.me/api/portraits/women/5.jpg", size: "large" },
  { src: "https://randomuser.me/api/portraits/women/6.jpg", size: "small" },
  { src: "https://randomuser.me/api/portraits/men/6.jpg", size: "medium" },
  { src: "https://randomuser.me/api/portraits/men/7.jpg", size: "large" },
  { src: "https://randomuser.me/api/portraits/women/7.jpg", size: "small" },
  { src: "https://randomuser.me/api/portraits/men/8.jpg", size: "medium" },
  { src: "https://randomuser.me/api/portraits/men/9.jpg", size: "large" },
  { src: "https://randomuser.me/api/portraits/women/8.jpg", size: "small" },
  { src: "https://randomuser.me/api/portraits/women/9.jpg", size: "medium" },
];


const SeventhSection = () => {
  return (
    <div className='bg-green-600 py-16'>
      <div className='container'>
        <div className='mb-5'>
          <h1 className='text-2xl font-bold text-white mb-5'>Ready to Make a Difference?</h1>
          <p className='text-white text-sm w-[400px] max-w-full mb-5'>Encourage users to take the next step in joining Ver, whether it's signing up or listing an item, or browsing available items.</p>
          <button className='text-white border-2 border-white px-3 py-1 rounded-md text-xs'>Register Now</button>
        </div>

        <div>
        <div className="grid items-center justify-between sm:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-3  ">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className={` rounded-full overflow-hidden bg-white ${
              avatar.size === 'large' ? 'w-32 h-32' :
              avatar.size === 'medium' ? 'w-24 h-24' :
              'w-16 h-16'
            }`}
          >
            <img src={avatar.src} alt="avatar" className="w-full h-full object-cover" />
          </div>
        ))}
        </div>
      </div>
      </div>
      
      
      
    </div>
    
  );
};

export default SeventhSection;







