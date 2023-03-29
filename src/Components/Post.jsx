import React from "react";

const Post = ({ post }) => {
  const { title, body } = post;
  return (
    <div className=" bg-slate-300 m-4 p-4 rounded-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;
