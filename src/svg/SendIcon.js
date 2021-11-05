import React from "react";

function SendIcon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke={ color }
      strokeLinecap="square"
      aria-labelledby="sendIconTitle"
      color={ color }
      viewBox="0 0 24 24"
    >
      <path d="M21.368 12.001L3 21.609 3 14 11 12 3 9.794 3 2.394z"></path>
    </svg>
  );
}

export default SendIcon;