import React from "react";

const ViewForm = ({ singleData, setCurrentRoute }) => {
  console.log({ singleData });
  return (
    <div className="flex flex-col justify-center items-center flex-wrap gap-4">
      <h1 className="text-center">{singleData?.title}</h1>
      <div className="border-[1px] max-w-[600px] w-full text-center">
        {singleData?.fields?.map((item, index) => (
          <div key={index} className="ml-5">
            <div className="flex flex-col w-full  mb-4 justify-between items-center mb-2">
              <h4>{item.title}</h4>
              <input
                type={item.type}
                className="max-w-full border-b-[1px] p-0 text-[19px] text-[#151515] w-full pt-[2px] px-0 pb-[3px] focus:outline-none"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mb-4 text-center">
        <button
          onClick={() => setCurrentRoute("/")}
          class="bg-blue-500 text-white px-2 py-1 mt-2 shadow-button-shadow rounded hover:bg-blue-600 uppercase"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ViewForm;
