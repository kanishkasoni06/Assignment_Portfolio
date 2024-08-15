import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='p-12 m-12'>
    <div className="container text-center mx-auto ">
    <div>
    <p className='font-black text-5xl mb-5'>Let&apos;s Design Together</p>
    <p className='mx-auto w-1/2 my-10 text-xl'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
    </div>
    <div className="flex items-center mt-1 justify-center mx-auto">
            <input type="email" class="h-10 p-8 w-1/2  text-m font-medium text-gray-700 border border-grey-500 focus:outline-none rounded-md shadow-sm" placeholder="Enter Your Email"/>
            <button className="h-10 py-4 pb-12 px-10 text-2xl bg-orange-500 border  border-grey-500 rounded-md shadow-sm text-blue-50 hover:text-white hover:bg-orange-400 hover:border-gray-400 focus:outline-none ml-10">Contact Me</button>
        </div>
    </div>
    </div>
  )
}

export default Contact