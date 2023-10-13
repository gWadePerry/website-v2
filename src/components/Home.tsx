import React from "react";
import GetPaintings from "./api/GetPaintings";

const Home = async () => {
  const normalizedData = GetPaintings("Home");
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
