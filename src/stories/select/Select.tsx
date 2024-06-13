import React from 'react';
import './Select.css';

interface SelectProps {
  options?: {
    label: string,
    value: string | number
  }[];
  label: string,
  name: string,
  active?: string | number,
  borderColor?: string,
  width?: string,
  onChange?: () => void;
}

export const Select = ({
  options=[],
  active = '',
  borderColor= '#d9d9d9',
  width='120px',
  name
}: SelectProps) => {
  
  return (
    <select name={name} >
      {options.map(el => (
        <option 
          defaultValue={active || ''}
          value={el.value} 
          key={el.value}
        >
          {el.label}
        </option>
      ))}
      <style jsx>{`
        select {
          border-color: ${borderColor};
          width: ${width}
        }
      `}</style>
    </select>
  );
};
