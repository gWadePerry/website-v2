import React from "react";
import Image from "next/image";
import Link from "next/link";
import Painting from "./Painting";

const Gallery = async (paintings: Painting[], filter: string) => {
  return (
    <div className="p-4 pt-10 px-20">
      {/* <h1 className="text-4xl mb-4 font-light">Gallery</h1> */}
      <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 ">
        {paintings.map((painting, index) => (
          <Link
            href={{
              pathname: "/painting",
              query: { index: index, filter: filter },
            }}
            key={painting.id}
            className="relative group overflow-hidden cursor-pointer"
          >
            {painting.photoUrl && (
              <Image
                src={painting.photoUrl}
                alt={painting.title}
                width={200}
                height={200}
                quality={20}
                className="w-full h-64 object-scale-down"
              />
            )}
            <div className="absolute inset-0 bg-white bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center">
              <h2 className="font-light">{painting.title}</h2>
              <p className="font-light">{painting.scale}</p>
              <p className="font-light">{painting.medium}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
