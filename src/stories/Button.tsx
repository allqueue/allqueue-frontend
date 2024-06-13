import React from 'react';
import './button.css';
import { useTranslations } from "next-intl";
interface ButtonProps {
  size: 'medium-fit' | 'medium-wide' | 'large-wide';
  text: string;
  color?: string;
  backgroundColor?: string;
  game?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  size = 'large-wide',
  text,
  game,
  backgroundColor,
  color,  
  onClick,
  disabled
}: ButtonProps) => {
  
  return (
    <button
      type="button"
      className={['basic-button', `basic-button--${size}`, `${game}`].join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
          color: ${color}
        }
      `}</style>
    </button>
  );
};
