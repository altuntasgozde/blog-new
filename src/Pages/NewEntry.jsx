import React, { useState } from "react";

export const NewEntry = ({ onEntryAdded }) => {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [status, setStatus] = useState(false)

  const handleSubmit = () => {
    const newEntry = {
      input: inputValue,
      textarea: textareaValue,
    };
    if (newEntry.input !== "" && newEntry.textarea !== "") {
      onEntryAdded(newEntry);
      setInputValue("");
      setTextareaValue("");
      setStatus(true)
    }

  };
  return (
    <div className='container mx-auto px-24 flex items-center flex-col'>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="py-3 px-4 w-1/3 border block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        placeholder="This is placeholder"
      />

      <textarea
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
        className="py-3 px-4 block w-1/3 border mt-5 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        rows="3"
        placeholder="This is a textarea placeholder"
      ></textarea>

      <button onClick={handleSubmit} className="py-3 px-4 w-1/3 mt-5 justify-center inline-flex items-center text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
        Add
      </button>

      {status ? <div className="mt-5 bg-teal-100 border border-teal-200 text-sm text-teal-800 rounded-lg p-4" role="alert">
        <span className="font-bold">Success!</span> entry added.
      </div> : null}

    </div>
  );
};
