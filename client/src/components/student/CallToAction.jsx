import React from 'react';
import { assets } from '../../assets/assets';

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-10 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold text-center'>
        Learn anything, anytime, anywhere
      </h1>
      <p className='text-gray-500 sm:text-sm max-w-2xl text-center mx-auto'>
        Unlock your potential with on-demand access to expert-led courses—whether you're commuting,
        relaxing at home, or working remotely. Learn at your own pace, on your own schedule, and from
        any device. No boundaries, just learning that fits your lifestyle.
      </p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        <button className='px-10 py-3 rounded-md text-white bg-blue-600'>Get Started</button>
        <button className='flex items-center gap-2'>
          Learn More <img src={assets.arrow_icon} alt='arrow-icon' />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;

