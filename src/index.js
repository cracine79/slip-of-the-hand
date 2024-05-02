


import { fn1 } from "./scripts/example.js"
import Word from "./scripts/word.js"

console.log("entry point working!")
fn1()


let word = new Word("friendly");

const dataMuseUrl = "https://api.datamuse.com/words?sp=brig*"
fetch(dataMuseUrl)
    .then(response => {return response.json()})
    .then(data => {console.log(data)})


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
// console.log(word.allRightPatterns())


