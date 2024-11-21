import React from "react";
import image from "../image/React.png";

function Header() {
  return (
    <div>
      <img
        src={image}
        alt="React"
        style={{ verticalAlign: "top", height: "35px" }}
      ></img>
      <span className="h2 pt-4 text-white-50">React Course - TravelOPedia</span>
    </div>
  );
}

export default Header;
