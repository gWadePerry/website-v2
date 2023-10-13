import React from "react";
import GetPaintings from "./api/GetPaintings";

const GetOnePainting = async (tag: string) => {
  const normalizedData = GetPaintings(tag);
  const painting = await normalizedData.then((paintings) => {
    const randomIndex = Math.floor(Math.random() * paintings.length);
    return paintings[randomIndex];
  });

  return (
    <>
      <div className="image-detail">
        {painting.photoUrl && (
          <div className="content">
            <div className="image-container">
              <img src={painting.photoUrl} alt={""} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GetOnePainting;
