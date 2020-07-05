import React from 'react';
import Son from './son/Son';

import './App.css';
class App extends React.Component{
 state ={
   showNameDateils : false ,
   Person :[
    {name:'Roger',age:'23'},
    {name:'Nantume',age:'25'},
    {name:'Ronnie',age:'25'},
    {name:'Wilson',age:'22'},
    {name:'Henry',age:'26'}
  
]
 }
 showNameHandler=()=>{
   this.setState({
     showNameDateils : !this.state.showNameDateils
   })
 }
 showPersonHandler=()=>{
   this.setState({
     Person:[
      {
        name:'Pauline'
        ,age:'12'
      },
      {
        name:'Ssekitoreko'
        ,age:'30'
      },
      {
        name:'Tricia',
        age:'13'
      },
      {
        name:'Sheilah',
        age:'15'
      },
      {
        name:'Florence',
        age:'17'
      }
    
  ]
   })
 }
 render(){
   return(
     <div>
       <button onClick= {this.showNameHandler}>Name Toggle</button>
       <span>
         {
           this.state.showNameDateils?
            <div>
              <Son 
                 name={this.state.Person[0].name}
                  age={this.state.Person[0].age} 
                  change={this.showPersonHandler}
            />
            <Son 
                 name={this.state.Person[1].name}
                  age={this.state.Person[1].age} 
                  change={this.showPersonHandler}
            />
            <Son 
                 name={this.state.Person[2].name}
                  age={this.state.Person[2].age} 
                  change={this.showPersonHandler}    
                  />
            <Son 
                 name={this.state.Person[3].name}
                  age={this.state.Person[3].age} 
                  change={this.showPersonHandler}
            />
            <Son 
                 name={this.state.Person[4].name}
                  age={this.state.Person[4].age} 
                  change={this.showPersonHandler}
            />
            </div>
            :
            null
         }
       </span>
      
     </div>
   )
 }
}
export default App;