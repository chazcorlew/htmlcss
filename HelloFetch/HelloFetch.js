//pokeAPI base url - makes for cleaner code
//find this url variable used in our fetch request below
const url = "https://pokeapi.co/api/v2/pokemon/"

//DOM select the 3 table data elements that i want to fill with data
let pokename = document.getElementById("pokename")
let poketype = document.getElementById("poketype")
let pokepic = document.getElementById("pokepic")

//when the user clicks the button, execute the fetchData function
document.getElementById("pokeButton").onclick = fetchData
//cleaner way to add event listeners to an element

//this function will send HTTP request for poke data
//makes use of a FETCH REQUEST. 
//functions with a fetch request must start with "async" keyword
async function fetchData(){

//put the user input into a variable (with DOM selection & .value)
let userInput = document.getElementById("userInput").value

//use the fetch method to send a request to the pokeAPI with the userinput
//await pauses the function until data comes back
let response = await fetch(url + userInput)
//fetch sends a GET request by default

//now we need to check if promise returns successfully
if(response.status === 200) {
    let data = await response.json() //turn the JSON data into a JS object
    console.log(data) //so we can see incoming data
    renderHTML(data) //send our pokemon data too the renderHTML function below

} else {
    document.getElementById("header").innerText = "It got away! Try again..."
}

}

// this function will manipulate the DOM (Document Object Model) based on the incoming pokemon data
function renderHTML(data){

    //populate the previously empty <td> elements
    pokename.innerText = data.name
    poketype.innerText = data.types[0].type.name

    //if there is a second type, render that as well
    if(data.types[1]){
        poketype.innerText += (" & " + data.types[1].type.name)
    }

    //pokepic will be different since its not simply text
    pokepic.setAttribute("src", data.sprites.front_default)

    //shinies

   let pokepic2 = document.getElementById("pokepic2")

   pokepic2.setAttribute("src", data.sprites.front_shiny)

}

