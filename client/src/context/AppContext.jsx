import React, { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";

const AppContext = createContext();

const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);

  const FetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  //function to calculate of course

  const calculateRating = (course) => {
    if(course.courseRatings.length === 0){
      return 0;
    }

    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });

    return (totalRating / course.courseRatings.length).toFixed(1);
  }

  useEffect(() => {
    FetchAllCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    setAllCourses,
    calculateRating,
    isEducator,
    setIsEducator
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
