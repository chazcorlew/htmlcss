//DOM selection and manipulation---------------




//events----------------------------------------

//assign a variable to apply to our button
let myButton = document.getElementById("b1")

//event listeners take in the event we are listening for and the function to execute.
myButton.addEventListener("click", domFunction)

function domFunction() {

    //I want to change the buttons text.
myButton.textContent = "thanks for clickin!"


    //I want to change the paragraph's color.

    //first we need to declare a variable
    let MyParagraph = document.getElementById("p1")

    //setAttribute lets us change elements attributes directly
    //this is not best practice
    //two paramters - what attributes we want to change and how we want to change it

    MyParagraph.setAttribute("style", "color:white; background-color:red; font-family:calibri")



}

//get the h3 with DOM selection
let header = document.getElementById("h3")

header.onmouseover = hoverFunc

function hoverFunc(){

    
}