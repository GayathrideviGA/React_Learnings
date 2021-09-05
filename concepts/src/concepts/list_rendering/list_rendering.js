import React from 'react'
import ListRenderingComponent from './list_rendering_component'

function ListRendering() {
  const geeks = [
    {
      id: 1,
      name: 'Geek 1',
      experience: 2,
      skill: 'Flutter'
    },
    {
      id: 2,
      name: 'Geek 2',
      experience: 4,
      skill: 'React'
    },
    {
      id: 3,
      name: 'Geek 3',
      experience: 6,
      skill: 'React'
    },
    {
      id: 4,
      name: 'Geek 4',
      experience: 8,
      skill: 'Flutter'
    },
    {
      id: 5,
      name: 'Geek 5',
      experience: 10,
      skill: 'React'
    },
  ]
  // const name = ['Geek 1', 'Geek 2', 'Geek 3', 'Geek  4', 'Geek 5']
  // const nameList = name.map(name => <h2>{name}</h2>)
  const geekList = geeks.map(geek => <ListRenderingComponent key={geek.id} geek={geek} />)
  return (
    <div>
      {
        geekList
      }
      {/* {
        name.map(name => <h2>{name}</h2>)
      } */}
      {/* <h2>{name[0]}</h2>
      <h2>{name[1]}</h2>
      <h2>{name[2]}</h2>
      <h2>{name[3]}</h2>
      <h2>{name[4]}</h2> */}
    </div>
  )
}

export default ListRendering
