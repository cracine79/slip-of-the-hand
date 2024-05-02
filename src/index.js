


import { fn1 } from "./scripts/example.js"
import Word from "./scripts/word.js"

console.log("entry point working!")
fn1()


let word = new Word("jot");
// word.allPatternsCompiled();



// fetch(dataMuseUrl)
//     .then(response => {return response.json()})
//     .then(data => {console.log(data)})



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

console.log(word.allPatternsCompiled()[0])
console.log(word.allPossibleSloths())



