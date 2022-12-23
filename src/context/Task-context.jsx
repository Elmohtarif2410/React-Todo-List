import React, {useState} from 'react';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


export const ContextTask = React.createContext();

const TaskContext = (props) => {

    const [tasks, setTasks] = useState([
        {id: 1, content: "Task one", type: "day", complet: false},
        {id: 2, content: "Task Two", type: "day", complet: false},
        {id: 3, content: "Task three", type: "week", complet: false},
        {id: 4, content: "Task four", type: "week", complet: false},
        {id: 5, content: "Task five", type: "month", complet: false},
        {id: 6, content: "Task six", type: "month", complet: false},
    ]);

    const sweetAlert = withReactContent(Swal);

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
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'delete'
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
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'delete All!'
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

    return (  
        <ContextTask.Provider value={{tasks, addTask, completedTask, completeAllTasks, deleteTask, deleteAllTasks}}>
            {props.children}
        </ContextTask.Provider>
    );
}
 
export default TaskContext;

