import React, {useState} from "react";
import { useLocation } from "react-router-dom";

import TaskComponant from "./Task-componant";

const TasksContainer = () => {

    const location = useLocation().pathname.slice(1);
    
    const [tasks, setTasks] = useState([
        {id: 1, content: "Task one", type: "day", complet: false},
        {id: 2, content: "Task Two", type: "day", complet: false},
        {id: 3, content: "Task three", type: "week", complet: false},
        {id: 4, content: "Task four", type: "week", complet: false},
        {id: 5, content: "Task five", type: "month", complet: false},
        {id: 6, content: "Task six", type: "month", complet: false},
    ]);

    const tasksType = tasks.filter( (task) => {

        if (location != "") {
            return task.type === location
        } else {
            return task.type === "day"
        }

    });

    return (
        <section className="content">
            <div className="container">                
                <header className="header-tasks">
                    <button className="btn-finshed btn">finshed all</button>
                    <button className="btn-delete btn">delete all</button>
                </header>
                <div className="row">
                    <article className="tasks-box mb-4 mb-md-0 col-md-9">
                        {
                            tasksType.map( (task) => {
                                return <TaskComponant task={task} key={task.id} />
                            })
                        }
                    </article>
                    <aside className="information-tasks col-md-3">
                        <div className="container p-md-0">
                            <div className="tasks-info tasks-number">
                                Tasks: 
                                <span className="number badge">0</span>
                            </div>
                            <div className="tasks-info tasks-finshed">
                                Completed: 
                                <span className="number badge">0</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default TasksContainer;