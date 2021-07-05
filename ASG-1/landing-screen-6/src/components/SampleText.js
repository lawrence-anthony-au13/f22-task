import React from "react";
import "./SampleText.css";

function SampleText(props) {
  return (
    <div className="Sample-text-wrapper">
      <div className="pt-5"></div>
      <h1 className="Chapters-weve-cover">{props.htag}</h1>
      <p className="Create-custom-landin">{props.ptag}</p>
    </div>
  );
}

export default SampleText;
