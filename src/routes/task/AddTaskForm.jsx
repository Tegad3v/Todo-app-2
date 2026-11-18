import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function AddTaskForm({ taskList, setTaskList }) {
  const MAX_INPUT_LENGTH = 150;

  const [formInput, setFormInput] = useState();

  const submitsHandler = (e) => {
    e.preventDefault();

    if (!formInput) {
      alert(`invalid input`);
      return;
    }

    const newTask = {
      id: taskList.length + 1,
      title: formInput,
      completed: false,
      createdAt: new Date(),
    };

    setTaskList((prev) => [...prev, newTask]);

    setFormInput("");
  };

  return (
    <>
      <form
        className="bg-white rounded-lg p-5 shadow-2xl"
        onSubmit={(e) => submitsHandler(e)}
      >
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-11 flex items-center border border-black px-5 gap-3 rounded-sm">
            <FaPlus />

            <input
              className="w-full focus:ring-0 focus:outline-0"
              type="text"
              placeholder="Enter Task....."
              value={formInput}
              onChange={(e) => setFormInput(e.target.value)}
              maxLength={MAX_INPUT_LENGTH}
            />
          </div>

          <button className="p-2 px-8 bg-sky-600 active:bg-sky-400 cursor-pointer rounded-sm">
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTaskForm;
