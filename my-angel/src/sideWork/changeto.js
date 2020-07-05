import React from 'react';

const Son =(props)=>{
    return (
        <div>
        
         <input type="text" value={props.name} onChange={props.change}/ >
            
         <input type="text" value={props.age} onChange={props.change}/ >
        
         
         
        </div>    
    );        
}
export default Son;