import React from "react";

import TaskComponant from "./Task-componant";

const TasksContainer = () => {
    
    return (
        <section className="content">
            <div className="container">                
                <header className="header-tasks">
                    <button className="btn-finshed btn">finshed all</button>
                    <button className="btn-delete btn">delete all</button>
                </header>
                <div className="row">
                    <article className="tasks-box mb-4 mb-md-0 col-md-9">
                        <TaskComponant />
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