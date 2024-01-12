import React, { useState } from "react";
import Input from "../components/Input";
import FormDesign from "../components/FormDesign";

const CreateForm = ({ setCurrentRoute }) => {
  const [showInput, setShowInput] = useState(false);
  const [showTitleInput, setShowTitleInput] = useState(false);
  const [fields, setFields] = useState([]);
  const [title, setTitle] = useState("");
  const [showFieldInput, setShowFieldInput] = useState(false);
  const [editFieldIndex, setEditFieldIndex] = useState(undefined);

  const inputType = [
    {
      type: "text",
      title: "Text",
    },
    {
      type: "number",
      title: "Number",
    },
    {
      type: "email",
      title: "Email",
    },
    {
      type: "password",
      title: "Password",
    },
    {
      type: "date",
      title: "Date",
    },
  ];

  const buttonType = () => {
    return (
      <div className="flex flex-col items-center">
        <button onClick={() => setShowInput((prev) => !prev)} className="bg-transparent text-blue-500 border-[1px] uppercase py-1 px-4 rounded">
          Close Add Input
        </button>

        <div className="flex mt-4">
          {inputType.map((item, index) => (
            <button onClick={() => addField(item.type)} key={index} className="bg-green-500 text-white font-bold uppercase py-1 px-4 mx-2 rounded">
              {item.title}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const formField = () => {
    const field = fields[editFieldIndex];
    return (
      <div>
        <div className="mb-4">
          <h3 className="font-bold mb-2 text-center mt-5">{field?.type}</h3>
          <div className="flex flex-col gap-4">
            <input
              type={field?.type}
              placeholder="title"
              value={field?.title}
              onChange={(e) => handleFieldTitleChange(editFieldIndex, e)}
              className="max-w-full border-b-[1px] p-0 text-[19px] text-[#151515] w-full pt-[2px] px-0 pb-[3px] focus:outline-none"
            />
            <input
              type="text"
              placeholder="placeholder"
              value={field?.placeholder}
              onChange={(e) => handleFieldPlaceholderChange(editFieldIndex, e)}
              className="max-w-full border-b-[1px] p-0 text-[19px] text-[#151515] w-full pt-[2px] px-0 pb-[3px] focus:outline-none"
            />
          </div>
        </div>
      </div>
    );
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFieldTitleChange = (index, e) => {
    const updatedFields = [...fields];
    updatedFields[index].title = e.target.value;
    setFields(updatedFields);
  };

  const handleFieldPlaceholderChange = (index, e) => {
    const updatedFields = [...fields];
    updatedFields[index].placeholder = e.target.value;
    setFields(updatedFields);
  };

  const addField = (type) => {
    if (fields.length < 20) {
      setFields([...fields, { type: type, title: "", placeholder: "" }]);
    }
  };

  const removeField = (index) => {
    setShowFieldInput(false);

    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleSubmit = () => {
    const formData = { title, fields };
    fetch("http://localhost:4000/api/v1/forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((data) => {
        setCurrentRoute("/");
      })
      .catch((error) => {});
  };

  const handleShowFieldInput = () => {
    setShowFieldInput(true);
    setShowTitleInput(false);
  };

  return (
    <div className="max-w-[1300px] w-full mx-[100px]">
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold">Create New Form</h1>
      </div>

      <div className="container mx-auto my-8 border-[1px] h-auto">
        <div className="flex justify-around">
          <div className="relative flex flex-col jsutify-center items-center basis-3/5">
            <div className="flex  mb-4 mt-4">
              <h3 className="font-bold">{title || "Untitled Form"}</h3>
              <img
                src={"/images/edit.svg"}
                onClick={() => {
                  setShowTitleInput((prev) => !prev);
                  setShowFieldInput(false);
                }}
                alt="logo"
                width="34px"
                height="30px"
                style={{ verticalAlign: "baseline", cursor: "pointer" }}
              />
            </div>
            {fields.length > 0 && (
              <div>
                <FormDesign
                  removeField={removeField}
                  handleShowFieldInput={handleShowFieldInput}
                  setEditFieldIndex={setEditFieldIndex}
                  fields={fields}
                />
              </div>
            )}
            <div className="mb-2 mt-3 text-center">
              {!showInput ? (
                <button
                  class="bg-transparent text-blue-500 border-[1px] px-2 py-1 mt-2 rounded hover:bg-slate-50 uppercase"
                  onClick={() => setShowInput((prev) => !prev)}
                >
                  Add Input
                </button>
              ) : (
                buttonType()
              )}
            </div>
            <div className="mb-4 text-center">
              <button class="bg-blue-500 text-white px-2 py-1 mt-2 shadow-button-shadow rounded hover:bg-blue-600 uppercase">Submit</button>
            </div>
          </div>
          <div className="border-l-[1px] basis-2/5">
            <div className="flex flex-col justify-start items-center">
              <h3>Form Editor</h3>
              {!showTitleInput && !showFieldInput && <p>Select to see a editor</p>}
              {showTitleInput && <Input onChange={handleTitleChange} name="title" type="text" value={title || ""} />}
              {showFieldInput && formField()}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 text-center">
        <button onClick={handleSubmit} class="bg-blue-500 text-white border-[1px] px-2 py-1 mt-2 rounded hover:bg-blue-600 uppercase">
          Create Form
        </button>
      </div>
    </div>
  );
};

export default CreateForm;
