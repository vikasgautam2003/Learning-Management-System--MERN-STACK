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
    <div>
      <form
  onSubmit={onSearchHandler}
  className='w-full max-w-[900px] mx-auto md:h-14 flex items-center bg-white border border-gray-500/20 rounded'
>

        <img
          src={assets.search_icon}
          alt='Search_icon'
          className='md:w-auto w-10 px-3'
        />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type='text'
          placeholder='Search for courses, instructors, or topics...'
          className='w-full h-full outline-none text-gray-500/80'
        />
        <button
          type='submit'
          className='bg-blue-600 rounded text-white md:px-10 px-10 py-3 mx-1 cursor-pointer'
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
