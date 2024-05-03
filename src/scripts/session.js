import Word from "./word.js"

class Session {
    constructor(input){
        this.word = new Word(input)
    }

    // async generateSlothsArray(){
    //     let sloths = this.word.allPossibleSloths();
    //     const slothArray = [];

    //     for (const word of sloths) {
        
    //             const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    //             if (response.ok) {
    //                 const wordDef = await response.json();
    //                 slothArray.push(wordDef);
    //             } else {
    //                 console.log(`${word} is not a word`)
    //             }
            
    //     }
    //     console.log(slothArray);
    //     console.log(slothArray[0])
    //     return slothArray;
    // }

    async generateSlothsArray() {
        let sloths = this.word.allPossibleSloths();
        const slothPromises = sloths.map(async (word) => {
            try {
                const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
                if (response.ok) {
                    return response.json();
                } else {
                    console.error(`${word} is not a word`);
                    return null;
                }
            } catch (error) {
                console.error(`Error fetching definition for ${word}: ${error.message}`);
                return null;
            }
        });
    
        const slothArray = await Promise.all(slothPromises);
    
        console.log(slothArray.filter(wordDef => wordDef !== null));
        this.printSloths(slothArray.filter(wordDef => wordDef !== null));
    }



    printSloths(slothArray){
        const slothList = document.getElementById('sloth-list');
   
        const your = document.createElement('li');
        your.innerHTML = `You entered the word ${this.word.value}`
        slothList.append(your);
        
        if (slothArray.length === 0){
            const otherSloths = document.createElement('li');
            otherSloths.innerHTML = `${this.word.value.slice(0,1).toUpperCase()+this.word.value.slice(1)} is a SlotH-less pattern!! NO SLOTH! NO SLOTH!`
            slothList.append(otherSloths)
 
        } else {

        const otherSloths = document.createElement('li');
        otherSloths.innerHTML = `If you had mispositioned one or both hands, you might have typed:`
        slothList.append(otherSloths)
        
        

        slothArray.forEach((sloth)=>{
         
            const li = document.createElement('li');
            li.innerHTML = sloth[0].word;
            slothList.appendChild(li);
        })

        }
        
   
       
    }


}

export default Session