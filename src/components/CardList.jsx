import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCard } from "../redux/postSlice";
import Card from "./Card";

const CardList = () => {
  const dispatch = useDispatch();
  const { allPosts, currentPage } = useSelector((state) => state.posts);

  const postsPerPage = 6;
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = allPosts.slice(startIndex, startIndex + postsPerPage);

  const handleRemove = (id) => {
    dispatch(removeCard(id));
  };

  return (
    <div className="grid grid-cols-3 gap-4 pt-20 mx-10">
      {currentPosts.map((post) => (
        <div className="">
          <Card key={post.id} post={post} onRemove={handleRemove} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
