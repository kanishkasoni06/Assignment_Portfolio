import Image from 'next/image'
import React from 'react'
import Slider from '@mui/material/Slider';

const About = () => {
  return (
    <div id='about' style={{height:"100vh"}} className="flex justify-between items-center max-w-screen-xl mx-auto">
    <div className="flex-1 justify-center space-x-4 my-10">
        <Image src='/assests/about_assignment.png' alt='profileImage' width={450} height={450} className='rounded-full bg-white object-contain'/>
    </div>
        <div className='flex-1 justify-center items-center space-x-4'>
        <h2 className='text-5xl font-extrabold pl-4'>About Me</h2>
        <p className=' text-xl m-8'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        <div>
<div>
          <h2 className='text-l font-extrabold'>UX</h2>
          <Slider
      defaultValue={75}
      aria-label="Default"
      color='warning'
      disabled
      valueLabelDisplay="auto"
      sx={{
        '&.Mui-disabled': {
          color: '#FD6F00', // Change the color of the disabled slider
        },
        '& .MuiSlider-thumb.Mui-disabled': {
          color: '#FD6F00', // Change the color of the thumb
        },
        '& .MuiSlider-track.Mui-disabled': {
          color: '#FD6F00', // Change the color of the track
        },
        '& .MuiSlider-rail.Mui-disabled': {
          color: '#FD6F00', // Change the color of the rail
        },
      }}
    />
    </div>
    <div>
          <h2 className='text-l font-extrabold'>Website Design</h2>
          <Slider
      defaultValue={90}
      aria-label="Default"
      color='warning'
      disabled
      valueLabelDisplay="auto"
      sx={{
        '&.Mui-disabled': {
          color: '#FD6F00', // Change the color of the disabled slider
        },
        '& .MuiSlider-thumb.Mui-disabled': {
          color: '#FD6F00', // Change the color of the thumb
        },
        '& .MuiSlider-track.Mui-disabled': {
          color: '#FD6F00', // Change the color of the track
        },
        '& .MuiSlider-rail.Mui-disabled': {
          color: '#FD6F00', // Change the color of the rail
        },
      }}
    />
    </div>
    <div>
          <h2 className='text-l font-extrabold'>App Design</h2>
          <Slider
      defaultValue={60}
      aria-label="Default"
      color='warning'
      disabled
      valueLabelDisplay="auto"
      sx={{
        '&.Mui-disabled': {
          color: '#FD6F00', // Change the color of the disabled slider
        },
        '& .MuiSlider-thumb.Mui-disabled': {
          color: '#FD6F00', // Change the color of the thumb
        },
        '& .MuiSlider-track.Mui-disabled': {
          color: '#FD6F00', // Change the color of the track
        },
        '& .MuiSlider-rail.Mui-disabled': {
          color: '#FD6F00', // Change the color of the rail
        },
      }}
    />
    </div>
    <div>
          <h2 className='text-l font-extrabold'>Graphic Design</h2>
          <Slider
      defaultValue={68}
      aria-label="Default"
      color='warning'
      disabled
      valueLabelDisplay="auto"
      sx={{
        '&.Mui-disabled': {
          color: '#FD6F00', // Change the color of the disabled slider
        },
        '& .MuiSlider-thumb.Mui-disabled': {
          color: '#FD6F00', // Change the color of the thumb
        },
        '& .MuiSlider-track.Mui-disabled': {
          color: '#FD6F00', // Change the color of the track
        },
        '& .MuiSlider-rail.Mui-disabled': {
          color: '#FD6F00', // Change the color of the rail
        },
      }}
    />
    </div>
       </div>
        </div>
    </div>
  )
}

export default About