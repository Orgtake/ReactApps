import React from 'react';
import { useState, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState([])
  const inputRef = useRef(null)
  
  return (<>
    <input
      type="checkbox"
      ref={inputRef}
    /> Use floats (starts from 0 to 9)
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        const next = inputRef.current.checked
          ? Number((count + 0.1).toFixed(1))
          : count + 1
        setCount(next)
        if (next % 10 === 0) {
          setArray(prev => [...prev, next])
        }
      }}>
        Increase
      </button>
      <div>Even:
      {count % 2 === 0 ? " Yes" : " No"}, Odd:
      {count % 2 !== 0 ? " Yes" : " No"}</div>
    </div>
    {
      count !== 0 && count % 10 === 0
        ? <div>Congratulations!</div>
        : <div>Try more!</div>
    }
    {
      array.length >= 10/10 && count < 11
        && <div>Full percentage rotate complete!</div>
    }
  </>)
}

export default App
