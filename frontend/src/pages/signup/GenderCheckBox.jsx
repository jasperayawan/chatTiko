import React from "react";

const GenderCheckBox = ({ gender, handleCheckboxChange }) => {
  return (
    <div className="flex flex-row gap-x-2">
      <div className="flex flex-row gap-x-2">
        <input
          onChange={() => handleCheckboxChange("male")}
          checked={gender === "male"}
          type="checkbox"
          id="male"
        />
        <label htmlFor="male">male</label>
      </div>
      <div className="flex flex-row gap-x-2">
        <input
          onChange={() => handleCheckboxChange("female")}
          id="female"
          checked={gender === "female"}
          type="checkbox"
        />
        <label htmlFor="female">female</label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
