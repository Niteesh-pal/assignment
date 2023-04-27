import React from "react";
import "./Welcome.css";

function Welcome(props) {
  const handleonclick = () => {
    var hidden = document.getElementsByClassName("para");

    if (hidden[0].offsetWidth > 0 && hidden[0].offsetHeight > 0) {
      hidden[0].style.visibility = "visible";
    }
  };
  return (
    <div>
      <button className="btn btn-primary " onClick={handleonclick}>
        Login
      </button>
      <div className="para">
        <h1>Hey! {props.title}</h1>
        <h3>Welcome to Lovely Professional University, Jalandhar</h3>
      </div>
    </div>
  );
}

export default Welcome;
