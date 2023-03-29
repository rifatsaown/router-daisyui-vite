import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold mt-2 bg-slate-400 py-3 px-5 rounded-3xl inline-block">
          Loaded Post: {data.length}
        </h1>
      </div>
      <div className="grid grid-cols-5">
        {data.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
