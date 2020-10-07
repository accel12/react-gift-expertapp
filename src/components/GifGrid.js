import React from "react";
import { useFetchGifts } from "../hooks/useFetchGifts";
import { GiftGridItems } from "./GiftGridItems";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifts(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid">
        {data.map((img) => (
          <GiftGridItems key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
