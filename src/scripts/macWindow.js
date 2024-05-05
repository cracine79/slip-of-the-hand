class macWindow {

    constructor(){
        this.view = document.getElementById("inner-monitor");
        this.form = document.getElementById("getSloth");
        this.innerbox = document.getElementById("innerBox")
    }

    async typeWords(sentence, typedOn, wait = 30){
        const letters = sentence.split("");
        let i = 0;
        const keyboard = document.getElementById("keyboard");
        debugger;
        while (i<letters.length){
            await this.waitForMs(wait); 
            typedOn.append(letters[i]);
            
            i++
        }

    } 

    async keysTypeWords(sentence, typedOn, wait = 30){
        const letters = sentence.split("");
        let i = 0;
        const keyboard = document.getElementById("keyboard");
     
        while (i<letters.length){
            await this.waitForMs(wait); 
            typedOn.append(letters[i]);
            if (letters[i] === " "){
                keyboard.className = "space_pressed"
            } else {
                keyboard.className = `${letters[i].toLowerCase()}_pressed`
            }
            i++
        }
        keyboard.className = "unpressed";
    }

    async handsTypeWords(sentence, typedOn, wait = 30, orig){
        const origLetters = sentence.split("")
        const letters = sentence.split("");
        let i = 0;
        const keyboard = document.getElementById("keyboard");
    
        while (i<letters.length){
            await this.waitForMs(wait); 
            typedOn.append(letters[i]);
            if (letters[i] === " "){
                keyboard.className = "space_pressed"
            } else {
                keyboard.className = `${letters[i].toLowerCase()}_pressed`
            }
            i++
        }
        keyboard.className = "unpressed";
    }

 
    waitForMs(ms){
        return new Promise(resolve => setTimeout(resolve, ms)) 
    }

    async fillIntro(){
        const head = "Welcome to Slip of the Hand";
        const welcome = document.getElementById("welcome");
        await this.typeWords(head, welcome)
        const intro1 = "A Slip of the Hand [SlotH] occurs when you type a word or phrase with one or both hands in the incorrect position, and another word or phrase is typed as a result."
        const para1 = document.getElementById("introText1");
        await this.typeWords(intro1, para1)
        const intro2 = "For example, imagine the hands below are trying to type the word  "
        const para2 = document.getElementById("introText2")
        await this.typeWords(intro2, para2);
        const dry = "DRY  ";
        const drySpot = document.getElementById("dry");
        await this.keysTypeWords(dry, drySpot,700);
        const intro2Cont= " but accidentally started out typing one key position to the left.  This would result in typing the word: "
        const para2Cont = document.getElementById("introText2Cont")
        await this.typeWords(intro2Cont, para2Cont);
        const set = "SET";
        const setSpot = document.getElementById("set");
        await this.keysTypeWords(set, setSpot,500);
        await this.waitForMs(500); 
        const slip= "SLIP OF THE HAND!!"
        const slipSpot = document.getElementById("slip")
        await this.typeWords(slip, slipSpot);
        await this.waitForMs(500); 
        const intro3 = "Go ahead, give it a try!  Enter a word of phrase and see what slips of the hand you could have had!"
        const para3 = document.getElementById("introText3");
        await this.typeWords(intro3, para3)

    }

}

export default macWindow

