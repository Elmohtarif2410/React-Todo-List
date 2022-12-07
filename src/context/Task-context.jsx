import React, {useState} from 'react';

export const ContextTask = React.createContext();

const TaskContext = (props) => {

    const [tasks, setTasks] = useState([
        {id: 1, content: "Task one", type: "day", complet: true},
        {id: 2, content: "Task Two", type: "day", complet: false},
        {id: 3, content: "Task three", type: "week", complet: false},
        {id: 4, content: "Task four", type: "week", complet: false},
        {id: 5, content: "Task five", type: "month", complet: false},
        {id: 6, content: "Task six", type: "month", complet: false},
    ]);

    const completedTask = (task) => {
        
        const tasksClone = [...tasks];

        const taskChange = tasksClone.filter( (thisTask) => thisTask === task);

        console.log(taskChange);

        taskChange.complet = true;

        setTasks(tasksClone);
    }

    return (  
        <ContextTask.Provider value={{tasks, completedTask}}>
            {props.children}
        </ContextTask.Provider>
    );
}
 
export default TaskContext;