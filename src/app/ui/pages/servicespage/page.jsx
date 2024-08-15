import Image from 'next/image';
import React from 'react';

const services = [
  {
    title: "UI/UX",
    description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: "/assests/Frame 2.png",
  },
  {
    title: "Web Design",
    description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: "/assests/Layer_1.png",
  },
  {
    title: "App Design",
    description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: "/assests/Group 18.png",
  },
  {
    title: "Graphic Design",
    description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: "/assests/Frame 1.png",
  },
];

const Services = () => {
  return (
    <section className="py-16" id='services'>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Services</h2>
        <p className="text-gray-600 mb-12 text-lg w-1/2 text-center mx-auto">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus
          netus in. Aliquet donec morbi convallis pretium
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg text-center transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <Image src={service.icon} alt={service.title} className=" h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
