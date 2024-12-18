import React from 'react';

const Card = ({ post, onRemove }) => {
  return (
   <div className="border p-4 relative shadow-md rounded-md bg-white">
      
      <button
        className="absolute top-2 right-2 text-red-600 font-bold"
        onClick={() => onRemove(post.id)}
        aria-label="Remove Post"
      >
        X
      </button>

   
      <h3 className="text-lg font-semibold mb-2 leading-tight truncate" style={{ maxWidth: '100%' }}>{post.title}</h3>
      <p className="text-gray-700 leading-tight truncate" style={{ maxWidth: '75%' }}>{post.body}</p>
      <p className="text-gray-400 text-sm" >Mon 21 Dec 2020 14:57 GMT</p>
      <img className='h-[75%] w-auto' src="https://t3.ftcdn.net/jpg/11/03/15/28/360_F_1103152827_KvqOY6IyWN9PN6UW8PvW3PiYYEKziXHd.jpg" alt="" />
    </div>
 );
};

export default Card;
