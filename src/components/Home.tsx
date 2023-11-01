import React from "react";
import GetPaintings from "./api/GetPaintings";

const Home = async () => {
  const normalizedData = await GetPaintings();

  const paintings = normalizedData.filter((painting) => {
    return painting.tags.includes("home");
  });

  const randomIndex = Math.floor(Math.random() * paintings.length);
  const painting = paintings[randomIndex];

  return (
    <>
      <div className="image-detail">
        {painting.photoUrl && (
          <div className="flex flex-col sm:[content]">
            <div className="image-container">
              <img
                className="w-full h-auto object-scale-down"
                src={painting.photoUrl}
                alt={""}
                // width={800}
                // height={800}
              />
            </div>
            <div className="text-info font-light">
              <p>{painting.title}</p>
              <p>{painting.scale}</p>
              <p>{painting.medium}</p>
              <p>{painting.year}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
