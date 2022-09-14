import React from "react";
const Service = ({ service }) => {
  const { _id, name, price, picture } = service;
  return (
    <div className="card lg:max-w-lg bg-neutral text-white shadow-xl">
      <figure class="px-10 pt-10">
        <img src={picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>price: {price}</p>
      </div>
    </div>
  );
};

export default Service;
