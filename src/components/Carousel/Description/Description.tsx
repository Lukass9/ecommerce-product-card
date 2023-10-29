import React from "react";
import "./description.scss";

const data = {
  name: "sneakers company",
  tittle: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
};

export const Description = () => {
  return (
    <div className='descriptioin-wrapp'>
      <h5 className='name'>{data.name}</h5>
      <h1 className='title'>{data.tittle}</h1>
      <p className='description'>{data.description}</p>
    </div>
  );
};
