import React from "react";

export const NewEntry = () => {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [entries, setEntries] = useState([]);

  const handleSubmit = () => {
    const newEntry = {
      input: inputValue,
      textarea: textareaValue,
    };
    setEntries([...entries, newEntry]);
    setInputValue("");
    setTextareaValue("");
    console.log(entries);
  };
  return (
    <div>
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

      <button
        type="button"
        onClick={handleSubmit}
        className="py-3 px-4 w-1/3 mt-5 justify-center inline-flex items-center text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        Add
      </button>
    </div>
  );
};
