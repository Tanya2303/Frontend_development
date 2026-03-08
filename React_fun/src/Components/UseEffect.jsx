import React, { useState } from 'react'
import { useEffect } from 'react'

const UseEffect = () => {

  const [A, setA] = useState(0)
  const [B, setB] = useState(0)

  useEffect(() => {
    console.log("useEffect is changing b value");
  }, [B])

  return (
    <div>
      <h1>A value {A}</h1>
      <button onClick={()=>{
        setA(A + 1)
      }}>A is changing</button>
      <h1>B value {B}</h1>
      <button onClick={()=>{
        setB(B - 1)
      }}>B is changing</button>
    </div>
  )
}

export default UseEffect