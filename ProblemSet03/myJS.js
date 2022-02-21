/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
const block = document.getElementById("color-block");
const text = document.getElementById("color-name");
let isClicked = false;

function changeColor(){
    
    //Write a condition determine what color it should be changed to
    if(isClicked){
        //change the background color using JS
        block.style.backgroundColor = "#F08080";
       
        //Change the text of the color using the span id color-name
        text.textContent = "#F08080";
        
    }
    else{
        //change the background color using JS
        block.style.backgroundColor = "#00838F";
        
        //Change the text of the color using the span id color-name
        text.textContent = "#00838F";

    }
    isClicked = !isClicked;
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    var temp = document.getElementById("f-input").value;
    temp = ((temp - 32) * 5/9);
    //Send the calculated temperature to HTML
    document.getElementById("c-output").textContent = temp;
}


