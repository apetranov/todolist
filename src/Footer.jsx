export default function Footer({ tasksCount, completedTasksCount }) {
  return (
    <footer className="bg-yellow-300 fixed space-x-5 w-full p-5 bottom-0 flex flex-row justify-center items-center">
      <h1>Total tasks: {tasksCount}</h1>
      <h1>Completed tasks: {completedTasksCount}</h1>
    </footer>
  );
}
