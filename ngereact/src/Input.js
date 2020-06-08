import React from 'react'

function Input(props) {
  console.log(props)
  props.handleInput('Khairul')

  function handleOnChange(e) {
    const value = e.target.value
    console.log(value)

    props.handleChange(value)
  }

  return (
    <>
      <label>{props.title}</label>
      <input type='text' onChange={handleOnChange} />
    </>
  )
}

export default Input
