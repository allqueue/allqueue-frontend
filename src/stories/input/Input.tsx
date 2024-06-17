import React, { ChangeEvent } from 'react';
import Image from 'next/image';
import './Input.scss';

interface InputProps {
  type?: 'vertical' | 'horizontal' | '', 
  label: string,
  borderColor?: string,
  width?: string,
  prefixIcon?: string,
  suffixIcon?: string,
  disabled?: boolean,
  onInput: (value: string) => void;
}

export const Input = ({
  type = '',
  label,
  borderColor = '#d9d9d9',
  width = '180px',
  prefixIcon,
  suffixIcon,
  disabled,
  onInput
}: InputProps) => {
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onInput(e.target.value);
  }
  
  return (
    <div className={type ? `${type}-main` : ''}>
      {type && label && (<label>{ label }</label>)}
      <div className={`input-wrapper ${disabled ? 'input-disabled' : ''}`}>
        {prefixIcon && <Image src={prefixIcon} alt="prefix icon" className='prefix-icon' width={16} height={16} />}
        <input
          style={{ width, borderColor }}
          disabled={disabled}
          onInput={inputHandler}
        />
        {suffixIcon && <Image src={suffixIcon} alt="suffix icon" className='suffix-icon' width={16} height={16} />}
      </div>
    </div>
  );
};