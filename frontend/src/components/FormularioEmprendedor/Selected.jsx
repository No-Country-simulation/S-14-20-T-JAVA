import React from 'react';

export default function SelectInput({ place, selectName, id, Styles, autoFocus, handleChange, value, options }) {
  return (
    <select
      className={`border-solid border-[#717171] border p-2 h-[40px] w-full rounded-full ${Styles} text-gray-400`}
      name={selectName}
      id={id}
      autoFocus={autoFocus}
      onChange={handleChange}
      value={value}
    >
      <option value="" disabled hidden>{place}</option> {/* Placeholder option */}
      {options.map((option, index) => (
        <option key={index} value={option.value} className={`border-0 text-xs text-gray-400`}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
