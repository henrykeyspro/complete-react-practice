import React from 'react'

const UserOutput =(props)=>{
    return(
        <div className="output">
            <p> Username </p>
            <p> 
               <strong>{props.Username}</strong> 
                </p>
   
            

        </div>
    )
}
export default UserOutput;