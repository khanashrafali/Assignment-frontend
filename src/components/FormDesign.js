import React from "react";

const FormDesign = ({ fields, handleShowFieldInput, setEditFieldIndex, removeField }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {fields?.map((item, index) => (
        <div key={index} className="ml-5">
          <div className="flex w-full  mb-4 justify-between items-center mb-2">
            <input
              type="text"
              className="max-w-full border-b-[1px] p-0 text-[19px] text-[#151515] w-full pt-[2px] px-0 pb-[3px] focus:outline-none"
            />
            <div className="flex">
              <img
                src={"/images/edit.svg"}
                onClick={() => {
                  handleShowFieldInput();
                  setEditFieldIndex(index);
                }}
                alt="edit"
                width="20px"
                height="18px"
                style={{ cursor: "pointer" }}
              />
              <img
                onClick={() => removeField(index)}
                src={"/images/delete.svg"}
                alt="delete"
                width="20px"
                height="18px"
                style={{ marginLeft: "8px", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormDesign;
