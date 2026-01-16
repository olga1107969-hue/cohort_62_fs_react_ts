import React from "react";

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

const Lesson_11_Maria: React.FC<Props> = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      padding: "8px 12px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginLeft: "12px",
    }}
  >
    Get Universities
  </button>
);

export default Lesson_11_Maria;
