import Word from "./word.js"

class Session {
    constructor(input){
        this.word = new Word(input)
    }

    generateSlothsArray(){
        let sloths = this.word.allPossibleSloths();

        const slothArray = [];
        sloths.forEach(async function fetchWord(word){
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            if (response.ok){
     
                return response.json().then((wordDef) => slothArray.push(wordDef))
            }
        })
        return slothArray;

    }
}

export default Session