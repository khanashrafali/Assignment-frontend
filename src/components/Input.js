import React, { useState } from "react";

const Input = ({ type, placeHolder, value, onChange, name }) => {
  const [showTitle, setShowTitle] = useState(false);
  return (
    <div className="flex flex-col justify-start items-start mt-5">
      {showTitle && <h4 className="">{name}</h4>}
      <input
        type={type}
        onFocus={() => setShowTitle(true)}
        placeholder={!showTitle ? placeHolder || name : ""}
        className="border-b-[1px] p-0 text-[19px] text-[#151515] w-[100%] pt-[2px] px-0 pb-[3px] focus:outline-none"
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;
