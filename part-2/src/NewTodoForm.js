import React from 'react'; 



const NewTodoForm = ({updateParent})=>{
    const [task, setTask] = React.useState(''); 
    
    function onChange(evt){
        const value = evt.target.value; 
        setTask(value); 
    }

    function onSubmit(evt){
        evt.preventDefault(); 
        const value = task; 
        setTask(task => ''); 
        updateParent(value); 
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='task'>New Task: </label>
            <input onChange={onChange} type='text' id='task' name='task' value={task} />
            <button>Submit</button>
        </form>
    );  
};


export default NewTodoForm; 

