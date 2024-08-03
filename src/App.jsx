import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasksCount, setTasksCount] = useState(0);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [id, setId] = useState(1);
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: id,
      description: task,
      completed: false,
    };
    setId(id + 1);
    setTasksCount(tasksCount + 1);

    const copyArr = [...tasks];
    copyArr.push(newTask);
    setTask("");
    setTasks(copyArr);
  };

  const deleteTask = (id) => {
    const copy = [];
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        continue;
      }
      copy.push(tasks[i]);
    }
    if (completedTasksCount >= 1) {
      setCompletedTasksCount(completedTasksCount - 1);
    }
    setTasksCount(tasksCount - 1);
    setTasks(copy);
  };

  const completeTask = (id) => {
    const copy = [...tasks];
    for (let i = 0; i < copy.length; i++) {
      if (copy[i].id === id) {
        copy[i].completed = true;
        setCompletedTasksCount(completedTasksCount + 1);
      }
    }
    setTasks(copy);
  };

  const uncompleteTask = (id) => {
    const copy = [...tasks];
    for (let i = 0; i < copy.length; i++) {
      if (copy[i].id === id) {
        copy[i].completed = false;
        setCompletedTasksCount(completedTasksCount - 1);
      }
    }
    setTasks(copy);
  };

  return (
    <div>
      <Header />
      <div onSubmit={(e) => addTask(e)} className="p-10">
        <form className="flex justify-center items-center">
          <div className="shadow-lg p-5 space-x-3">
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type="text"
              placeholder="Type task here..."
              className="h-full border-2 p-3 border-black"
              required
            />
            <button
              type="submit"
              className="bg-yellow-300 p-3 hover:bg-yellow-500"
            >
              Add task
            </button>
          </div>
        </form>
        <div className="flex z-20 m-10 flex-col justify-center items-center">
          {tasks.map((task) =>
            !task.completed ? (
              <div
                className="p-3 flex m-3 flex-row justify-center items-center space-x-5 shadow-lg"
                key={task.id}
              >
                <p>{task.description}</p>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-white p-2 bg-red-600 rounded-lg"
                >
                  Delete
                </button>
                <button
                  onClick={() => completeTask(task.id)}
                  className="text-white bg-green-600 p-2 rounded-lg"
                >
                  Mark as completed
                </button>
              </div>
            ) : (
              ""
            )
          )}
          {tasks.map((task) =>
            task.completed ? (
              <div
                className="p-3 flex m-3 bg-green-400 flex-row justify-center items-center space-x-5 shadow-lg"
                key={task.id}
              >
                <p>{task.description}</p>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-white p-2 bg-red-600 rounded-lg"
                >
                  Delete
                </button>
                <button
                  onClick={() => uncompleteTask(task.id)}
                  className="text-white  bg-blue-600 p-2 rounded-lg"
                >
                  Mark as uncompleted
                </button>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <Footer
        tasksCount={tasksCount}
        completedTasksCount={completedTasksCount}
      />
    </div>
  );
}

export default App;
