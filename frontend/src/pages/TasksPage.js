import { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import TaskColumn from "../components/TaskColumn";
import TaskModal from "../components/TaskModal";
import api from "../api/axios";

const TasksPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState({
      todo: [],
      inProgress: [],
      completed: [],
    });
    const fetchTasks = async () => {
        try {
            const response = await api.get("/api/tasks");
            const fetchedTasks = response.data;
            console.log("Fetched tasks:", fetchedTasks);
            const categorizedTasks = {
                todo: fetchedTasks.filter((task) => task.status === "To Do"),
                inProgress: fetchedTasks.filter((task) => task.status === "In Progress"),
                completed: fetchedTasks.filter((task) => task.status === "Completed")

            }
            setTasks(categorizedTasks);              
        }catch (error) {
            console.error("Error fetching tasks:", error);
        }        
    };
    useEffect(() => {        
        fetchTasks();
    }, []); 

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
                {isModalOpen && <TaskModal closeModal={() => setIsModalOpen(false)} refreshTasks={fetchTasks} />}
            </main>
            
        </div>         


    );

}

export default TasksPage;
