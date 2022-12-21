import React, {useState} from 'react';

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

    
    const addTask = (newTask) => {

        const tasksClone = [...tasks];

        tasksClone.push(newTask);

        setTasks(tasksClone);       
    };


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

    
    const completeAlldTasks = (tasksType) => {

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

    return (  
        <ContextTask.Provider value={{tasks, addTask, completedTask, completeAlldTasks}}>
            {props.children}
        </ContextTask.Provider>
    );
}
 
export default TaskContext;

