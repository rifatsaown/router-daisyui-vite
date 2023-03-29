import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "./Friend";

const Friends = () => {
  const props = useLoaderData();
  return (
    <div className="grid grid-cols-4 gap-4 mt-4 mx-4">
      {props.map((friend, index) => (
        <Friend friend={friend} key={index} />
      ))}
    </div>
  );
};

export default Friends;
