import React from "react";
import GetPaintings from "./api/GetPaintings";

const GetOnePainting = async (filter: string) => {
  const allPaintings = await GetPaintings();
  const paintings = filter
    ? allPaintings.filter((painting) => {
        return painting.tags.includes(filter);
      })
    : allPaintings;

  const randomIndex = Math.floor(Math.random() * paintings.length);
  const painting = paintings[randomIndex];

  return (
    <>
      <div className="image-detail">
        {painting.photoUrl && (
          <div className="content">
            <div className="image-container">
              <img
                className="w-full h-auto object-scale-down"
                src={painting.photoUrl}
                alt={""}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GetOnePainting;
