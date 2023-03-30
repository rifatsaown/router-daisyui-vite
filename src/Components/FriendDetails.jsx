import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const { name, email, website, address, phone } = useLoaderData();
  return (
    <div>
      <div className="hero min-h-[85vh] bg-slate-300  rounded-3xl mt-2">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="font-semibold py-2">Email : {email}</p>
            <p className="font-semibold py-2">Phone : {phone.split(" ")[0]}</p>
            <div className="mt-4 mb-7 bg-slate-400 py-3 rounded-3xl ">
              <h2 className="text-xl font-bold">Address</h2>
              <p>Street : {address.street}</p>
              <p>Suit : {address.suite}</p>
              <p>City : {address.city}</p>
              <p>Zip Code : {address.zipcode.split("-")[0]}</p>
            </div>
            <a
              href={`http://${website}`}
              target="_blank"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
