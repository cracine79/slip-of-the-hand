import Word from "./word.js"


class MacWindow {

    constructor(){
        this.view = document.getElementById("inner-monitor");
        this.form = document.getElementById("getSloth");
        this.innerbox = document.getElementById("innerBox")
        this.slothList = document.getElementById("sloth-list")
        this.typing = new Audio('../sounds/keyboard-typing-5997.mp3')
        this.type = new Audio('../sounds/onetype.mp3')
    }

    async typeWords(sentence, typedOn, wait = 30){
        const letters = sentence.split("");
        let i = 0;
        const keyboard = document.getElementById("keyboard");
     
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
        await this.waitForMs(wait);
        keyboard.className = "unpressed";
    }

    

    async handsTypeWords(sentence, typedOn, wait = 30, orig, color, classname){
        orig ||= sentence;
        const left = "qwertgfdsazxcvb".split("");
        const right = "yuiophjklnm".split("")
        const origLetters = new Word(orig);
        const letters = new Word(sentence);
        const origLettersArr = orig.split("");
        const lettersArr = sentence.split("");
        const origPattern = origLetters.toFullPattern();
        const newPattern = letters.toFullPattern();
        color ||= "red";

        let leftShift = undefined;
        let rightShift  = undefined;

 
        for(let i=0; i<origPattern.length; i++){
            
            if (left.includes(origLettersArr[i]) && leftShift === undefined){
                let leftVertShift = (newPattern[i][0]-origPattern[i][0])
                let leftHorizShift = (newPattern[i][1]-origPattern[i][1])
                leftShift = [leftVertShift, leftHorizShift]
            } else if (rightShift === undefined){
                let rightVertShift = (newPattern[i][0]-origPattern[i][0])
                let rightHorizShift = (newPattern[i][1]-origPattern[i][1])
                debugger;
                rightShift = [rightVertShift, rightHorizShift]
            }
        }

        leftShift ||= [0,0]
        rightShift ||= [0,0]

      
        let i = 0;
        const keyboard = document.getElementById("keyboard");
        const leftHand = document.getElementsByClassName("leftHand")[0];
        const rightHand = document.getElementsByClassName("rightHand")[0];
        
        leftHand.style.paddingLeft = `${70+(leftShift[1]*45)}px`
        
        leftHand.style.paddingTop = `${100+(leftShift[0]*45)}px`
        rightHand.style.paddingLeft = `${360+(rightShift[1]*45)}px`
        rightHand.style.paddingTop = `${100+(rightShift[0]*45)}px`

        while (i<lettersArr.length){
        
            typedOn.append(lettersArr[i]);
            if (lettersArr[i] === " "){
                keyboard.className = "space_pressed"
                rightHand.id = "rh_space_pressed"

            } else {
                keyboard.className = `${lettersArr[i].toLowerCase()}_pressed`
            }

            
            if (left.includes(origLettersArr[i].toLowerCase())){
                
                leftHand.id = `lh_${origLettersArr[i].toLowerCase()}_pressed`
 
             
                rightHand.id = "rh_unpressed"
            } else if (right.includes(origLettersArr[i].toLowerCase())){
                rightHand.id = `rh_${origLettersArr[i].toLowerCase()}_pressed`
  
                leftHand.id = "lh_unpressed"
            }
            classname ||= "keyTopper"
            this.type.play();
            let key = document.createElement('div');
            key.id = `${lettersArr[i].toLowerCase()}_topper`
            key.className = classname;
            key.style.backgroundColor = `${color}`
            let keyHand = document.getElementById('hands_keys');
            keyHand.append(key);
            await this.waitForMs(wait); 
            i++
        }
        keyboard.className = "unpressed";
        leftHand.id = `lh_unpressed`;
        rightHand.id = `rh_unpressed`;
        rightHand.style.paddingLeft = "360px"
        rightHand.style.paddingTop = "100px"
        leftHand.style.paddingLeft = "70px"
        leftHand.style.paddingTop = "100px"
    }


 
    waitForMs(ms){
        return new Promise(resolve => setTimeout(resolve, ms)) 
    }

    

    async fillIntro(){
        this.typing.play()
        const head = "Welcome to Slip of the Hand";
        const welcome = document.getElementById("welcome");
        await this.typeWords(head, welcome)
        const intro1 = "A Slip of the Hand [SlotH] occurs when you type a word or phrase with one or both hands in the incorrect position, and another word or phrase is typed as a result."
        const para1 = document.getElementById("introText1");
        await this.typeWords(intro1, para1)
        const intro2 = "For example, imagine the hands below are trying to type the word  "
        const para2 = document.getElementById("introText2")
       
        await this.typeWords(intro2, para2);
        const dry = "DRY";
        const drySpot = document.getElementById("dry");
        this.typing.pause()
        await this.handsTypeWords(dry, drySpot,700, "dry");
        this.typing.load()
        this.typing.play()
        const intro2Cont= " but accidentally started out typing one key position to the left."  
        const para2Cont = document.getElementById("introText2Cont")
        await this.typeWords(intro2Cont, para2Cont);

        const leftHand = document.getElementById("lh_unpressed");
        const rightHand = document.getElementById("rh_unpressed");
        leftHand.style.paddingLeft = "35px"
        rightHand.style.paddingLeft = "325px"
      
        await this.waitForMs(500);
        const intro2ContMore = "  This would result in typing the word: "
        await this.typeWords(intro2ContMore, para2Cont);
        const set = "SET";
        const setSpot = document.getElementById("set");
        this.typing.pause()
        await this.handsTypeWords(set, setSpot,500, "dry", "blue");
        await this.waitForMs(1000); 
        this.typing.play();
        const slip= "SLIP OF THE HAND!!"
        const slipSpot = document.getElementById("slip")
        await this.typeWords(slip, slipSpot);
        this.typing.pause()
        await this.waitForMs(1000); 
        this.typing.play();
        const intro3 = "Go ahead, give it a try!  Enter a word of phrase and see what slips of the hand you could have had!"
        const para3 = document.getElementById("introText3");
        await this.typeWords(intro3, para3)
        this.typing.pause()

    }

}





export default MacWindow;
let mWind = new MacWindow();
mWind.fillIntro()

export { mWind };


