import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const CURRENTYEAR = date.getFullYear();
const YOURNAME = "angelo";

ReactDOM.render(
  <>
    <p>Created by {YOURNAME}</p>
    <p>Copyright {CURRENTYEAR}</p>
  </>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
