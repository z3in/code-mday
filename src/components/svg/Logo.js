import React from "react";
import "../../App.css";

export default function Logo() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Allura&display=swap"
        rel="stylesheet"
      />
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="38" cy="38" r="38" fill="#F4F4F4" fill-opacity="0.62" />
        <text
          className="mainLetter"
          fill="black"
          font-size="48"
          letter-spacing="0em"
        >
          <tspan x="12.6875" y="55.1328">
            M
          </tspan>
        </text>
      </svg>
    </div>
  );
}
