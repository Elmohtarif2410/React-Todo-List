import React, { useState, useEffect } from 'react';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


export const ContextTask = React.createContext();

const TaskContext = (props) => {

    const [tasks, setTasks] = useState([]);

    const sweetAlert = withReactContent(Swal);

    // reset tasks => by locale storge
    useEffect( () => {

        if (localStorage.tasksStorage) {
            
            setTasks(JSON.parse(localStorage.tasksStorage))
        }

    }, [])

    // safe tasks to Locale storge
    useEffect( () => {

        localStorage.setItem("tasksStorage", JSON.stringify(tasks));

    }, [tasks]);
    

    /// Add Task
    const addTask = (newTask) => {

        const tasksClone = [...tasks];

        tasksClone.push(newTask);

        setTasks(tasksClone);       
    };

    // complete This Task
    const completedTask = (task) => {
        
        const tasksClone = [...tasks];

        const taskChange = tasksClone.filter( (thisTask) => thisTask === task)[0];

        if (taskChange.complet === false) {

            taskChange.complet = true;

        } else {
            taskChange.complet = false;
        }

        setTasks(tasksClone);

    }

    // complete All Tasks
    const completeAllTasks = (tasksType) => {

        const tasksClone = [...tasks];

        const tasksThisType = tasks.filter( (task) => {

            if (tasksType != "") {

                return task.type === tasksType

            } else {

                return task.type === "day"
            }
    
        });

        tasksThisType.map( (task) => {

            return task.complet = true
        });

        setTasks(tasksClone);
    }

    // Delete This Task
    const deleteTask = (remTask) => {

        let tasksClone = [...tasks];

        tasksClone = tasksClone.filter( task => task !== remTask);

        Swal.fire({
            title: 'Are you sure deleted Task?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4B016D',
            cancelButtonColor: '#009688',
            confirmButtonText: 'Delete'
          }).then((result) => {

            if (result.isConfirmed) {

                // set state => delete task
                setTasks(tasksClone);

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your task has been deleted.',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
          })
    }

    // Delete All Task
    const deleteAllTasks = (tasksType) => {

        const cloneTasks = [...tasks];

        const tasksAfterDelete = cloneTasks.filter( (task) => {

            if (tasksType != "") {

                return task.type !== tasksType;

            } else {

                return task.type !== "day";
            }
        })

        Swal.fire({
            title: 'Are you sure deleted All Task?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4B016D',
            cancelButtonColor: '#009688',
            confirmButtonText: 'Delete All'
          }).then((result) => {

            if (result.isConfirmed) {

                // set state => delete All tasks
                setTasks(tasksAfterDelete);

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your tasks has been deleted.',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
          })
    };

    const editTask = async (taskEditor) => {

        const cloneTasks = [...tasks];

        const taskChange = cloneTasks.filter( task => task === taskEditor )[0]

        const { value: content } = await Swal.fire({
            title: 'Input email address',
            input: 'text',
            inputLabel: 'Edit Task',
            inputValue: taskEditor.content
        })
          
        if (content) {

            taskChange.content = content;

            setTasks(cloneTasks);

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your tasks has been Editing.',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return (  
        <ContextTask.Provider value={{tasks, addTask, completedTask, completeAllTasks, deleteTask, deleteAllTasks, editTask}}>
            {props.children}
        </ContextTask.Provider>
    );
}
 
export default TaskContext;

