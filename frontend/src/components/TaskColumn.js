const TaskColumn = ({ title, tasks }) => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {tasks.length === 0 ? <p className="text-gray-500">No tasks</p> : null}
    </div>
  );

export default TaskColumn;