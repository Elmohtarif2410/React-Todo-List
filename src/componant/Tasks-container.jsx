import React from "react";

const TasksContainer = () => {
    
    return (
        <section className="content">
            <div className="container">                
                <header className="header-tasks">
                    <button className="btn-finshed btn">finshed all</button>
                    <button className="btn-delete btn">delete all</button>
                </header>
                <div className="row">
                    <article className="tasks-box col-9">
                        aaa
                    </article>
                    <aside className="information-tasks col-3">
                        <div className="tasks-info tasks-number">
                            Tasks: 
                            <span className="number badge">0</span>
                        </div>
                        <div className="tasks-info tasks-finshed">
                            Completed: 
                            <span className="number badge">0</span>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default TasksContainer;