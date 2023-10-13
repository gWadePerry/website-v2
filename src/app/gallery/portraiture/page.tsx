import React from "react";
import GetPaintings from "@/components/api/GetPaintings";
import Gallery from "@/components/Gallery";

const Portraiture = async () => {
  const paintings = await GetPaintings("/portraiture");

  return (
    <>
      <div className="text-lg font-thin text-center">
        <p>Portraiture of family, friends and pets. And still life.</p>
        <p>2017 - 2023</p>
        <p>Loading...</p>
      </div>
      {Gallery(paintings, "/portraiture")}
    </>
  );
};

export default Portraiture;
