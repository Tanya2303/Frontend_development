import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [Task, setTask ] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log("title: ", title)
    // console.log("details: ", details)

    const copyTask = [...Task]
    copyTask.push({title, details})
    setTask(copyTask)

    // console.log("Task: ", copyTask)

    setTitle("")
    setDetails("")
  }

  const deleteHandler = (index) => {
    const copyTask = [...Task]
    copyTask.splice(index, 1)
    setTask(copyTask)
  }


  return (
    <div className="min-h-screen bg-rose-300 p-6 md:p-10">

      {/* Title */}
      <h1 className="text-center text-3xl md:text-5xl font-bold text-black mb-10">
        NOTES
      </h1>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* Left Section */}
        <form
          onSubmit={(e) =>  submitHandler(e)}
          className="bg-red-200 rounded-xl p-6 shadow-lg"
        >

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Add Notes
          </h2>

          {/* Heading Input */}
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="w-full p-3 mb-4 rounded-lg bg-red-100 border"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Details */}
          <textarea
            placeholder="Write Details"
            rows="6"
            className="w-full p-3 mb-4 rounded-lg bg-red-100 border"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold bg-linear-to-r from-rose-400 to-red-500 hover:opacity-90"
          >
            Add Note
          </button>

        </form>

        {/* Right Section */}
        <div className="bg-red-200 rounded-xl p-6 shadow-lg">

          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Recent Notes
          </h2>

          {/* Notes Cards */}
          <div className="flex flex-wrap gap-4 justify-start">
            {/* <div className="w-32 h-40 md:w-40 md:h-44 bg-sky-200 rounded-xl p-3 shadow-md">
            </div>
            <div className="w-32 h-40 md:w-40 md:h-44 bg-emerald-200 rounded-xl p-3 shadow-md">
            </div>
            <div className="w-32 h-40 md:w-40 md:h-44 bg-purple-200 rounded-xl p-3 shadow-md">
            </div> */}
            {Task.map(function (elem, index) {
              return <div key={index} className="w-32 h-40 md:w-40 md:h-44 bg-sky-200 rounded-xl p-3 shadow-md relative">
                {/* Delete Button */}
                <button
                  onClick={() => deleteHandler(index)}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white text-xl leading-none font-bold transition"
                  title="Delete note"
                >
                  ×
                </button>
                <h3 className="text-lg font-semibold mb-2"> {elem.title} </h3>
                <p className="text-sm"> {elem.details} </p>
            </div>

            })}
          </div>

        </div>

      </div>
    </div>
  )
}

export default App