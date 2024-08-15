import React from 'react'

const Projects = () => {
  return (
    <div id='projects' style={{height:"100vh"}}>
        <section className="py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">My Projects</h2>
    <p className="text-gray-600 mb-8 font-medium ">
      Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus.<br/> Phasellus consequat urna tellus.
    </p>

    <div className="flex justify-center mb-10 space-x-4">
      <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">All</button>
      <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">UI/UX</button>
      <button className="px-4 py-2 rounded-lg border border-gray-300 bg-orange-500 text-white focus:outline-none focus:ring-2 focus:ring-orange-400">Web Design</button>
      <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">App Design</button>
      <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">Graphic Design</button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     <div className="rounded-lg overflow-hidden">
        <img src="/assests/Group 24.png" alt="AirCalling Landing Page Design" className=" w-full object-contain" />
        <div className="p-5">
          <h3 className="text-orange-500 font-bold mb-2 text-left">Web Design</h3>
          <p className="font-extrabold text-lg text-left">AirCalling Landing Page Design</p>
        </div>   
      </div>
      <div className="rounded-lg overflow-hidden">
        <img src="/assests/Frame 3.png" alt="Business Landing Page Design" className=" w-full object-contain" />
        <div className="p-5">
          <h3 className="text-orange-500 font-bold mb-2 text-left">Web Design</h3>
          <p className="font-extrabold text-lg text-left">Business Landing Page Design</p>
        </div>   
      </div>
      <div className="rounded-lg overflow-hidden">
        <img src="/assests/Frame 4.png" alt="Ecom Web Design" className=" w-full object-contain" />
        <div className="p-5">
          <h3 className="text-orange-500 font-bold mb-2 text-left">Web Design</h3>
          <p className="font-extrabold text-lg text-left">Ecom Web Design</p>
        </div>   
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Projects