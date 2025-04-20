import React from "react";
import { Link } from "react-router";
import { RiDeleteBin6Line } from "react-icons/ri";

const PhoneCard = ({ phone, deletable, handleRemove }) => {
  // console.log(phone);
  const { name, image, description, id } = phone || {};
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link
            to={`/phoneDetails/${id}`}
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              View more
            </span>
          </Link>
        </div>
      </div>
      {deletable && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute -top-3 -right-2 bg-black p-2 rounded-full hover:bg-gray-400 group"
        >
          <RiDeleteBin6Line
            size={20}
            className="text-white group-hover:text-black"
          />
        </div>
      )}
    </div>
  );
};

export default PhoneCard;
