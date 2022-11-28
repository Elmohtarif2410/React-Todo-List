import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const TaskComponant = () => {

    const [task, setTask] = useState({
        id: 1,
        content: "Task one",
        type: "day",
        complet: false
    });

    return (  
        <section className="task-container rounded">
            <div className={(task.complet === true) ? "content-tasks complet": "content-tasks"}>
                <input type="checkbox" id="x" className="form-check-input" checked={(task.complet === true) ? "checked" : null}/>
                <label htmlFor="x" className="form-check-label">{task.content}</label>         
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