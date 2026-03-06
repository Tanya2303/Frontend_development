import React, { useState } from 'react'
import axios from 'axios'
const APICaling = () => {
    const [data, setData] = useState([])

    // async function callAPI() {
    //     // console.log("API called")
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    //     console.log("Response: ", response)

    // }
    const getData = async () => {
        // console.log("API called")
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        console.log("Response: ", response)
        setData(response.data)
    }
    

  return (
    <div>
        <button onClick={getData}>Call API using axios</button>
        
        {/* Display API Data */}
        <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">API Response Data:</h2>
            {Object.keys(data).length > 0 ? (
                <pre className="bg-white p-4 rounded border overflow-auto max-h-96">
                    {JSON.stringify(data, null, 2)}
                </pre>
            ) : (
                <p className="text-gray-500">No data yet. Click the button to fetch data.</p>
            )}
        </div>
    </div>
  )
}

export default APICaling