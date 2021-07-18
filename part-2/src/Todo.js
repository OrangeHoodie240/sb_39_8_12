import React from 'react'; 



const Todo = ({task, remove}) => {
    return (
        <div>
            {task}
            &nbsp; 
            <button onClick={remove}>X</button>
        </div>
    );
}


export default Todo; 