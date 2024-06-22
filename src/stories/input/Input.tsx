import React, { ChangeEvent, useState  } from "react";
import Image from "next/image";
import "./Input.scss";

interface InputProps {
  value?: string;
  type?: "vertical" | "horizontal";
  label: string;
  placeholder?: string,
  height?: string;
  width?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  disabled?: boolean;
  theme?: string;
  onInput: (value: string) => void;
}

export const Input = ({
  value = "",
  type,
  label,
  placeholder,
  height = "36px",
  width = "334px",
  prefixIcon,
  suffixIcon,
  disabled,
  theme,
  onInput,
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onInput(newValue);
  };

  return (
    <div className={`input-label ${type} ${theme}`}>
      {type && label && <label>{label}</label>}
      <div
        className={`input-wrapper ${disabled ? "input-disabled" : ""}`}
      >
        {prefixIcon && (
          <Image
            src={prefixIcon}
            alt="prefix icon"
            className="input-prefix-icon"
            width={16}
            height={16}
          />
        )}
        <input
          value={inputValue}
          style={{ height, width }}
          className={`${prefixIcon ? "input-prefix" : ""} ${suffixIcon ? "input-suffix" : ""}`}
          disabled={disabled}
          placeholder={placeholder}
          onInput={inputHandler}
        />
        {suffixIcon && (
          <Image
            src={suffixIcon}
            alt="suffix icon"
            className="input-suffix-icon"
            width={16}
            height={16}
          />
        )}
      </div>
    </div>
  );
};
