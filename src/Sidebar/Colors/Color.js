import React from 'react'
import './Color.css'
import Input from "../../components/Input";

const Color = ({handleRadioChange}) => {
  return (
    <div>
      <h2 className="sidebar-tite color-title">Colors</h2>

      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          name="test1"
          value=""
        />
        <span className="check-mark all"></span>All
      </label>
      <Input
        handleRadioChange={handleRadioChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          name="test1"
          value="white"
        />
        <span className="check-mark"style={{ backgroundColor:"white", border:"2px solid black" }}></span>White
      </label>
    </div>
  );
}

export default Color
