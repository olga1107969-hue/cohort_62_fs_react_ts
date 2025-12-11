import React from "react";
import { StyledInput } from "./styles";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return <StyledInput type="text" value={value} onChange={onChange} placeholder="Введите заметку..." />;
};

export default Input;
