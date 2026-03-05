// batch update code snippet is as follows
import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  function changeNum() {
    // setNum(num + 1)
    // setNum(num + 1)
    // setNum(num + 1)
    // setNum(num + 1)
    // setNum(num + 1)
    // this will not work as expected because of batch update in react, it will only update the state once and the value of num will be 1 instead of 5
    setNum(prevNum => prevNum + 1)
    setNum(prevNum => prevNum + 1)
    setNum(prevNum => prevNum + 1)
    setNum(prevNum => prevNum + 1)
    setNum(prevNum => prevNum + 1)
    // this will work as expected because we are using the previous state value to update the state, so the value of num will be 5
  }

  return (
    <div>
      <h1>Hello, React! The value of num is {num}</h1>
      <button onClick={changeNum}>click me</button>
    </div>
  )
}

export default App





// import React, { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState(0)
//   function changeNum() {
//     setNum(num + 1)
//   }

//   return (
//     <div>
//       <h1>Hello, React! The value of num is {num}</h1>
//       <button onClick={changeNum}>Radha Radha</button>
//     </div>
//   )
// }

// export default App




// import React from 'react'

// const App = () => {
//   function handleClick() {
//     alert('Button clicked!')
//   }
//   function inputchanging(val){
//     console.log(val.target.value)
//   }
//   return (
//     <div>
//       <button onDoubleClick={handleClick} >Click here</button>
//       <button onClick={() => console.log('TestMe clicked!')} >TestMe</button>
//       <input onChange={inputchanging} type="text" placeholder='ENTER VALUE' />

//     </div>
//   )
// }

// export default App



// onwheel scrolling se dekho user seedhs scroll kar raha hai ya up scroll kar raha hai ya down scroll kar raha hai 