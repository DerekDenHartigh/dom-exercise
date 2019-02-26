"use strict";
/*
    Within the main function:  
        ● Add the "big" class to the "grow-me" paragraph.  
        ● Remove the "big" class to the "shrink-me" paragraph.  
        ● Find all the <li>s and log their text content to the console.  
        ● Set the href of the link to "https://www.example.com" and update the text to say  "somewhere" instead of "nowhere".  
        ● Set the "display" CSS property of the "hide-me" paragraph to "none".  
        ● Set the "display" CSS property of the "show-me" paragraph to "block".  
    ● Get the text that the user enters into the "name" input box and use it to set a welcome  message in the <h1>, e.g., "Hello Grant!". 
*/
function main(){
    let growMeSelector = document.getElementById("grow-me");
    growMeSelector.classList.add("big");
    let shrinkMeSelector = document.getElementById("shrink-me");
    shrinkMeSelector.classList.remove("big");
    let listLog = document.querySelectorAll("li");
    console.log(`listLog: ${listLog}`);
    let linkMod = document.querySelector(".link");
    linkMod.setAttribute("href", "https://www.example.com");
    let hideMe = document.getElementById("hide-me");
    hideMe.style.display("none");
    let showMe = document.getElementById("show-me");
    hideMe.style.display("block");
}
