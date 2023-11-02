import React from "react";
import Link from "next/link";
import Painting from "./Painting";

const PaintingPage = (paintings: Painting[], index: number, filter: string) => {
  const length = paintings.length;
  const painting = paintings[index];
  return (
    <div className="z-0 justify-center md:flex h-[calc(100vh-65px)] p-4 font-light">
      {/* Left: Back Link */}
      <Link
        href={{
          pathname: "/gallery",
          query: {
            filter: filter,
          },
        }}
        className=" flex flex-col justify-center px-4 text-lg whitespace-nowrap hover:text-blue-500"
      >
        &lt; Back
      </Link>
      {/* Middle: Painting Image */}
      <div className="flex md:py-10 items-center justify-center relative">
        <img
          src={painting.photoUrl}
          alt={painting.title}
          className="object-contain max-h-full"
        />
      </div>
      {/* Right: Details and Navigation */}
      <div className="flex flex-col pb-10 md:p-10 justify-around">
        <div className="text-center">
          <p>{painting.title}</p>
          <p>{painting.scale}</p>
          <p>{painting.medium}</p>
          <p>{painting.year}</p>
        </div>
        <div className="flex justify-around">
          {index > 0 && (
            <Link
              className=" flex hover:text-blue-500"
              href={{
                pathname: "/painting",
                query: {
                  index: index - 1,
                  filter: filter,
                },
              }}
            >
              &lt;
              <div className="pl-2 opacity-0 hover:opacity-100">previous</div>
            </Link>
          )}
          {index < length - 1 && (
            <Link
              className="flex hover:text-blue-500"
              href={{
                pathname: "/painting",
                query: {
                  index: index + 1,
                  filter: filter,
                },
              }}
            >
              <div className="pr-2 opacity-0 hover:opacity-100">next</div>&gt;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaintingPage;
