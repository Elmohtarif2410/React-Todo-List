import React from 'react';
import { NavLink } from 'react-router-dom';

const TypeTaskes = () => {
    return (  
        <nav>
            <div className="container">
                <ul className='nav-links d-flex'>
                    <li>
                        <NavLink to="/">day</NavLink>
                    </li>
                    <li>
                        <NavLink to="/week">week</NavLink>
                    </li>
                    <li>
                        <NavLink to="/month">month</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default TypeTaskes;