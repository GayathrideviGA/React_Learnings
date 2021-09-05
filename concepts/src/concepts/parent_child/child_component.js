import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greet On Click</button>
    </div>
  )
}

export default ChildComponent
