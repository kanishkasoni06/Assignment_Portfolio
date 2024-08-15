import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' style={{height:"100vh"}} className="flex justify-between items-center max-w-screen-xl mx-auto">
    <div className="flex-1 justify-center space-x-4 my-10">
        <Image src='/assests/about_assignment.png' alt='profileImage' className='rounded-full bg-white object-contain'/>
    </div>
        <div className='flex-1 justify-center items-center space-x-4'>
        <h2 className='text-5xl font-extrabold pl-4'>About Me</h2>
        <p className=' text-xl m-8'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        <div>
          <div>
          <h2 className='text-l font-bold'>UX</h2>
          <input id="disabled-range" type="range" value="75" class="w-full h-2 bg-orange-500 rounded-lg appearance-none cursor-pointer" disabled />
          </div>
          <div>
          <h2 className='text-l font-bold'>Website Design</h2>
          <input id="disabled-range" type="range" value="75" class="w-full h-2 bg-orange-500 rounded-lg appearance-none cursor-pointer" disabled />
          </div>
          <div>
          <h2 className='text-l font-bold'>App Design</h2>
          <input id="disabled-range" type="range" value="75" class="w-full h-2 bg-orange-500 rounded-lg appearance-none  cursor-pointer" disabled />
          </div>
          <div>
          <h2 className='text-l font-bold'>Graphic Design</h2>
          <input id="disabled-range" type="range" value="75" class="w-full h-2 bg-orange-500 rounded-lg appearance-none cursor-pointer" disabled />
          </div>

        </div>
        </div>
    </div>
  )
}

export default About