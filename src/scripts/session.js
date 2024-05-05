import Word from "./word.js"
import MacWindow from "./macWindow.js"
import mWind from "./macWindow.js"

class Session {
    constructor(input){
        this.word = new Word(input)
    }

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
        const slothList1 = document.getElementById('sloth-list1');
        slothList1.innerHTML = "";
        const slothList2 = document.getElementById('sloth-list2');
        slothList2.innerHTML = "";
        const slothList3 = document.getElementById('sloth-list3');
        slothList3.innerHTML = "";
        const intro = document.getElementById('intro-box');
        intro.innerHTML = "";
        const header = document.getElementById('slHeader');
        header.innerHTML = "";

        const slHeader = document.getElementById("slHeader")
        const youEntered = document.createElement('p');
        youEntered.id = "youEntered"
        youEntered.innerHTML = `You entered the word: ${this.word.value}`
        slHeader.append(youEntered);

        const brk = document.createElement('p');
        brk.innerHTML = ".";
        brk.className="brk"
        slHeader.append(brk)
      
        
        if (slothArray.length === 0){
            const otherSloths = document.createElement('p');
            otherSloths.id = "otherSloths"
            slHeader.append(brk)
            otherSloths.innerHTML = `${this.word.value.slice(0,1).toUpperCase()+this.word.value.slice(1)} is a SlotH-less pattern!!`
            slHeader.append(otherSloths)
            slHeader.append(brk)
            const celeb = document.createElement('p')
            celeb.innerHTML = " NO SLOTH! NO SLOTH!"
            slHeader.append(celeb)

        } else {

            const otherSloths = document.createElement('p');
            otherSloths.id = "otherSloths"
            otherSloths.innerHTML = `If you had mispositioned one or both hands, you might have typed:`
            slHeader.append(otherSloths);

            if (slothArray.length < 9) {
                slothArray.forEach((sloth)=>{
                
                    const li = document.createElement('li');
                    li.innerHTML = sloth[0].word;
                    li.id = "slothItem"
                    slothList1.appendChild(li);
                })
            } else if (slothArray.length > 8 && slothArray.length < 17){
                const slothArray1 = slothArray.slice(0,8);
                const slothArray2 = slothArray.slice(8);
                slothArray1.forEach((sloth)=>{
                    const li = document.createElement('li');
                    li.innerHTML = sloth[0].word;
                    li.id = "slothItem"
                    slothList1.appendChild(li);
                })
                slothArray2.forEach((sloth)=>{
                    const li = document.createElement('li');
                    li.innerHTML = sloth[0].word;
                    li.id = "slothItem"
                    slothList2.appendChild(li);
                })

             } else {
                const slothArray1 = slothArray.slice(0,8);
                const slothArray2 = slothArray.slice(8,16);
                const slothArray3 = slothArray.slice(16,24)
                slothArray1.forEach((sloth)=>{
                    const li = document.createElement('li');
                    li.innerHTML = sloth[0].word;
                    li.id = "slothItem"
                    slothList1.appendChild(li);
                })
                slothArray2.forEach((sloth)=>{
                    const li = document.createElement('li');
                    li.innerHTML = sloth[0].word;
                    li.id = "slothItem"
                    slothList2.appendChild(li);
                 })
                 slothArray3.forEach((sloth)=>{
                    const li = document.createElement('li');
                    li.innerHTML = sloth[0].word;
                    li.id = "slothItem"
                    slothList3.appendChild(li);
                 })
            }
        }
    }
}

export default Session