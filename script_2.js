// // CHAPTER 1 - JAVASCRIPT DOM

// // DOM = body of HTML document (dom samajhna h kya hota h and dom manipulation krna h)
// // DOM is a tree like structure with nodes, elements, text, comments etc.

// // main methods to select elements
// document.getElementById() //element ki id se select krta h
// document.getElementsByClassName() // elements ki class se select krta h
// document.getElementsByTagName() // elements ke tag se select krta h
// document.querySelector() //yeh first element ko select krta h
// document.querySelectorAll() //yeh sare elements ko select krta h

// // 1. getElementById
// let heading = document.getElementById('heading')
// console.log(heading) 
// console.dir(heading) //yeh h1 ke sare properties and methods dekhata h

// // 2. getElementsByClassName
// let head = document.getElementsByClassName('head')
// console.log(head) //HTMLCollection(2) [h1.head, h2.head]
// console.dir(head) //HTMLCollection(2) [h1.head, h2.head]

// // 3. getElementsByTagName
// let tags = document.getElementsByTagName('h1')
// console.log(tags) //HTMLCollection(1) [h1#heading.head]
// console.dir(tags) //HTMLCollection(1) [h1#heading.head]

// // 4. querySelector
// let abcd = document.querySelector("h1")
// console.log(abcd)
// console.dir(abcd)

// // 5. querySelectorAll
// let xyz = document.querySelectorAll("h1")
// console.log(xyz) //NodeList(1) [h1#heading.head]
// console.dir(xyz) //NodeList(1) [h1#heading.head]

// // ----------------------------------------------------------------------------------------------------------
// // Text manipulation
// abcd.innerHTML = ("Changed heading using innerHTML") 
// abcd.innerText = ("Changed heading using innerText") 
// abcd.textContent = ("Changed heading using textContent") 
// // if your using html tags then use innerHTML otherwise use innerText or textContent

// // ----------------------------------------------------------------------------------------------------------
// // Attributes manipulation
// let a = document.querySelector("a")
// console.log(a) // <a href="#" id="link">This is a link</a>
// console.dir(a) //HTMLAnchorElement {href: 'http://

// console.log(a.getAttribute("href")) //"#"
// a.href = "https://www.google.com"
// a.setAttribute("href", "https://www.youtube.com")
// console.log(a.getAttribute("href"))
// a.removeAttribute("href")

// // ----------------------------------------------------------------------------------------------------------
// // Dynamic DOM manipulation

// // createElement
// let newElement = document.createElement("p")
// newElement.innerText = "This is a new paragraph"
// console.log(newElement) // <p>This is a new paragraph</p> 

// document.body.appendChild(newElement) //yeh body k end m add kr dega
// document.querySelector("body").prepend(newElement) //yeh body k start m add kr dega
// // removeChild
// document.body.removeChild(newElement) //yeh newElement ko body se remove kr dega

// // -------------------------------------------------------------------------------------------------------
// // style updation
// let h2 = document.querySelector("h2")
// h2.style.color = "red"
// h2.style.backgroundColor = "yellow"
// h2.style.padding = "10px"
// h2.style.textAlign = "center"
// h2.style.fontFamily = "Arial"
// h2.style.border = "2px solid black"


// a.classList.add("class1") //add class
// a.classList.remove("class1") //remove class
// a.classList.toggle("class1") //if class is present then remove it otherwise add it

// // ============================================================================================================================

// // Practice CHAPTER 1
// // What is DOM? How does it represent an HTML structure? Name the types of node in DOM? diff b/w element node and text node? diff b/w getElementById and querySelector? what does getelementsByClassName return? diff b/w innertext textcontent and innerHTML? what do setAttribute do? wbat does createElement do and return? diff b/w appendChild and prepend? diff b/w classList.add and classList.toggle?


// //use  querySelectorAll to select all buttons with class "buy-now" 
// // select heading of page by id and change its text to "Welcome to the DOM tutorial"
// // select all li element and print their text using loop
// // select paragraph and change its content to {/* <b>updated paragraph</b> */}
// // how to get src of an image 
// // select an link and update its href to "https://www.google.com"
// // add title attribut to a div dynamically
// // enabling and disabling button 
// // creating a new li item and adding it to ul
// // creating an img element and adding it to body
// // select 1st element of list and delete it using DOM
// // change background of body to lightgrey using DOM
// // add highlight class to all the even elements of list
// // set the size of all p to 20px using style

// // ============================================================================================================================

// // CHAPTER 2 - Event and Event Handling

// let p = document.querySelectorAll("p")
// p.forEach(function (p) {
//     p.addEventListener("click", function () {
//         p.style.color = "red"
//     })
// })

// p.removeEventListener("click", function () {  
//     p.style.color = "red"
// }) //yeh kaam nhi karega kyuki function alag h dono m

// let int = document.querySelector("input")
// int.addEventListener("input", function (dets) {
//     if(dets.data != null){
//         console.log("You typed " + dets.data)
//     }
// })

//change event tab chalta h jab koi input text box se bahar click krta h
let sel = document.querySelector("select")
let device = document.getElementById("device")
sel.addEventListener("change", function (dets) {
    console.log(dets.target.value)
    device.innerText = "You have selected " + dets.target.value
})

let heading = document.getElementById("mainHeading")
window.addEventListener("keydown", function (dets) {
    if(dets.key === " " ){
        heading.innerText = "SPC"
    } else {
        heading.innerText = dets.key
    q}
})


// name of event
// click
// mouseover
// mouseout
// mousedown
// mouseup
// mousemove
// keydown
// keyup
// keypress
// focus
// blur
// change
// scroll
// load

// input wala code likho
// input listener
// let input = document.querySelector("input")
// input.addEventListener("input", function () {
//     console.log(input.value)
// })



list1 = document.getElementById("list1")
list1.addEventListener("click", function (dets) {
    dets.target.style.textDecoration = "line-through"
})


// ============================================================================================================================

//Local Storage and Session Storage

//local storage - data stored in local storage is persistent and remains even after the browser is closed

//store kaise kare = setItem
localStorage.setItem("username", "tanya2303")

//retrieve kaise kare = getItem
let name = localStorage.getItem("username")
console.log(name)

//remove kaise kare = removeItem
localStorage.removeItem("username")

//clear kaise kare = clear
localStorage.clear()

// Session storage - data stored in session storage is temporary and gets cleared when the browser tab is closed

//store kaise kare = setItem
sessionStorage.setItem("sessionName", "tempUser")

//retrieve kaise kare = getItem
let sessionName = sessionStorage.getItem("sessionName")
console.log(sessionName)

//remove kaise kare = removeItem
sessionStorage.removeItem("sessionName")

//clear kaise kare = clear
sessionStorage.clear()

// cookies - small pieces of data stored on the user's computer by the web browser while browsing a website

//create a cookie
document.cookie = "user=John Doe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/"