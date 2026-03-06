import React from 'react'

const LocalStorage = () => {

    localStorage.setItem("user", "Tanya") // setItem is used to store data in localStorage. It takes two arguments: the key and the value. In this case, we are storing the value "Tanya" with the key "user".

    const retrievedUser = localStorage.getItem("user") // getItem is used to retrieve data from localStorage. It takes one argument: the key. In this case, we are retrieving the value associated with the key "user" and storing it in the variable user.

    localStorage.removeItem("user") // removeItem is used to remove a specific item from localStorage. It takes one argument: the key. In this case, we are removing the item associated with the key "user".

    const user = {
        name: "Tanya",
        age: 22,
        city: "Bangalore"
    }

    localStorage.setItem("user", JSON.stringify(user)) // When we want to store an object in localStorage, we need to convert it to a string using JSON.stringify. This is because localStorage can only store strings.




  return (
    <div></div>
  )
}

export default LocalStorage





