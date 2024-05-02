


import { fn1 } from "./scripts/example.js"
import Word from "./scripts/word.js"

console.log("entry point working!")
fn1()


let word = new Word("hello");

// console.log(word)
console.log(word.KEYBOARD)
console.log(word.toFullPattern())
