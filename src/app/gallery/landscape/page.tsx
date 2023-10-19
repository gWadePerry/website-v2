import React from "react";
import GetPaintings from "@/components/api/GetPaintings";
import Gallery from "@/components/Gallery";

const Landscape = async () => {
  const allPaintings = await GetPaintings();
  const paintings = allPaintings.filter((painting) => {
    return painting.tags.includes("/landscape");
  });

  return (
    <>
      <div className="text-lg font-thin text-center">
        <p>Landscapes from Cape Cod, the American West, and elsewhere.</p>
        <p>2018 - 2023</p>
      </div>
      {Gallery(paintings, "/landscape")}
    </>
  );
};

export default Landscape;
