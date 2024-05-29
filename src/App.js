import React, { useState } from 'react'
import Header from './Header';
import Calculator from './Calculator';


const App = () => {

  const [display, setDisplay] = useState('')
  const [preValue, setPreValue] = useState('')
  const [postValue, setPostValue] = useState('')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState('')

  const handleClick = (value) => {
    const updatedValue = display + value;
    setDisplay(updatedValue);
  };
  const handleOperatorClick = (value) => {
    if (operator) {
      handleEqual()
      setOperator(value)
      setDisplay('')
    }
    if (!operator) {
      setOperator(value)
      setPreValue(display)
      setDisplay('')
    }
  }
  const handleEqual = () => {
    if (operator === '+') {
      const res = parseInt(preValue) + parseInt(display)
      const resInString = res.toString()
      setDisplay(resInString)
      setPreValue(resInString)
      setOperator('')
    }
    if (operator === '-') {
      const res = parseInt(preValue) - parseInt(display)
      const resInString = res.toString()
      setDisplay(resInString)
      setPreValue(resInString)
      setOperator('')
    }
    if (operator === '*') {
      const res = parseInt(preValue) * parseInt(display)
      const resInString = res.toString()
      setDisplay(resInString)
      setPreValue(resInString)
      setOperator('')
    }
    if (operator === '/') {
      const res = parseInt(preValue) / parseInt(display)
       const resInString = res.toString()
      setDisplay(resInString)
      setPreValue(resInString)
      setOperator('')
    }
  }
  const handleClear = () => {
    setDisplay('');
    setOperator('')
    setResult('')
    setPreValue('')
  }

  return (
    <div>
      <Header title="Calculator" />
      <Calculator handleEqual={handleEqual} handleOperatorClick={handleOperatorClick} handleClick={handleClick} display={display} setDisplay={setDisplay} handleClear={handleClear} />
    </div>
  )
}

export default App

