import React, { useEffect, useState } from "react";
import PhoneCard from "../components/PhoneCard/PhoneCard";
import { getFavorites, removeFavorites } from "../components/utils";
import EmplyPage from "../components/utils/EmplyPage";

const Favorites = () => {
  const [displayCards, setDisplayCards] = useState([]);
  useEffect(() => {
    const data = getFavorites();
    // console.log(data);
    setDisplayCards(data);
  }, []);
  const handleRemove = (id) => {
    removeFavorites(id);
    setDisplayCards(getFavorites());
  };
  if (displayCards.length < 1) return <EmplyPage></EmplyPage>;
  return (
    <div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayCards.map((phone) => (
            <PhoneCard
              handleRemove={handleRemove}
              deletable={true}
              key={phone.id}
              phone={phone}
            ></PhoneCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
