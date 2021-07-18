import React from 'react';




const Box = ({backgroundColor, width, height, index, removeHandler})=>{
    const boxStyles = {backgroundColor, width: width + 'px', height: height + 'px'}; 
    const gridStyles = {display: 'grid', gridTemplateColumns: '1fr 1fr'};
    return (
            <div style={gridStyles}>
                <div style={boxStyles}></div>
                <span onClick={()=> removeHandler(index)}>X</span>
            </div>
    );
};

export default Box; 