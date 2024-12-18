import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './redux/postSlice';
import CardList from './components/CardList';
import Pagination from './components/Pagination';

const App = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts()); 
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className='bg-slate-300 h-screen md:h-full'>
      <CardList />
      <Pagination />
    </div>
  );
};

export default App;
