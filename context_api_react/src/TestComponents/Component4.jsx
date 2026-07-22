import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Component4 = () => {
let cd = useContext(MyStore)

console.log(cd);

  return (
    <div>
      <h1>Component 4</h1>
    </div>
  )
}

export default Component4
