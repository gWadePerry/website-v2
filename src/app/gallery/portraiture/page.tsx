import React from "react";
import GetPaintings from "@/components/api/GetPaintings";
import Gallery from "@/components/Gallery";

const Maine = async () => {
  const paintings = await GetPaintings("/portraiture");

  return Gallery(paintings, "/portraiture");
};

export default Maine;
