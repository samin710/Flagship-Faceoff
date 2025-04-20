import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../ui/Button";
import { IoMdCart } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
import { addFavorites } from "../utils";

const PhoneDetails = () => {
  const data = useLoaderData();
  // console.log(data);

  const { id } = useParams();
  // console.log(id);
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  // console.log(singlePhone);
  const {
    name,
    image,
    description,
    brand,
    model,
    price,
    storage,
    camera_info,
  } = singlePhone || {};

  return (
    <>
      <div className="py-12">
        <img className="w-full md:w-auto mx-auto" src={image} alt="" />
        <div className="flex justify-between pt-12">
          <h1 className="text-7xl ">{name}</h1>
          <div className="flex gap-5">
            <Button text={<IoMdCart></IoMdCart>}></Button>
            <Button
              onClick={() => addFavorites(singlePhone)}
              text={<MdBookmarkAdd></MdBookmarkAdd>}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneDetails;
