import React from 'react';

export default function InputComponents({ place, type, inputName, id }) {
    return (
        <input
            className="border-solid border-[#717171] border-[1px] p-3 w-full h-{100%} rounded-full h-[50px] min-w-[350px]   "
            placeholder={place}
            type={type}
            name={inputName}
            id={id}
        />
    );
}
