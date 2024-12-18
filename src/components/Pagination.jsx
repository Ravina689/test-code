import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/postSlice';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, allPosts } = useSelector((state) => state.posts);
  const postsPerPage = 6;
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  const handlePageClick = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="flex justify-center space-x-2 mt-4 items-center my-10">
      
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 my-10 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        <FaAngleDoubleLeft />
      </button>

      
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-3 py-1 rounded ${
            currentPage === page
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {page}
        </button>
      ))}

    
      {totalPages > 3 && (
        <span className="px-3 py-1">...</span>
      )}

    
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default Pagination;
