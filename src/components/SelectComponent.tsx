import React from 'react';

interface SelectProps {
  maxValue: number;
  onChange: (value: number) => void;
}

const SelectComponent: React.FC<SelectProps> = ({ maxValue, onChange }) => {
  const options = Array.from({ length: maxValue }, (_, index) => index + 1);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value, 10);
    onChange(selectedValue);
  };

  return (
    <select onChange={handleSelectChange} className='pagin_select'>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;