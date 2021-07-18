import React from 'react'; 
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = ()=>{

    const [boxList, setBoxList] = React.useState([]); 
    function onSubmitHandler(inputs){
        boxList.push(inputs); 
        setBoxList([...boxList]); 
    }

    function removeBox(i){
        boxList.splice(i, 1);
        setBoxList([...boxList]);
    }

    return (    
            <div>
                <NewBoxForm onSubmitHandler={onSubmitHandler} />
                {boxList.map((b, i)=>{
                    return <Box backgroundColor={b.backgroundColor} width={b.width} height={b.height} index={i} removeHandler={removeBox} />; 
                })}
            </div>
    ); 
};

export default BoxList; 