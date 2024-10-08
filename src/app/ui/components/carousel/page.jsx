"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio vestibulum ut.",
      name: "Person 1",
      role: "CEO",
      avatar: "/assests/profile_assigment.png"
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio vestibulum ut.",
      name: "Person 2",
      role: "CEO",
      avatar: "/assests/profile_assigment.png"
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio vestibulum ut.",
      name: "Person 3",
      role: "CEO",
      avatar: "/assests/profile_assigment.png"
    },
    {
        quote: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio vestibulum ut.",
        name: "Person 4",
        role: "CEO",
        avatar: "/assests/profile_assigment.png"
      },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-rotate functionality without dependency warning
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3000ms

    // Clear interval on component unmount
    return () => {
      clearInterval(autoSlide);
    };
  }, [testimonials.length]); // Include testimonials.length to ensure it updates correctly

  return (
    <section className="py-14">
      <div className="container mx-auto text-center">
        <div className="relative overflow-hidden bg-gray-100 p-10 w-2/3 mx-auto rounded-medium">
          <div className="flex transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full flex-shrink-0 px-6">
                <div className="flex items-center justify-center space-x-4">
                  <Image src={testimonial.avatar} alt={testimonial.name} height={100} width={100} className="h-28 rounded-full" />
                  <div className="text-left">
                    <p className="text-lg text-grey-300 mb-2">
                    <span className="text-xl font-bold text-orange-500 mb-2">“</span>{testimonial.quote}
                    <span className="text-xl font-bold text-orange-500 mb-2">”</span></p>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-10 h-3 rounded-full ${index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;

