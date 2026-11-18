import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

function TaskCard({ task, setTaskList }) {
  const [onEdit, setOnEdit] = useState(false);
  const [formInput, setFormInput] = useState();

  const deleteTaskHandler = () => {
    const isConfirmed = confirm(`Are you sure you want to delete task?`);

    if (!isConfirmed) {
      return;
    } else {
      setTaskList((prev) => prev.filter((tas) => tas.id !== task.id));
    }
  };

  const editTaskHandler = (e) => {
    e.preventDefault();

    setTaskList((prev) =>
      prev.map((tas) =>
        tas.id === task.id ? { ...tas, title: formInput } : tas,
      ),
    );

    setOnEdit(false);
  };

  const taskCompletionHandler = () => {
    setTaskList((prev) =>
      prev.map((tas) =>
        tas.id === task.id ? { ...tas, completed: true } : tas,
      ),
    );
  };

  return (
    <>
      <div
        className={`${task.completed ? "bg-gray-200" : "bg-white"}  h-30 shadow-2xl rounded-lg grid grid-cols-7 gap-8 items-center px-15`}
      >
        <div className="col-span-6 flex justify-between">
          <div className="flex gap-5">
            {task.completed ? (
              <input type="radio" defaultChecked />
            ) : (
              <input type="radio" onChange={() => taskCompletionHandler()} />
            )}

            <div className="flex flex-col gap-3">
              <h1
                className={`${task.completed && "line-through"} bold text-lg`}
              >
                {onEdit ? (
                  <form
                    className="flex items-center gap-3 "
                    onSubmit={(e) => editTaskHandler(e)}
                  >
                    <input
                      className="border border-black p-1 px-3 rounded-sm w-lg"
                      placeholder={task.title.slice(0, 30) + "..."}
                      onChange={(e) => setFormInput(e.target.value)}
                    />

                    <button className="p-1 px-8 bg-sky-600 active:bg-sky-400 cursor-pointer rounded-sm">
                      submit
                    </button>
                  </form>
                ) : (
                  task.title
                )}
              </h1>

              <p>{task.createdAt.toLocaleString().slice(0, 10)} </p>
            </div>
          </div>

          <div
            className={`${task.completed ? "bg-green-400" : "bg-yellow-400"} h-fit p-1 px-3 rounded-full capitalize`}
          >
            {task.completed ? "completed" : "pending"}
          </div>
        </div>

        <div className="flex flex-col h-[70%]">
          <div className="mt-auto flex justify-between items-center">
            <button
              className="cursor-pointer text-xl"
              onClick={() => setOnEdit((i) => !i)}
            >
              {!onEdit ? (
                <FaPencilAlt className="text-blue-500" />
              ) : (
                <MdCancel className="text-red-500 text-2xl" />
              )}
            </button>

            <button
              className="cursor-pointer text-xl"
              onClick={() => deleteTaskHandler()}
            >
              <FaTrash className="text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskCard;
