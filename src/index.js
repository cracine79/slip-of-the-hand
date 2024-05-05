

import { handleKeyDown } from "./scripts/keyboard.js"
import { fn1 } from "./scripts/example.js"
import Word from "./scripts/word.js"
import Session from "./scripts/session.js"
import {handleWord} from "./scripts/form.js"
import macWindow from "./scripts/macWindow.js"

console.log("entry point working!")
fn1()

const chubby = new macWindow();
chubby.fillIntro()

// const handleKeyDown = function(event){
//     console.log("key!");
//     "abcdefghijklmnopqrstuvwxyz".split("").forEach((letter) => {
//         if (event.key === letter){
//             keyboard.className = `${letter}_pressed`
//         }
//     })
   
// }

// const storeWord = function(event){
//     event.preventDefault();
//     const word = form.inputbox.value;
//     console.log(word)
// }




// const form = document.getElementById('getSloth');
// form.addEventListener("submit", storeWord);


// const session = new Session("hat");
// const sloths = session.generateSlothsArray();
// console.log(sloths)




// let word = new Word("find");
// word.allPatternsCompiled();
// let sloths = word.allPossibleSloths();
// // console.log(sloths)
// const slothArray = [];

// sloths.forEach(async function fetchWord(word){
//     const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
//     if (response.ok){
//         return response.json().then((wordDef) => slothArray.push(wordDef))
//     }
    
    // let dataMuseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    // fetch(dataMuseUrl)
    //     .then(response => {return response.json()})
    //     .then(data => {console.log(data)})
// })
// console.log(slothArray)

// console.log(word)
// console.log(word.KEYBOARD)
// const chopped = word.toFullPattern()
// console.log("word")
// console.log(word.value)
// console.log("left")
// console.log(word.toLeftPattern())
// console.log("right pattern")
// const rightPattern = word.toRightPattern();
// console.log(rightPattern);



// let alp = word.allLeftPatterns();
// let arp = word.allRightPatterns();
// console.log(arp)
// console.log(alp)

// console.log(word.allPatternsCompiled()[0])
// console.log(word.allPossibleSloths())



