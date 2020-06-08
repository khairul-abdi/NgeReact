import React from 'react'
import Input from './Input'

function App() {
  function handleInput(name) {
    console.log('fungsi ini dipanggil dengan nama ', name)
  }

  function handleChange(value) {
    console.log('Value yang di input oleh user adalah ', value)
  }

  return (
    <Input title='Name' handleInput={handleInput} handleChange={handleChange} />
  )
}

export default App
