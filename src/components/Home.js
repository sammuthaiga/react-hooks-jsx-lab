import React from "react";
import { name, city } from "../data/data.js";

const divStyle = {
  color:'firebrick'
}
function Home() {
  // update the JSX being returned!
  const mystyle ={color:'firebrick'};
  return (<div id="home" style={divStyle}>
   <h1 style = {mystyle}>{name} is a Web Developer from {city}</h1>

  </div>
  );
}


export default Home;
