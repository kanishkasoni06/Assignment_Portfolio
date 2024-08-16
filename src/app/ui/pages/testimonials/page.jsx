import React from 'react'
import Carousel from '../../components/carousel/page'

const Testimonials = () => {
  return (
    <div className='p-12 pb-4 container mx-auto pt-40 text-center'id='testimonials' style={{height:'90vh'}}>
    <div className='w-2/3 items-center mx-auto'>
     <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
        <p className="text-gray-600 mb-8 w-2/3 mx-auto items-center">
          Lorem ipsum dolor sit amet consectetur. Tristique amet nisl massa non lectus mattis. Aliquet donec morbi convallis posuere.
        </p>
        </div>
        <Carousel/>
    </div>
  )
}

export default Testimonials