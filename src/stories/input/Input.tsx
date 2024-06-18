import React, { ChangeEvent } from "react";
import Image from "next/image";
import "./Input.scss";

interface InputProps {
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
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onInput(e.target.value);
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
