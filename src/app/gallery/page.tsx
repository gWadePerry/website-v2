import React from "react";
import GetPaintings from "@/components/api/GetPaintings";
import Gallery from "@/components/Gallery";

const MainGallery = async () => {
  const paintings = await GetPaintings("Show");

  return Gallery(paintings, "");
};

export default MainGallery;
