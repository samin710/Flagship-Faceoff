import React, { useEffect, useState } from "react";
import PhoneCard from "../PhoneCard/PhoneCard";
import Button from "../ui/Button";

const PhonesContainer = ({ phones }) => {
  //   console.log(phones);
  const [displayCards, setDisplayCards] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (showAll) {
      setDisplayCards(phones);
    } else {
      setDisplayCards(phones.slice(0, 6));
    }
  }, [phones, showAll]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayCards.map((phone) => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>

      <Button
        text={showAll ? "Show Less" : "Show More"}
        onClick={() => {
          setShowAll((prv) => !prv);
          if (showAll) window.scrollTo(0, 100);
        }}
      ></Button>
    </div>
  );
};

export default PhonesContainer;
