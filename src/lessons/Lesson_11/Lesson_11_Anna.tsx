import React from "react";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

const Lesson_11_Anna: React.FC<Props> = ({ value, onChange }) => (
  <label>
    Country:
    <input
      type="text"
      placeholder="Enter Country for searching universities"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ marginLeft: "10px", padding: "5px" }}
    />
  </label>
);

export default Lesson_11_Anna;
