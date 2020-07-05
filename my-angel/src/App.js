import React from 'react';
import './App.css';
import Son from './son/Son';

 class App extends React.Component{

state ={
    showNameDateils : false ,
    Person :[
      {id:'row1', name:'Roger',age:23},
      {id:'row2', name:'Nantume',age:25},
      {id:'row3', name:'Ronnie',age:25},
      {id:'row4', name:'Wilson',age:22},
      {id:'row5', name:'Henry',age:26}
  ]
  }
  showNameHandler=()=>{
    this.setState({
      showNameDateils : !this.state.showNameDateils
    })
  }
  showPersonHandler=( event , id)=>{
    const personIndex = this.state.Person.findIndex(p =>{
      return p.id === id;
    })
    const x ={
      ...this.state.Person[personIndex]
    }
      x.name = event.target.value ;
      
      const y =[...this.state.Person]

      y[personIndex]=x;
      this.setState({Person:y})
  }
  deletePerson = (personIndex)=>{
    const member = [...this.state.Person]
    member.pop()
    this.setState({
      Person:member
    }) 
  }

  render(){
    const totalAge = this.state.Person.reduce((total, sum) => total + sum.age, 0)
    let displayPerson =null;
   if(this.state.showNameDateils){
     displayPerson= <div>
      {
        this.state.Person.map(Person=>{

          return<Son 
          
          name={Person.name}
          age={Person.age} 
          key={Person.id}
          change={ (event)=>this.showPersonHandler(event,Person.id)}
          click = { (event)=>this.deletePerson(event,Person.id)}
        
          > Hey i can render</Son>
        })
      }
     
    </div>
   }else{
     displayPerson =<div>
              Total age =   {totalAge}
            </div>

   }

    return(
      <div className='App'>
        <button onClick= {this.showNameHandler}>Name Toggle</button>
        {displayPerson}
      </div>
    )
  }
  }
    export default App;






// import UserOutput from './UserOutput/UserOutput';
// import UserInput from './UserInput/UserInput';

// class App extends React.Component{
//   state={
//     Username:'Henry'
//   }
//   inputChangedHandler=(event)=>{
//     this.setState({
//       Username: event.target.value
      

//     })
//   }
//   render(){
//     return(
//       <div className='App'>
//         <UserOutput
//         Username={this.state.Username}

//         />
//         <UserOutput
         
//          Username={this.state.Username}
//          />
//         <UserOutput
//          Username='Nsubuga'
//         />
       
//         <UserInput
//         Username={ this.state.Username}
//         change={this.inputChangedHandler}
      
//          />

//       </div>
//     )
//   }
//       }

