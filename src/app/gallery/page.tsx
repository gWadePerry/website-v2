import React from "react";
import GetPaintings from "@/components/api/GetPaintings";
import Gallery from "@/components/Gallery";
import GalleryDescription from "@/components/GalleryDescription";

const GalleryHandler = async ({ searchParams }: any) => {
  const filter = searchParams.filter ?? "";

  const allPaintings = await GetPaintings();
  const paintings = allPaintings.filter((painting) => {
    return painting.tags.includes(filter);
  });

  return (
    <>
      <div className="text-lg font-thin text-center">
        {GalleryDescription(filter)}
      </div>
      {Gallery(paintings, "")}
    </>
  );
};

export default GalleryHandler;
