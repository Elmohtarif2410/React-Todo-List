import React from 'react';

const AddTask = () => {
    return (  
        <section className='add-task-section'>
            <div className="container">
                <form action="">
                    <div class="input-group">
                        <input className='shadow-none form-control' type="text"/>
                        <input className="input-group-text" type="submit" value="+"/>
                    </div>
                </form>
            </div>
        </section>
    );
}
 
export default AddTask;