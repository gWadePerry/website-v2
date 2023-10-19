import React from "react";
import GetPaintings from "@/components/api/GetPaintings";
import Gallery from "@/components/Gallery";

const Maine = async () => {
  const allPaintings = await GetPaintings();
  const paintings = allPaintings.filter((painting) => {
    return painting.tags.includes("/maine");
  });
  return (
    <>
      <div className="text-lg font-thin text-center">
        <p>The Landscape of Maine.</p>
        <p>2019 - 2023</p>
      </div>
      {Gallery(paintings, "/maine")}
    </>
  );
};

export default Maine;
