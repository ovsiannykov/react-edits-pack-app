import React from "react";
import "./Album.css";

const image = require("../../assets/Edits Pack.jpg");

function Album() {
  return (
    <div>
      <div className="image-box">
        <img className="image" src={image} />
      </div>
      <div className="author">
        <h1 className="title">EDITS PACK - VOL 9</h1>
        <h2>BY MIKIE MAC</h2>
      </div>
    </div>
  );
}

export default Album;
