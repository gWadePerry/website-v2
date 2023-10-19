import React from "react";
import GetPaintings from "@/components/api/GetPaintings";
import Gallery from "@/components/Gallery";

const Commissioned = async () => {
  const allPaintings = await GetPaintings();
  const paintings = allPaintings.filter((painting) => {
    return painting.tags.includes("/commissioned");
  });

  return (
    <>
      <div className="text-lg font-thin text-center">
        <p>An assortment of commissioned pieces.</p>
        <p>2020 - 2023</p>
      </div>
      {Gallery(paintings, "/commissioned")}
    </>
  );
};

export default Commissioned;
