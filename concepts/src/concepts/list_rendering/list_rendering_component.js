import React from 'react'

function ListRenderingComponent({ geek }) {
  return (
    <div>
      <h2>I am {geek.name} having experience of {geek.experience} in {geek.skill}</h2>
    </div>
  )
}

export default ListRenderingComponent
