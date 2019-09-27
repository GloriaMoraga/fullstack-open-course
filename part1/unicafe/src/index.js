import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
       <Display value={value} />
       <Button handleClick={() => setToValue(0)} text="good" />
       <Button handleClick={() => setToValue(0)} text="neutral" />
       <Button handleClick={() => setToValue(0)} text="increment" />
    </div>
  )
}
// const Display = props => <div>{props.value}</div>

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

// const App = props => {
//   const [value, setValue] = useState(10)

//   const setToValue = newValue => {
//     setValue(newValue)
//   }

//   return (
//     <div>
//       <Display value={value} />
//       <Button handleClick={() => setToValue(1000)} text="thousand" />
//       <Button handleClick={() => setToValue(0)} text="reset" />
//       <Button handleClick={() => setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }
ReactDOM.render(<App />, 
  document.getElementById('root')
)