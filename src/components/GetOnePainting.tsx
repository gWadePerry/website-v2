import React from "react";
import GetPaintings from "./api/GetPaintings";
import Image from "next/image";

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
              <Image
                className="w-full h-auto object-scale-down"
                src={painting.photoUrl}
                alt={""}
                width={800}
                height={800}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GetOnePainting;
