import React from "react";
import GetPaintings from "./api/GetPaintings";
import Image from "next/image";

const GetOnePainting = async (tag: string) => {
  const allPaintings = await GetPaintings();

  const paintings = allPaintings.filter((painting) => {
    return painting.tags.includes(tag);
  });

  const randomIndex = Math.floor(Math.random() * paintings.length);
  const painting = paintings[randomIndex];

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
