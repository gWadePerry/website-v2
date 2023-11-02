import React from "react";
import GetOnePainting from "@/components/GetOnePainting";
import Link from "next/link";
import Footer from "@/components/Footer";
export const revalidate = 3000;

const Contact = () => {
  return (
    <>
      <div className="text-center font-extralight px-20">
        <p style={{ padding: "20px" }}>
          Please reach out if you have any questions about specific available
          paintings, my pricing, or if you&apos;d like to commission a piece.
        </p>
        <p style={{ padding: "10px" }}>
          email:&nbsp;
          <Link className="hover:text-blue-500" href="wadeperryart@gmail.com">
            wadeperryart@gmail.com
          </Link>
          &nbsp;
        </p>
        <p style={{ padding: "10px" }}>
          instagram:&nbsp;
          <Link
            className="hover:text-blue-500"
            href="https://www.instagram.com/wadeperryart/"
            target="_blank"
          >
            @wadeperryart &nbsp;
          </Link>
        </p>
      </div>
      {GetOnePainting("home")}
      <Footer />
    </>
  );
};

export default Contact;
