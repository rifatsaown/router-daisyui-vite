import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { title, body,id } = post;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/posts/${id}`);
  }
  
  return (
    <div className=" bg-slate-300 m-4 p-4 rounded-lg relative">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{body}</p>
      <div className="text-center ">
      <button onClick={handleClick} className="btn glass text-black absolute bottom-2 left-1/3">Learn More</button>
      </div>
    </div>
  );
};

export default Post;
