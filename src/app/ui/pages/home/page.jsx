import React from 'react'
import IconList from '../../components/iconList/page';
import Image from 'next/image';


const HomePage = () => {
  return (
    <div id='HomePage' style={{height:"100vh"}}>
    <div className="flex justify-between items-center max-w-screen-xl mx-auto">
    <div className='flex-1 py-20'>
    <div className="items-center justify-items-center items-center space-x-2  text-justify">
    <p className='text-2xl pl-2 leading-relaxed'>Hi I am</p>
    <p className='text-2xl font-bold text-orange-500 leading-loose'>Muhammad Umair</p>
    <p className='font-black text-6xl'>UI & UX</p>
    <p className='font-black text-6xl px-20'>DESIGNER</p>
    <p className='w-2/3 text-xl m-8'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
    <a
          href="#contact"
          className="bg-orange-500 text-white  py-3 px-8 rounded-md hover:bg-orange-600 transition duration-300"        
        >
          Hire Me
        </a>
        </div>
    </div>
    <div className='flex-1 items-center justify-center'>
         <div className='flex-col justify-items-center'>
         <div className="flex justify-center space-x-4 my-10">
        <Image src='/assests/profile_assigment.png' alt='profileImage' className='rounded-full bg-white object-contain'/>
        </div>
        <IconList/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default HomePage