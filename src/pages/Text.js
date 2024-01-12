import React, { useState } from "react";

const FormRow = ({ index, formData, onEdit, onDelete }) => {
  const [inputValue, setInputValue] = useState(formData.title);
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEdit(index, inputValue);
    setEditing(false);
  };

  const handleDelete = () => {
    onDelete(index);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex mb-4">
      <div className="w-1/2">
        {editing ? <input type="text" value={inputValue} onChange={handleInputChange} className="border p-2 w-full" /> : <span>{inputValue}</span>}
      </div>
      <div className="w-1/2 flex items-center">
        <button className="bg-blue-500 text-white px-2 py-1 mr-2" onClick={editing ? handleSave : handleEdit}>
          {editing ? "Save" : "Edit"}
        </button>
        <button className="bg-red-500 text-white px-2 py-1" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

const FormDesign = () => {
  const [formRows, setFormRows] = useState([
    { title: "Input 1" },
    { title: "Input 2" },
    // Add more rows as needed
  ]);

  const handleEditRow = (index, newValue) => {
    const updatedRows = [...formRows];
    updatedRows[index].title = newValue;
    setFormRows(updatedRows);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = [...formRows];
    updatedRows.splice(index, 1);
    setFormRows(updatedRows);
  };

  return (
    <div>
      {formRows.map((rowData, index) => (
        <FormRow key={index} index={index} formData={rowData} onEdit={handleEditRow} onDelete={handleDeleteRow} />
      ))}
    </div>
  );
};

export default FormDesign;
