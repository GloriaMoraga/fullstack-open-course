import React from 'react'
import ReactDOM from 'react-dom'


const Header = props => <div><h1>{props.course}</h1></div>

const Part= props => <div><p>{props.part} {props.exercises}</p></div>

const Total= props => <div><p>Number of exercises {props.exercises}</p></div>

const Content = props =><div>
      <Part part = {props.parts[0].name}  exercises={props.parts[0].exercises}/>
      <Part part = {props.parts[1].name}  exercises={props.parts[1].exercises}/>
      <Part part = {props.parts[2].name}  exercises={props.parts[2].exercises}/>
      </div>
 

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
       <Header course={course.name}/>
       <Content parts ={course.parts}/>
       <Total exercises ={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))