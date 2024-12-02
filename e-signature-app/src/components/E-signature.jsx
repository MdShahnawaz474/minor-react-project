import React, { useState } from 'react';
import Title from './Title';

const Esignature = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px solid #fff",
    outline: "none",
    padding: ".35rem 0",
    background: "transparent",
    color: "#fff",
    fontSize: "1rem",
    width: "200px",
    textAlign: "center",
    marginBottom: "1rem",
  };

  // Set the background color of the body to dark
  document.body.style.background = "#1d1d1d";

  return (
    <div className='container text-center' style={{ color: "#fff", paddingTop: "5rem" }}>
      <Title classes={"subtitle"} text={name} />
      <Title classes={"main-title mb-4"} text={!date ? "DoB" : date} />

      <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
        This is a basic React project designed for learning and practice. It simulates a simple e-signature 
        feature, allowing users to input their name and date of birth. The app demonstrates the use of React 
        state, input handling, and basic styling. Feel free to explore, make improvements, and customize it for 
        your own learning journey.
      </p>

      <footer
        className='d-flex'
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "20vh",
          alignItems: "center",
        }}
      >
        <input
          type='date'
          value={date}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type='text'
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
      </footer>
    </div>
  );
};

export default Esignature;
