import React, {useState, useContext} from "react";
import { useLocation } from "react-router-dom";

import { ContextTask } from "../context/Task-context";

import TaskComponant from "./Task-componant";

const TasksContainer = () => {

    const location = useLocation().pathname.slice(1);

    const { tasks, completeAllTasks, deleteAllTasks } = useContext(ContextTask)    

    const tasksThisType = tasks.filter( (task) => {

        if (location != "") {
            return task.type === location
        } else {
            return task.type === "day"
        }

    });

    const tasksThisTypeLength = tasksThisType.length;

    const tasksThisTypeCompletedLength = tasksThisType.filter( (task) => task.complet === true).length;

    return (
        <section className="content">
            <div className="container">                
                <header className="header-tasks">
                    <button className="btn-finshed btn" onClick={() => completeAllTasks(location)}>finshed all</button>
                    <button className="btn-delete btn" onClick={() => deleteAllTasks(location)}>delete all</button>
                </header>
                <div className="row">
                    <article className="tasks-box mb-4 mb-md-0 col-md-9">
                        {
                            tasksThisType.map( (task) => {
                                return <TaskComponant task={task} key={"task-" + task.id} />
                            })
                        }
                    </article>
                    <aside className="information-tasks col-md-3">
                        <div className="container p-md-0">
                            <div className="tasks-info tasks-number">
                                Tasks: 
                                <span className="number badge">{tasksThisTypeLength}</span>
                            </div>
                            <div className="tasks-info tasks-finshed">
                                Completed: 
                                <span className="number badge">{tasksThisTypeCompletedLength}</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default TasksContainer;