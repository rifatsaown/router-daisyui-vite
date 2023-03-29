import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const data = useLoaderData();
    console.log(data);
  return (
    <div>
      <h1>Friend Details</h1>
    </div>
  );
};

export default FriendDetails;
