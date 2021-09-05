import React from 'react'
import IndexComponent from './index_component'
function IndexAsKey() {
  const geekName = ['Geek 1', 'Geek 2 ', 'Geek 3']
  const geekList = geekName.map((geeks, index) => <IndexComponent key={index} geek={geeks} />)
  return (
    <div>
      {
        geekList
      }
    </div>
  )
}

export default IndexAsKey
