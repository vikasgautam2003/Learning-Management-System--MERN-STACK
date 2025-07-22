import React from 'react';
import { dummyTestimonial, assets } from '../../assets/assets';

const TestimonialSections = () => {
  return (
    <div className='pb-14 px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>
        Hear from our students as they share their journeys of transformation,
        success, and the impact<br /> our courses have had on their lives.
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 mt-14">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className='w-[85%] mx-auto text-sm text-left border border-gray-300 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden'
          >
            {/* Header Section */}
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-100'>
              <img
                className='h-12 w-12 rounded-full'
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                <p className='text-gray-800/80'>{testimonial.role}</p>
              </div>
            </div>

            {/* Rating, Feedback & Read More */}
            <div className='px-8 pt-6 pb-6 min-h-[220px] flex flex-col justify-between'>
              <div>
                <div className='flex gap-0.5 mb-3'>
                  {[...Array(5)].map((_, i) => (
                    <img
                      className='h-5'
                      key={i}
                      src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                      alt='star'
                    />
                  ))}
                </div>
                <p className='text-gray-600 leading-relaxed'>
                  {testimonial.feedback}
                </p>
              </div>
              <a href='#' className='text-blue-500 underline mt-4'>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSections;
