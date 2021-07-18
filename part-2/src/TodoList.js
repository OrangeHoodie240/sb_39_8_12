import React from 'react'; 
import NewTodoForm from './NewTodoForm';
import Todo
 from './Todo';
const TodoList = ()=>{
    const [todos, setTodos] = React.useState([]); 
    
    function updateFromChild(task){
        todos.push(task); 
        setTodos([...todos]); 
    }

    function removeTask(index){
        todos.splice(index, 1); 
        setTodos([...todos]); 
    }

    return (
        <div>
            <NewTodoForm updateParent={updateFromChild} /> 

            <ul>
                {todos.map((t,i) => {
                    return (
                        <li>
                            <Todo task={t} remove={()=>removeTask(i)} /> 
                        </li>
                    );
                })}
            </ul>

        </div>
    );
};


export default TodoList; 