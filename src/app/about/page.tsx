import React from "react";

const About = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto font-thin">
      <h1 className="text-2xl font-bold mb-4">Wade Perry</h1>
      <p className="mb-2">B. 2001 Baltimore, MD</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Education:</h2>
      <ul className="pl-4 mb-4 list-disc">
        <li>2019-2023, B.S. Computer Science, Tufts University, Medford, MA</li>
        <li>2019-2023, B.A. Philosophy, Tufts University, Medford, MA</li>
        <li>2014-2019, Gilman School, Baltimore, MD</li>
        <li>2012-2016, Zoll School of Fine Art, Baltimore, MD</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Selected Exhibitions:</h2>
      <ul className="pl-4 mb-4 list-disc">
        <li>2023, Island Art Show, Penobscot Bay, ME</li>
        <li>2022, GSHI Art Week Showcase, Great Spruce Head Island, ME</li>
        <li>2022, Wade Perry, (solo exhibition), Concord, MA</li>
        <li>2019, (group exhibition) Gilman School, Baltimore, MD</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Awards/Residencies:</h2>
      <ul className="pl-4 mb-4 list-disc">
        <li>2022, GSHI Art Week, Great Spruce Head Island, ME</li>
        <li>
          2019, HAROLD HOLMES WRENN ART PRIZE, Gilman School, Baltimore, MD
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Press:</h2>
      <p className="mb-4">
        Maine Arts Journal,
        <a
          href="https://maineartsjournal.com/anina-porter-fuller-great-spruce-head-island-art-week-1993-present/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read More
        </a>
        , Sept 2022
      </p>
    </div>
  );
};

export default About;
