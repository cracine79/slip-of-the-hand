import Word from "./word.js"
import MacWindow from "./macWindow.js"
import mWind from "./macWindow.js"

class Session {
    constructor(input){
        this.word = new Word(input)
    }

    async generateSlothsArray() {
        let sloths = this.word.allPossibleSloths();
        let longSloths = sloths.filter(function(el) {return el.length > 1 && !el.includes(" ")})
       
        const slothPromises = longSloths.map(async (word) => {
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
        this.printSloths(slothArray.filter(wordDef => wordDef !== null));
    }

    async printSloths(slothArray){
        const slothList1 = document.getElementById('sloth-list1');
        slothList1.innerHTML = "";
        const slothList2 = document.getElementById('sloth-list2');
        slothList2.innerHTML = "";
        const slothList3 = document.getElementById('sloth-list3');
        slothList3.innerHTML = "";
        const intro = document.getElementById('intro-box');
        intro.innerHTML = "";
        const slHeader = document.getElementById('slHeader');
        slHeader.innerHTML = "";

        const resultWindow = new MacWindow();


        const youEntered = document.createElement('p');
        youEntered.id = "youEntered"
        slHeader.append(youEntered);

        const youEnteredText = `You entered the word: `
        await resultWindow.typeWords(youEnteredText, youEntered);
        const yourWord = `${this.word.value}`
        
        await resultWindow.handsTypeWords(yourWord, youEntered, 500, yourWord)
      
        const brk = document.createElement('p');
        brk.innerHTML = ".";
        brk.className="brk"
        slHeader.append(brk)
        const brk2 = document.createElement('p');
        brk2.innerHTML = ".";
        brk2.className="brk2"
      
        
        
        if (slothArray.length === 0){
            slHeader.append(brk2)
            const otherSloths = document.createElement('p');
            otherSloths.id = "otherSloths"
            slHeader.append(otherSloths)
            const noSloth = `${this.word.value.slice(0,1).toUpperCase()+this.word.value.slice(1)} is a SlotH-less pattern!!`
            await resultWindow.typeWords(noSloth, otherSloths)
            slHeader.append(brk)
            const celeb = document.createElement('p')
            const yayNoSloth = "NO SLOTH! NO SLOTH!"
            slHeader.append(celeb)
            await resultWindow.typeWords(yayNoSloth, celeb)

        } else {

            const otherSloths = document.createElement('p');
            otherSloths.id = "otherSloths"
            slHeader.append(otherSloths);

           
                let youMighta = `If you had mispositioned one or both hands, there are ${slothArray.length} possible SlotHs you could have typed:`
           
                await resultWindow.typeWords(youMighta, otherSloths)

            if (slothArray.length < 9) {
                for (const sloth of slothArray) {
                    
                    const li = document.createElement('li');
                    const word = sloth[0].word;
                    slothList1.appendChild(li);
                    await resultWindow.handsTypeWords(word, li, 500, this.word.value)
                    await resultWindow.waitForMs(1000)
                }
            } else if (slothArray.length > 8 && slothArray.length < 17){
                const slothArray1 = slothArray.slice(0,8);
                const slothArray2 = slothArray.slice(8);

                for (const sloth of slothArray1){
                    const li = document.createElement('li');
                    const word = sloth[0].word;
                    slothList1.appendChild(li);
                    await resultWindow.handsTypeWords(word, li, 500, this.word.value)
                    await resultWindow.waitForMs(1000)
                }
                for (const sloth of slothArray2){
                    const li = document.createElement('li');
                    const word = sloth[0].word;
                    slothList2.appendChild(li);
                    await resultWindow.handsTypeWords(word, li, 500, this.word.value)
                    await resultWindow.waitForMs(1000)
                }

             } else {
                const slothArray1 = slothArray.slice(0,8);
                const slothArray2 = slothArray.slice(8,16);
                const slothArray3 = slothArray.slice(16,24)
                for (const sloth of slothArray1){
                    const li = document.createElement('li');
                    const word = sloth[0].word;
                    slothList1.appendChild(li);
                    await resultWindow.handsTypeWords(word, li, 500, this.word.value)
                    await resultWindow.waitForMs(1000)
                }
                for (const sloth of slothArray2){
                    const li = document.createElement('li');
                    const word = sloth[0].word;
                    slothList2.appendChild(li);
                    await resultWindow.handsTypeWords(word, li, 500, this.word.value)
                    await resultWindow.waitForMs(1000)
                }
                for (const sloth of slothArray3){
                    const li = document.createElement('li');
                    const word = sloth[0].word;
                    slothList3.appendChild(li);
                    await resultWindow.handsTypeWords(word, li, 500, this.word.value)
                    await resultWindow.waitForMs(1000)
                }
            }
        }
    }


   static modalDef(word){
    console.log("clicked!")
   }

}
const lists = document.getElementById('list-box');
lists.addEventListener('click', (e) => 
    Session.modalDef()
);

export default Session