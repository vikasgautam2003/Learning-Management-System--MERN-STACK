import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { AppContext } from '../../context/AppContext';

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>
        Discover our top-rated courses and instructors from various companies. From coding and design to business and marketing, we have something for everyone.
      </p>


      <div className='grid gap-4 mt-10 md:grid-cols-4 px-4 md:px-0 md:my-16  my-10 lg:grid-cols-4 md'>
        {allCourses?.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>


      <div className='mt-10'>
        <Link
          to='/course-list'
          onClick={() => window.scrollTo(0, 0)}
          className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded hover:bg-gray-100 transition'
        >
          Show all courses
        </Link>
      </div>
    </div>
  );
};

export default CourseSection;
