import React, { useContext, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { ContextTask } from "../context/Task-context";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const AddTask = () => {

    const sweetAlert = withReactContent(Swal);

    const { tasks, addTask } = useContext(ContextTask);

    const [inputValue, setInputValue] = useState("");

    const location = useLocation().pathname.slice(1);

    const inputField = useRef(null);

    const onSubmitFunction = (e) => {
        
        e.preventDefault();

        if (inputValue !== "") {

            const newTask = {
                id: tasks.length + 1,
                content: inputValue,
                type: (location != "") ? location : "day",
                complet: false
            }
            
            addTask(newTask);
    
            setInputValue("");
            
        } else {

            Swal.fire({
                icon: 'error',
                title: 'Sorry, no text entered.',
                showConfirmButton: false,
                timer: 1500
            });
        }

        inputField.current.focus();
    }


    return (  
        <section className='add-task-section'>
            <div className="container">
                <form action="" onSubmit={onSubmitFunction}>
                    <div className="input-group">
                        <input className='shadow-none form-control' type="text" ref={inputField} autoFocus value={inputValue} onChange={ (e) => setInputValue(e.target.value)} />
                        <input className="input-group-text" type="submit" value="+" />
                    </div>
                </form>
            </div>
        </section>
    );
}
 
export default AddTask;