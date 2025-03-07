import TaskCard from "./TaskCard";

const TaskColumn = ({ title, tasks }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <div className="space-y-4">
      {
        tasks.length > 0 ? (
          tasks.map((task) => <TaskCard task={task}/>)
        ) :
        (
          <p>No tasks in this column</p>
        )
      }
    
    </div>
  </div>
);

export default TaskColumn;