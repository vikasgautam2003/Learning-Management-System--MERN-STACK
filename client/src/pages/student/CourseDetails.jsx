import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/student/Loading';
import { assets } from '../../assets/assets'; // ✅ asset import to avoid crash

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const { allCourses, calculateRating } = useContext(AppContext);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const findCourse = allCourses.find(course => course._id === id);
      setCourseData(findCourse);
    }
  }, [allCourses, id]);

  return courseData ? (
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>
      <div className='absolute top-0 left-0 w-full h-section-height z-0 bg-gradient-to-b from-cyan-100/70'></div>

      <div className='z-10 max-w-xl text-gray-500'>
        <h1 className='text-3xl font-semibold text-gray-800 mb-4'>
          {courseData.courseTitle}
        </h1>

        <p
          className='text-gray-600 pt-4 md:text-base text-sm'
          dangerouslySetInnerHTML={{
            __html: courseData.courseDescription.slice(0, 200),
          }}
        ></p>

        {/* Ratings and Students - aligned left */}
        <div className='mt-2 text-gray-600'>
          <div className='flex items-center space-x-2'>
            <p className='text-sm'>{calculateRating(courseData)}</p>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt='star'
                  className='w-4 h-4'
                />
              ))}
            </div>
            <p className='text-sm text-blue-600'>
              ({courseData.courseRatings?.length || 0}
              {courseData.courseRatings?.length === 1 ? ' rating' : ' ratings'})
            </p>
          </div>

          {/* Aligned student count below */}
          <p className='text-sm pt-1'>
            {courseData.enrolledStudents.length}{' '}
            {courseData.enrolledStudents.length === 1 ? 'student' : 'students'}
          </p>
        </div>

        <p className='text-sm'>Course by <span className='text-blue-600 underline'>Vikas Gautam</span></p>
      </div>

      <div className='z-10'>{/* Placeholder for media/image if needed */}</div>
    </div>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
