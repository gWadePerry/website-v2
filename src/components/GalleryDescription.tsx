import React from "react";

const GalleryDescription = (filter: string) => {
  switch (filter) {
    case "/maine":
      return (
        <>
          <p>The Landscape of Maine.</p>
          <p>2019 - 2023</p>
        </>
      );
    case "/landscape":
      return (
        <>
          <p>Landscapes from Cape Cod, the American West, and elsewhere.</p>
          <p>2018 - 2023</p>
        </>
      );
    case "/commissioned":
      return (
        <>
          <p>An assortment of commissioned pieces.</p>
          <p>2020 - 2023</p>
        </>
      );
    case "/portraiture":
      return (
        <>
          <p>Portraiture of family, friends and pets. And still life.</p>
          <p>2017 - 2023</p>
        </>
      );

    default:
      return (
        <>
          <p>Selected Works</p>
          <p>2017 - 2023</p>
        </>
      );
  }
};

export default GalleryDescription;
