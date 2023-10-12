"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

const ImageDetailPage = () => {
  const info = useSearchParams();

  const id = info.get("id");
  const title = info.get("title");
  const scale = info.get("scale");
  const medium = info.get("medium");
  const year = info.get("year");
  const photoUrl = info.get("photoUrl");

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="flex items-center justify-center h-[90vh] font-thin">
      {/* {<Link href="/gallery">&lt;</Link>} */}
      <button onClick={handleGoBack}>&lt;</button>
      {photoUrl && (
        <div className="flex items-center justify-center p-5">
          <Image
            className="object-contain max-w-full max-h-[80vh]"
            src={photoUrl}
            width={900}
            height={900}
            alt={""}
          />
          <div className="ml-20 text-left">
            <p>{title}</p>
            <p>{scale}</p>
            <p>{medium}</p>
            <p>{year}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDetailPage;
