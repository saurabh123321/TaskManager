import { useState } from "react";
import { PlusCircle } from "lucide-react";
import TaskColumn from "../components/TaskColumn";
import TaskModal from "../components/TaskModal";

const TasksPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState({
      todo: [],
      inProgress: [],
      completed: [],
    });

    return(
        <div className="flex h-screen bg-gray-100">
            {/* Main Content */}
            <main className="flex-1 p-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Tasks</h1>
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <PlusCircle size={20} /> Create Task
                        </button>
                </div>

                {/* Task Columns */}
                <div className="grid grid-cols-3 gap-4">
                    <TaskColumn title="To Do" tasks={tasks.todo} />
                    <TaskColumn title="In Progress" tasks={tasks.inProgress} />
                    <TaskColumn title="Completed" tasks={tasks.completed} />
                </div>

                {/* Task Modal */}
                {isModalOpen && <TaskModal closeModal={() => setIsModalOpen(false)} />}
            </main>
            
        </div>         


    );

}

export default TasksPage;
