import Word from "./word.js"

var muted = false;

class MacWindow {
    
   

    constructor(){
        this.view = document.getElementById("inner-monitor");
        this.form = document.getElementById("getSloth");
        this.innerbox = document.getElementById("innerBox")
        this.slothList = document.getElementById("sloth-list")
  
            this.typing = new Audio('./sounds/keyboard-typing-5997.mp3')
            this.type = new Audio('./sounds/onetype.mp3')
        
        const mute = document.getElementById('mouse');
        let that = this;
     
        mute.addEventListener('click', this.handleClick);
       
    
    }

    
    playClicking(){
        
    
        if (muted === false){
            this.typing.play()
       

        }

    }

    playClick(){
        if (muted === false){
            this.type.play()

        }
    }
   

    handleClick(){
        const mouse = document.getElementById('mouse');

        if (muted === false){
           muted = true;
           mouse.style.backgroundImage = "url(./images/Unmute.png)"
      
           console.log(muted)
        }else {
            muted = false;
            console.log(muted)
            mouse.style.backgroundImage = 'none';
        }
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
            
            if (left.includes(origLettersArr[i].toLowerCase()) && leftShift === undefined){
                let leftVertShift = (newPattern[i][0]-origPattern[i][0])
                let leftHorizShift = (newPattern[i][1]-origPattern[i][1])
                leftShift = [leftVertShift, leftHorizShift]
            } else if (rightShift === undefined){
                let rightVertShift = (newPattern[i][0]-origPattern[i][0])
                let rightHorizShift = (newPattern[i][1]-origPattern[i][1])
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
         
            this.playClick()
          
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
        const submit = document.getElementById('submit')
        const rules = document.getElementById('rules')
      
        this.playClicking()

        const head = "Welcome to Slip of the Hand";
        const welcome = document.getElementById("welcomeToSloth");
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
      
        this.playClicking()
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
        this.playClicking()
        const slip= "SLIP OF THE HAND!!"
        const slipSpot = document.getElementById("slip")
        await this.typeWords(slip, slipSpot);
        this.typing.pause()
        await this.waitForMs(1000); 
        this.playClicking()
        const intro3 = "Go ahead, give it a try!  Enter a word of phrase and see what slips of the hand you could have had!"
        const para3 = document.getElementById("introText3");
        await this.typeWords(intro3, para3)
        this.typing.pause()

        submit.disabled = false;
        rules.disabled = false;
    }

}

const submit = document.getElementById('submit')
const rules = document.getElementById('rules')




export default MacWindow;


let mWind = new MacWindow();
const startupImage = document.getElementById('startup')
const welcomeIn = document.getElementById('welcome')
const startupMonitor = document.getElementById('startup-monitor')
const form = document.getElementById('getSloth')
const parchment = document.getElementById('text-box')
const header = document.getElementById('welcomeToSloth')
const startupSound = new Audio('./sounds/Startup.wav')
const button = document.getElementById('button')

async function startupSequence (){
    button.style.display='none';
    submit.disabled = true; 
    rules.disabled = true;
    await mWind.waitForMs(500)
    startupImage.style.display = "block";
    startupSound.play()
    await mWind.waitForMs(2000)
    startupImage.style.display = "none";
    await mWind.waitForMs(1000)
    welcomeIn.style.display = 'block'
    await mWind.waitForMs(2500)
    welcomeIn.style.display = 'none'
    
    await mWind.waitForMs(1000)
    startupMonitor.style.display = 'none'
    form.style.display ='flex';
    parchment.style.display = 'block';
    header.style.display = 'block'
    mWind.fillIntro()
}

button.addEventListener("click",((e)=> startupSequence()))
// startupSequence();




export { mWind };


