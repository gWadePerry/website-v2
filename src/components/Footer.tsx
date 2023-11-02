import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t border-t-slate-300 text-center font-thin">
      <p className="pt-3">Website by Wade</p>
      <p className="pt-1 pb-2">
        <Link
          className="hover:text-blue-500"
          href="https://www.instagram.com/wadeperryart/"
          target="_blank"
        >
          Instagram
        </Link>
        &nbsp;-&nbsp;
        <Link
          className="hover:text-blue-500"
          href="https://www.linkedin.com/in/wade-perry-8905811a3/"
          target="_blank"
        >
          Linkedin
        </Link>
      </p>
    </div>
  );
};

export default Footer;
