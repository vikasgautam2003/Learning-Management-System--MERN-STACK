import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import SearchBar from '../../components/student/SearchBar';
import CourseCard from '../../components/student/CourseCard';
import { useParams } from 'react-router-dom';
import { assets } from '../../assets/assets';
import Footer from '../../components/student/Footer';

const CoursesList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = [...allCourses];

      if (input) {
        const lowerInput = input.toLowerCase();
        const matchedCourses = tempCourses.filter(course =>
          course.courseTitle.toLowerCase().includes(lowerInput)
        );
        setFilteredCourses(matchedCourses);
      } else {
        setFilteredCourses(tempCourses);
      }
    }
  }, [allCourses, input]);

  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
          <div>
            <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
            <p className='text-gray-500'>
              <span
                className='text-blue-600 cursor-pointer'
                onClick={() => navigate('/')}
              >
                Home
              </span>{' '}
              / <span>Course List</span>
            </p>
          </div>

          <SearchBar data={input} className="w-full md:w-96 lg:w-[700px]" />
        </div>

        {input && (
          <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 mb-8 text-gray-800'>
            <p>{input}</p>
            <img
              src={assets.cross_icon}
              alt='Clear'
              className='cursor-pointer w-5 h-5'
              onClick={() => navigate('/course-list')}
            />
          </div>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))
          ) : (
            <p className='text-gray-500'>No courses found for "{input}".</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CoursesList;
