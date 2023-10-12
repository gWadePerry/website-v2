import React from "react";
import GetPaintings from "@/components/api/GetPaintings";
import Gallery from "@/components/Gallery";

const Maine = async () => {
  const paintings = await GetPaintings("/landscape");

  return Gallery(paintings, "/landscape");
};

export default Maine;
