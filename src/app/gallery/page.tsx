import React from "react";
import GetPaintings from "@/components/api/GetPaintings";
import Gallery from "@/components/Gallery";
export const revalidate = 3000;

const MainGallery = async () => {
  const paintings = await GetPaintings();

  return (
    <>
      <div className="text-lg font-thin text-center">
        <p>Selected Works</p>
        <p>2017 - 2023</p>
      </div>
      {Gallery(paintings, "")}
    </>
  );
};

export default MainGallery;
