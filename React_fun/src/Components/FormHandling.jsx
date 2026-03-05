// Two way data binding in react is a process where the changes made in the user interface (UI) are automatically reflected in the underlying data model, and vice versa. This means that when a user interacts with a form element (like an input field), the changes they make are immediately updated in the component's state, and any changes to the state are also reflected in the UI.

import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  function changeNum() {
    setNum(prevNum => prevNum + 1)
  }

  return (
    <div>
      <h1>Hello, React! The value of num is {num}</h1>
      <button onClick={changeNum}>click me</button>
    </div>
  )
}

export default App  