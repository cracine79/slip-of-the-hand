

// import Keyboard from ".scripts/keyboard.js"
import { fn1 } from "./scripts/example.js"
import Word from "./scripts/word.js"
import Session from "./scripts/session.js"

console.log("entry point working!")
fn1()


const handleKeyPress = function(event){
    console.log("key!");
    if (event.key === "a"){
        keyboard.className = "a_pressed"
    }
}

const keyboard = document.getElementById('keyboard');

addEventListener("keydown", handleKeyPress);




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



