// DOM = body of HTML document (dom samajhna h kya hota h and dom manipulation krna h)

// main methods to select elements
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector() //yeh first element ko select krta h
// document.querySelectorAll() //yeh sare elements ko select krta h

// 1. getElementById
// let heading = document.getElementById('heading')
// console.log(heading) 
// console.dir(heading) //yeh h1 ke sare properties and methods dekhata h

// 2. getElementsByClassName
// let head = document.getElementsByClassName('head')
// console.log(head) //HTMLCollection(2) [h1.head, h2.head]
// console.dir(head) //HTMLCollection(2) [h1.head, h2.head]

// 3. getElementsByTagName
// let tags = document.getElementsByTagName('h1')
// console.log(tags) //HTMLCollection(1) [h1#heading.head]
// console.dir(tags) //HTMLCollection(1) [h1#heading.head]

// 4. querySelector
let abcd = document.querySelector("h1")
console.log(abcd)
// console.dir(abcd)

// 5. querySelectorAll
// let xyz = document.querySelectorAll("h1")
// console.log(xyz) //NodeList(1) [h1#heading.head]
// console.dir(xyz) //NodeList(1) [h1#heading.head]

// ----------------------------------------------------------------------------------------------------------
// Text manipulation
abcd.innerHTML = ("Changed heading using innerHTML") 
abcd.innerText = ("Changed heading using innerText") 
abcd.textContent = ("Changed heading using textContent") 

// ----------------------------------------------------------------------------------------------------------
// Attributes manipulation
let a = document.querySelector("a")
console.log(a) // <a href="#" id="link">This is a link</a>
console.dir(a) //HTMLAnchorElement {href: 'http://
a.href = "https://www.google.com"
a.setAttribute("href", "https://www.youtube.com")
console.log(a.getAttribute("href"))
a.removeAttribute("href")

// ----------------------------------------------------------------------------------------------------------

