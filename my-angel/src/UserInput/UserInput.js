import React from'react'

const UserInput=(props)=>{
const styles = {
    backgroundColor:'blue',
    color :'white'
}
        return(
            <div >
                <input type='text' value={props.Username} onChange={props.change}
                style={styles}
                />
            </div>




        )
    
}
export default UserInput;