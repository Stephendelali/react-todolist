import { useState } from 'react';

function App() {
  const [todolist, setTodolist] = useState([]);
  const [addtask, setAddtask] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChange = (event) => {
    setAddtask(event.target.value);
  };

  const addNewTask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: addtask,
    };
    setTodolist([...todolist, task]);
    setAddtask(""); // Clear the input field
  };

  const deleteTask = (id) => {
    setTodolist(todolist.filter((task) => task.id !== id));
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <> 
      <div className={isDarkMode ? "p-4 bg-gray-800 text-white rounded shadow-md" : "p-4 bg-gray-100 text-black rounded shadow-md"}>
        {/* Toggle Dark Mode Switch */}
        <div className="mb-4 flex items-center">
          <span className="mr-2">Dark Mode</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer peer-focus:ring-2 peer-focus:ring-blue-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
          </label>
        </div>
        <div className="flex space-x-2 mb-4">
          <input
            value={addtask} // Bind the input value to addtask
            onChange={handleChange}
            className={isDarkMode ? "flex-1 p-2 border border-gray-600 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500" : "flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}
            placeholder="Enter your task"
          />
          <button
            onClick={addNewTask}
            className={isDarkMode ? "px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800" : "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"}
          >
            Add Task
          </button>
        </div>
        <div className="List space-y-2">
          {todolist.map((task) => (
            <div key={task.id} className={isDarkMode ? "flex justify-between items-center p-2 bg-gray-700 rounded shadow-sm" : "flex justify-between items-center p-2 bg-white rounded shadow-sm"}>
              <h2 className={isDarkMode ? "text-lg font-semibold text-white" : "text-lg font-semibold text-gray-700"}>
                {task.taskName}
              </h2>
              <button onClick={() => deleteTask(task.id)} className={isDarkMode ? "px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700" : "px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"}>
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
