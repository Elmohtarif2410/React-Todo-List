import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ContextTask } from '../context/Task-context';

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const TaskComponant = (props) => {

    const [task, setTask] = useState(props.task);

    const {completedTask} = useContext(ContextTask);

    // completedTask(task)

    return (  
        <section className="task-container rounded">
            <div className={(task.complet === true) ? "content-tasks complet": "content-tasks"}>
                <input type="checkbox" id={"task-" + task.id} className="form-check-input" checked={(task.complet === true) ? "checked" : null}/>
                <label htmlFor={"task" + task.id} className="form-check-label">{task.content}</label>         
            </div>
            <div className="actions">
                <button className="delele btn">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="edit btn">
                    <FontAwesomeIcon icon={faPen} />
                </button>
            </div>
        </section>
    );
}
 
export default TaskComponant;