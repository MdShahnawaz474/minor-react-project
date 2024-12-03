import React from "react";
import Title from "../components/Title";

export default function RandomizeColor() {
  const handleSecClick = (e) => {
    // console.log(e.target);
    console.log(getRandomColor());
    let body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="container m-auto text-center">
      <Title text={"Randomize Color"} classes={"mb-4"} />
      <button className="btn btn-danger" onClick={handleSecClick}>
        Click me
      </button>
      <button className="btn btn-success" onClick={handleSecClick}>
        Click me
      </button>
      <button className="btn btn-primary" onClick={handleSecClick}>
        Click me
      </button>
      <button className="btn btn-warning" onClick={handleSecClick}>
        Click me
      </button>

      <div className="mt-4 ">
      <p style={{ fontSize: '1.25rem' }}>
  This project is a simple React application that allows users to
  randomize the background color of the webpage and the button's color by
  clicking on any of the colored buttons. Each time a button is clicked, a
  random color is generated and applied to both the body background and the
  button itself. This demonstrates how to work with React event handling
  and dynamic styling in the DOM.
</p>

      </div>
    </div>
  );
}
