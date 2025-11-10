import React, { useState } from 'react';
import cat from './cat.png';

function ImageManipulation() {
  const [catHeight, setCatHeight] = useState(250);
  const [catWidth, setCatWidth] = useState(250);
  const [blue, setBlue] = useState(250);
  const [red, setRed] = useState(250);
  const [green, setGreen] = useState(250);
  const [imageAngle, setImageAngle] = useState(0);

  function increaseWidth() {
    setCatWidth(catWidth + 20);
  }

  function decreaseWidth() {
    setCatWidth(catWidth - 20);
  }

  function changeColor() {
    setRed(Math.floor(Math.random() * 255));
    setGreen(Math.floor(Math.random() * 255));
    setBlue(Math.floor(Math.random() * 255));
  }

  function rotateImage() {
    setImageAngle(imageAngle + 30);
  }

  return (
    <>
      <div
        style={{
          border: '2px solid black',
          height: '480px',
          width: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          transition: 'background-color 0.5s ease',
        }}
      >
        <img
          src={cat}
          height={catHeight}
          width={catWidth}
          style={{
            transform: `rotate(${imageAngle}deg)`,
            transition: 'transform 0.4s ease, width 0.3s ease, height 0.3s ease',
          }}
          alt="Cat"
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <h1>Controls</h1>

        <button onClick={() => setCatHeight(catHeight + 20)}>Increase Height</button>
        <button onClick={() => setCatHeight(catHeight - 20)}>Decrease Height</button>
        <button onClick={increaseWidth}>Increase Width</button>
        <button onClick={decreaseWidth}>Decrease Width</button>
        <button onClick={changeColor}>Change Background Color</button>
        <button onClick={rotateImage}>Rotate Image</button>

        <div>
          <h2>Red: {Math.floor(red)}</h2>
          <h2>Green: {Math.floor(green)}</h2>
          <h2>Blue: {Math.floor(blue)}</h2>
        </div>
      </div>
    </>
  );
}

export default ImageManipulation;
