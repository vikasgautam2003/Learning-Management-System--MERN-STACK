import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data || '');

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      navigate(`/course-list/${encodeURIComponent(input.trim())}`);
    }
  };

  return (
    <div className='w-full md:w-[600px] lg:w-[800px]'>
      <form
        onSubmit={onSearchHandler}
        className='w-full h-12 md:h-14 flex items-center bg-white border border-gray-500/20 rounded overflow-hidden'
      >
        <img
          src={assets.search_icon}
          alt='Search_icon'
          className='w-6 h-6 mx-3'
        />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type='text'
          placeholder='Search for courses, instructors, or topics...'
          className='w-full h-full outline-none text-gray-500/80 text-sm md:text-base'
        />
        <button
          type='submit'
          className='bg-blue-600 text-white px-6 md:px-10 h-full'
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
