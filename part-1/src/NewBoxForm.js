import React, { useState } from 'react'; 



const NewBoxForm = ({onSubmitHandler})=>{

    const [inputs, setInputs] = useState({'backgroundColor': '', 'width': '', 'height': ''}); 

    const submitHandler = (evt)=>{
        evt.preventDefault(); 
        onSubmitHandler(inputs);
        setInputs({'backgroundColor': '', 'width': '', 'height': ''});
    };

    function onChangeHandler(evt){
        const value = evt.target.value; 
        inputs[evt.target.name] = value;
        setInputs({...inputs}); 
    }   

    return (
        <form onSubmit={submitHandler}>
            <ul>
                <li>            
                    <label htmlFor='backgroundColor'>Box Color </label>
                    <input onChange={onChangeHandler} type='text' id='backgroundColor' name='backgroundColor' value={inputs.backgroundColor} />
                </li>

                <li>
                    <label htmlFor='width'>Width (# of Pixels)</label>
                    <input onChange={onChangeHandler} type='text' id='width' name='width' value={inputs.width} /> 
                </li>
            
                <li>
                    <label htmlFor='height'>Height (# of Pixels)</label>
                    <input onChange={onChangeHandler} type='text' id='height' name='height' value={inputs.height} /> 
                </li>
            
                <li>
                    <button>Submit</button>
                </li>
            
            </ul>

        </form>
    );
};


export default NewBoxForm; 