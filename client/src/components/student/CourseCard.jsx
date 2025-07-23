import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets'; 
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { currency, calculateRating} = useContext(AppContext);

  const finalPrice = (course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2);

  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => window.scrollTo(0, 0)}
      className='border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition duration-200'
    >
     
      <img
        src={course.courseThumbnail}
        alt={course.courseName}
        className='w-full h-40 object-cover'
      />

      
      <div className='p-4 space-y-2'>
        <h3 className='text-lg font-semibold text-gray-800 text-center'>{course.courseTitle}</h3>
        <p className='text-sm text-gray-500 text-center'>Vikas Gautam</p>

      
        <div className='flex flex-col items-center space-y-2 mt-2'>
          {/* Rating */}
          <div className='flex items-center space-x-2 text-gray-600'>
            <p className='text-sm'>{calculateRating(course)}</p>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (
                <img key={i} src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt='star' className='w-4 h-4' />
              ))}
            </div>
            <p className='text-sm text-gray-500'>{course.courseRatings.length}</p>
          </div>

          
          
        </div>
        <p className='text-blue-600 text-base font-semibold'>
            {currency}{finalPrice}
          </p>
      </div>
    </Link>
  );
};

export default CourseCard;
