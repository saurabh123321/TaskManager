const TaskCard = ({ task }) => {
    return (
      <div className="bg-gray-100 p-4 rounded-md shadow-sm">
        <h3 className="text-md font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className={`text-xs font-medium px-2 py-1 rounded-full 
            ${task.priority === "HIGH" ? "bg-red-200 text-red-800" : 
            task.priority === "MEDIUM" ? "bg-yellow-200 text-yellow-800" : "bg-green-200 text-green-800"}`}
          >
            {task.priority}
          </span>
          <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
        </div>
      </div>
    );
  };
  
  export default TaskCard;
  