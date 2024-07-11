import { useState } from 'react'
import { Statistics } from './components/Statistics'
import { Button } from './components/Button'



const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (1*good - 1*bad)/all
  const positive = `${good*100/all}%`
  
  return (
    <div>
      <h1>give Feddback</h1>  
      <hr />
      <div className='container'>
        <Button text='Good' value={good} set={setGood}/>
        <Button text='Neutral' value={neutral} set={setNeutral}/>
        <Button text='Bad' value={bad} set={setBad}/>
      </div>
      <h2>Stadistics</h2>
      {(all>0) 
        ? <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
        : 'No feddback given'
      }

    </div>
  )
}

export default App