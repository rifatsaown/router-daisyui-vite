import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, email, phone,username, id } = friend;
  return (
    <div className="p-4 bg-slate-300 rounded-lg">
      <h2 className="text-xl">{name}</h2>
      <p>Email: {email}</p>
      <p>Username : {username}</p>
      <p>Phone: {phone}</p>
      <div className="text-center">
        <Link to={`/friend/${id}`} className="btn btn-wide mt-4 ">
          Know More
        </Link>
      </div>
    </div>
  );
};

export default Friend;
