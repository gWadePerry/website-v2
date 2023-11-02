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
      <div className="py-2"> </div>
      <div className="image-detail">
        {painting.photoUrl && (
          <div className="flex flex-col md:flex-row items-center">
            <div className="image-container">
              <img
                className="w-full h-auto object-scale-down"
                src={painting.photoUrl}
                alt={""}
                // width={800}
                // height={800}
              />
            </div>
            <div className="text-center md:text-left md:pl-16 font-light">
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
