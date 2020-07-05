import React from 'react';
import '../App.css';
const Son =(props)=>{
    
    return (
        

        <div className='Son' onClick={props.click}>
            <p>{props.children}</p>
            <span onClick={props.click}><p>I'm {props.name} and am {props.age}</p></span>
        
         <input type="text" value={props.name} onChange={props.change } onClick={props.click}/ >
            
         <input type="text" value={props.age} onChange={props.change}/ >
        
         
         
        </div>    
    );        
}
export default Son;