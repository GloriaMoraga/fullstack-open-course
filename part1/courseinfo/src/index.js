import React from 'react'
import ReactDOM from 'react-dom'
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Part= (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    
    </div>
  )
}

const Total= (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises}</p>
    
    </div>
  )
}



const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Content = (props) => {
    return (
      <div>
        
          
          <Part part = {part1}  exercises={exercises1}/>
          <Part part = {part2}  exercises={exercises2}/>
          <Part part = {part3}  exercises={exercises3}/>
       
      
      </div>
    )
  }

  return (
    <div>
       <Header course={course}/>
       <Content />
       <Total exercises ={exercises1 + exercises2 + exercises3} />
      
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))