import React from "react";
import GetOnePainting from "@/components/GetOnePainting";

const Contact = () => {
  return (
    <>
      <div className="text-center text-light px-20">
        <p style={{ padding: "20px" }}>
          Please reach out if you have any questions about specific available
          paintings, my pricing, or if you'd like to commission a piece.
        </p>
        <p style={{ padding: "10px" }}>
          email:{" "}
          <a
            className="hover:text-blue-500"
            href="mailto:your-email@example.com"
          >
            wadeperryart@gmail.com
          </a>
          &nbsp;
        </p>
        <p style={{ padding: "10px" }}>
          instagram:{" "}
          <a
            className="hover:text-blue-500"
            href="https://www.instagram.com/wadeperryart/"
            target="_blank"
          >
            @wadeperryart &nbsp;
          </a>
        </p>
      </div>
      {GetOnePainting("Home")}
    </>
  );
};

export default Contact;
