import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setindex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=28`)
    setUserData(response.data)

    console.log(response.data);
  }

  useEffect(() => {
    getData()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [index])

  let printUserData = <h3 className="text-xl font-bold text-gray-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, index) {
      return (
        <div className="bg-white h-60 rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300" key={index}>
          <img className='h-full w-full object-cover hover:scale-110 transition duration-500' src={elem.download_url} alt="" />
        </div>
      )
    })
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-100 via-gray-200 to-slate-300 flex flex-col items-center">

      {/* Title */}
      <h1 className="text-4xl font-bold mt-10 mb-6 text-gray-800 tracking-wide">
        Image Gallery
      </h1>

      {/* Load Button */}
      <button
        className='px-8 py-3 mb-10 bg-gradient-to-r from-indigo-500 to-purple-500 text-lg text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition duration-300'
        onClick={getData}>
        Load Gallery
      </button>

      {/* Gallery */}
      <div className="grid grid-cols-4 gap-6 max-w-7xl px-6">
        {printUserData}
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-10 bg-white shadow-lg rounded-full px-8 py-4 mt-10 mb-10">

        <button
          className='bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition'
          onClick={() => {
            if (index > 1) {
              setindex(index - 1)
            }
          }}>
          Previous
        </button>

        <h1 className='text-lg font-semibold text-gray-700'>
          Page {index}
        </h1>

        <button
          className='bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition'
          onClick={() => {
            setindex(index + 1)
          }}>
          Next
        </button>

      </div>

    </div>
  )
}

export default App