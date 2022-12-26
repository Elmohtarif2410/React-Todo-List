import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ContextTask } from '../context/Task-context';

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const TaskComponant = (props) => {

    const [task, setTask] = useState(props.task);

    const {completedTask, deleteTask, editTask} = useContext(ContextTask);
    
    return (  
        <section className="task-container rounded">
            <div className={(task.complet === true) ? "content-tasks complet": "content-tasks"}>
                <input onChange={ () => completedTask(task)} type="checkbox" id={"task-" + task.id} className="form-check-input" checked={(task.complet === true) ? "checked" : null} />
                <label htmlFor={"task-" + task.id} className="form-check-label">{task.content}</label>         
            </div>
            <div className="actions">
                <button className="delele btn" onClick={ () => deleteTask(task) }>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="edit btn" onClick={ () => editTask(task) }>
                    <FontAwesomeIcon icon={faPen} />
                </button>
            </div>
        </section>
    );
}
 
export default TaskComponant;