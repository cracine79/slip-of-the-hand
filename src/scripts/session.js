import Word from "./word.js"
import MacWindow from "./macWindow.js"
import mWind from "./macWindow.js"

class Session {
    constructor(input){
        this.word = new Word(input)
        this.allSloths = []
    }
    
    async generateSlothsArray() {
        let sloths = this.word.allPossibleSloths();
        
        let longSloths = sloths.filter(function(el) {
            return el.length > 1 && !el.includes(" ")})
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
        this.allSloths = (slothArray.filter(wordDef => wordDef !== null));
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
        intro.style.display = 'none'
        const slHeader = document.getElementById('slHeader');
        slHeader.innerHTML = "";
      
        const resultWindow = new MacWindow();

        const youEntered = document.createElement('p');
        youEntered.id = "youEntered"
        slHeader.append(youEntered);
        
        const youEnteredText = `You entered the word: `
        resultWindow.playClicking()
        await resultWindow.typeWords(youEnteredText, youEntered);
        resultWindow.typing.pause()
        
        const expWindow = new MacWindow();
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
            resultWindow.playClicking()
            await resultWindow.typeWords(noSloth, otherSloths)
            slHeader.append(brk)
            const celeb = document.createElement('p')
            celeb.id = 'celeb'
            const yayNoSloth = "NO SLOTH! NO SLOTH!"
            slHeader.append(celeb)
            await resultWindow.typeWords(yayNoSloth, celeb)
            resultWindow.typing.pause()
            const danceSloth = document.createElement('img')
            danceSloth.id = "danceSloth"
            danceSloth.src="./images/200w.gif";
            slHeader.append(danceSloth)

            const home = document.getElementById('instructions');
            const submit = document.getElementById('submit');
            home.disabled = false;
            submit.disabled = false;

        } else {

            const otherSloths = document.createElement('p');
            otherSloths.id = "otherSloths"
            slHeader.append(otherSloths);

            let youMighta = "";
            if (slothArray.length === 1){
                youMighta = "WOW!! If you had mispositioned one or both hands, there is only ONE possible resulting SlotH:"
            } else {
                youMighta = `If you had mispositioned one or both hands, there are ${slothArray.length} possible SlotHs you could have typed:`
            }
            resultWindow.playClicking()
            await resultWindow.typeWords(youMighta, otherSloths)
            resultWindow.typing.pause()

            if (slothArray.length < 9) {
                for (const sloth of slothArray) {
                    
                    const li = document.createElement('li');
                    const word = sloth[0].word;
                    slothList1.appendChild(li);
                    await resultWindow.handsTypeWords(word, li, 500, this.word.value, "blue", "slothTopper")
                    await resultWindow.waitForMs(1000)
                  
                    const slothToppers = document.getElementsByClassName("slothTopper")
                    for(let i = 0; i < slothToppers.length; i ++){
                        slothToppers[i].style.display = "none"
                    }
                }
            } else if (slothArray.length > 8 && slothArray.length < 17){
                const slothArray1 = slothArray.slice(0,8);
                const slothArray2 = slothArray.slice(8);

                for (const sloth of slothArray1){
                    const li = document.createElement('li');
                    const word = sloth[0].word;
                    slothList1.appendChild(li);
                    await resultWindow.handsTypeWords(word, li, 500, this.word.value, "blue", "slothTopper")
                    await resultWindow.waitForMs(1000)
                    const slothToppers = document.getElementsByClassName("slothTopper")
                    for(let i = 0; i < slothToppers.length; i ++){
                        slothToppers[i].style.display = "none"
                    }
                }
                for (const sloth of slothArray2){
                    const li = document.createElement('li');
                    const word = sloth[0].word;
                    slothList2.appendChild(li);
                    await resultWindow.handsTypeWords(word, li, 500, this.word.value, "blue", "slothTopper")
                    await resultWindow.waitForMs(1000)
                    const slothToppers = document.getElementsByClassName("slothTopper")
                    for(let i = 0; i < slothToppers.length; i ++){
                        slothToppers[i].style.display = "none"
                    }
                }

             } else {
                const slothArray1 = slothArray.slice(0,8);
                const slothArray2 = slothArray.slice(8,16);
                const slothArray3 = slothArray.slice(16,24)
                for (const sloth of slothArray1){
                    const li = document.createElement('li');
                    const word = sloth[0].word;
                    slothList1.appendChild(li);
                    await resultWindow.handsTypeWords(word, li, 500, this.word.value, "blue", "slothTopper")
                    await resultWindow.waitForMs(1000)
                    const slothToppers = document.getElementsByClassName("slothTopper")
                    for(let i = 0; i < slothToppers.length; i ++){
                        slothToppers[i].style.display = "none"
                    }
                }
                for (const sloth of slothArray2){
                    const li = document.createElement('li');
                    const word = sloth[0].word;
                    slothList2.appendChild(li);
                    await resultWindow.handsTypeWords(word, li, 500, this.word.value, "blue", "slothTopper")
                    await resultWindow.waitForMs(1000)
                    const slothToppers = document.getElementsByClassName("slothTopper")
                    for(let i = 0; i < slothToppers.length; i ++){
                        slothToppers[i].style.display = "none"
                    }
                }
                for (const sloth of slothArray3){
                    const li = document.createElement('li');
                    const word = sloth[0].word;
                    slothList3.appendChild(li);
                    await resultWindow.handsTypeWords(word, li, 500, this.word.value, "blue", "slothTopper")
                    await resultWindow.waitForMs(1000)
                    const slothToppers = document.getElementsByClassName("slothTopper")
                    for(let i = 0; i < slothToppers.length; i ++){
                        slothToppers[i].style.display = "none"
                    }
                }
            }
            const clippy = document.getElementById('clippy')
            if (clippy){
                clippy.style.display = "flex"
            } else {
                const clippy = document.createElement('div')
                clippy.id = "clippy"               
                lists.append(clippy)
                clippy.style.display = "flex"
            }
            const home = document.getElementById('instructions');
            const submit = document.getElementById('submit');
            home.disabled = false;
            submit.disabled = false;
        }
     
    }


   static async getDef(word){
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    if (response.ok) {
        return (response.json());
    } else {
        console.error(`${word} is not a word`);
        return null;
    }
   }

   static async modalDef(word){
    const modalWrapper = document.getElementById('modal-wrapper');
    const modal = document.getElementById('modal');
    const definition = await Session.getDef(word)
    
    modal.innerHTML = "";
    modal.style.display = "flex"
    modalWrapper.style.display = "flex"

    let partOfSpeech = definition[0].meanings[0].partOfSpeech;
    let meaning = definition[0].meanings[0].definitions[0].definition;
    let theWord = definition[0].word.toUpperCase();
    let pronounce = definition[0].phonetic;

    modal.append(`${theWord}: `)
    modal.append(`Phoenetic: ${pronounce}: `)
    modal.append(`Part of Speech: ${partOfSpeech}: `)
    modal.append(`Definition: ${meaning}: `)

   }

}
const lists = document.getElementById('list-box');
lists.addEventListener('click', (e) => {
    console.log(e.target.innerHTML)
    Session.modalDef(e.target.innerHTML)
});

const exp9Place = document.getElementById('slipExp6')
const exp4Place = document.getElementById('slipExp1')
const exp5Place = document.getElementById('slipExp2')
const exp6Place = document.getElementById('slipExp3')
const exp7Place = document.getElementById('slipExp4')
const exp8Place = document.getElementById('slipExp5')
const asSpot = document.getElementById('as');
const upSpot = document.getElementById('up');
const yoSpot = document.getElementById('yo');
const weSpot = document.getElementById('we');
const slothCatBox = document.getElementById('slothcat-box')

let modalWrapper = document.getElementById('modal-wrapper');
modalWrapper.addEventListener('click', (e) => {
    modalWrapper.style.display = "none"
})

const instructions = document.getElementById('instructions')
let introBox = document.getElementById('intro-box');

instructions.addEventListener('click', (e) => {
    e.preventDefault()

    previousRules.style.display = "none"
    nextRules.style.display = "block";
    slothCatBox.style.display = "none";
    const slothGenBox = document.getElementById('slothgen-box');
    slothGenBox.style.display = 'none';
    
    const header = document.getElementById('slHeader')
    const listBox = document.getElementById('list-box')
    const keyboard = document.getElementById('keyboard')
    const rulesBox = document.getElementById("explanation-box");
    const handPosBox = document.getElementById('handpos-box');
    yoSpot.innerHTML = "";
    weSpot.innerHTML = "";
    asSpot.innerHTML = "";
    upSpot.innerHTML = "";
    exp4Place.innerHTML = "";
    exp5Place.innerHTML = "";
    exp6Place.innerHTML = "";
    exp7Place.innerHTML = "";
    exp8Place.innerHTML = "";
    exp9Place.innerHTML = "";

    handPosBox.style.display = "none"
    rulesBox.style.display = 'none';
    listBox.style.display = "none"
    header.style.display = "none"
    introBox.style.display = "block"
    instructions.style.display = "none"
    const rules = document.getElementById('rules')
    rules.style.display = "block"
    keyboard.className = "unpressed";
    const keyToppers = document.getElementsByClassName("keyTopper");
    for(let i =0; i<keyToppers.length; i++){
        keyToppers[i].style.display = 'none'
    }
    
    const dtop = document.getElementById('d_topper')
    const rtop = document.getElementById('r_topper')
    const ytop = document.getElementById('y_topper')
    dtop.style.display = "block";
    rtop.style.display = "block";
    ytop.style.display = "block";

    const stop = document.getElementById('s_topper')
    const etop = document.getElementById('e_topper')
    const ttop = document.getElementById('t_topper')
    stop.style.display = "block";
    etop.style.display = "block";
    ttop.style.display = "block";

    const clippy = document.getElementById('clippy');
    if (clippy){
    clippy.style.display = "none"
    }
})

const rulesButton = document.getElementById('rules')
rulesButton.addEventListener('click', (ev) =>{
    ev.preventDefault();
    const intro = document.getElementById('intro-box');
    intro.style.display = 'none'
    const rules = document.getElementById('rules')
    rules.style.display = 'none';
    const instructions = document.getElementById('instructions');
    instructions.style.display = 'block';
    
    const keyToppers = document.getElementsByClassName("keyTopper");
    for(let i =0; i<keyToppers.length; i++){
        keyToppers[i].style.display = 'none'
    }
    const rulesBox = document.getElementById("explanation-box");
    rulesBox.style.display = 'flex';
    // const explanation = new Explanation(rulesBox);
    // explanation.renderScreen();
})

const clearExpPage = () => {
    const expPage = document.getElementById('explanation-box');
    expPage.style.display = 'none';
}

const handPosButton = document.getElementById('handPosButton')
handPosButton.addEventListener('click', handleSlipExp)

const handPosText = document.getElementById('handpos-text')
const handPosText2 = document.getElementById('handpos-text2')
const expWindow = new MacWindow();
const submit = document.getElementById('submit');
const backRules = document.getElementById('backRules');

async function handleSlipExp (){
    backRules.disabled = true;
    submit.disabled = true;    
    instructions.disabled = true;
    clearExpPage();
    const nextRules = document.getElementById('next');
    nextRules.style.display = "block";
    nextRules.disabled = true;
    
    const handPosBox = document.getElementById('handpos-box');

    handPosText.style.display = "block";
    const handKids = handPosText.children;
    for(let i=0; i<handKids.length; i++){
        handKids[i].style.display = "block";
    }
    handPosText.innerHTML = "";
    const keyboard = document.getElementById('keyboard')
    handPosBox.style.display = 'flex';
    const exp1 = document.createElement('p');
    handPosText.append(exp1)
    const exp1Words = "Each hand is responsible for typing 15 keys in total"
    expWindow.playClicking();
    await expWindow.typeWords(exp1Words, exp1);
    expWindow.typing.pause();   
    keyboard.className = "left_pressed"
    await expWindow.waitForMs(1000);
    keyboard.className = "right_pressed"
    await expWindow.waitForMs(1000);
    keyboard.className = "unpressed"
    let lineBr = document.createElement('p')
    lineBr.id = "breakaway"
    lineBr.innerHTML = '.'
    handPosText.append(lineBr);
    const exp2 = document.createElement('p');
    handPosText.append(exp2)
    const exp2Words = "Each finger is responsible for typing 3 keys, with the exception of the index finger, which covers 6 keys."
    expWindow.typeWords(exp2Words, exp2);

    const invis = document.createElement('p')
    await expWindow.handsTypeWords("qazwsxedcrfvtgb", invis, 150);
    await expWindow.handsTypeWords("yhnujmik", invis, 150,"yhnujmik", "blue")
    let key = document.createElement('div');
    let rightHand = document.getElementById('rh_unpressed');
    key.id = `comma_topper`;
    key.className = "keyTopper";
    key.style.backgroundColor = "blue";
    let keyHand = document.getElementById('hands_keys');
    keyHand.append(key);
    rightHand.id = 'rh_comma_pressed';
    await expWindow.waitForMs(150);
    rightHand.id = 'rh_unpressed'
    await expWindow.handsTypeWords("ol", invis, 150,"ol", "blue")
    let key2 = document.createElement('div');
    key2.id = `period_topper`;
    key2.className = "keyTopper";
    key2.style.backgroundColor = "blue";
    keyHand.append(key2);
    rightHand.id = 'rh_period_pressed';
    await expWindow.waitForMs(150);
    rightHand.id = 'rh_unpressed'
    await expWindow.handsTypeWords("p", invis, 150,"p", "blue")
    let key3 = document.createElement('div');
    key3.id = `semicolon-topper`;
    key3.className = "keyTopper";
    key3.style.backgroundColor = "blue";
    keyHand.append(key3);
    rightHand.id = 'rh_semicolon_pressed';
    await expWindow.waitForMs(150);
    rightHand.id = 'rh_unpressed'
    let key4= document.createElement('div');
    key4.id = `qmark_topper`;
    key4.className = "keyTopper";
    key4.style.backgroundColor = "blue";
    keyHand.append(key4);
    rightHand.id = 'rh_slash_pressed';
    await expWindow.waitForMs(150);
    rightHand.id = 'rh_unpressed'

    await expWindow.waitForMs(1500);
    const keyToppers = document.getElementsByClassName("keyTopper");
    for(let i =0; i<keyToppers.length; i++){
        keyToppers[i].style.display = 'none'
    }

    let lineBr2 = document.createElement('p')
    lineBr2.id = "breakaway2"
    lineBr2.innerHTML = '.'
    handPosText.append(lineBr2);


    const exp3 = document.createElement('p');
    handPosText.append(exp3)
    expWindow.playClicking();;
    const exp3Words = "A hand can slip a maximium of one key vertically and/or one key horizontally, making 8 possible new hand positions for each hand, plus the original position makes 9."
    expWindow.typeWords(exp3Words, exp3);
    

    const leftHand = document.getElementById("lh_unpressed")
    keyboard.className = "left_pressed";
    await expWindow.waitForMs(400);
    keyboard.className = "left_slip_1";
    leftHand.style.marginTop = "-51px";
    await expWindow.waitForMs(400);
    keyboard.className = "left_slip_2";
    leftHand.style.marginLeft = "-51px";
    await expWindow.waitForMs(400);
    keyboard.className = "left_slip_3";
    leftHand.style.marginTop = "0px"
    await expWindow.waitForMs(400);
    keyboard.className = "left_slip_4";
    leftHand.style.marginTop = "52px"
    await expWindow.waitForMs(400);
    keyboard.className = "left_slip_5";
    leftHand.style.marginLeft = "0px"
    await expWindow.waitForMs(400);
    keyboard.className = "left_slip_6";
    leftHand.style.marginLeft = "52px"
    await expWindow.waitForMs(400);
    keyboard.className = "left_slip_7";
    leftHand.style.marginTop = "0px"
    await expWindow.waitForMs(400);
    keyboard.className = "left_slip_8";
    leftHand.style.marginTop = "-51px"
    await expWindow.waitForMs(400);
    keyboard.className = "unpressed";
    leftHand.style.marginTop = "0px"
    leftHand.style.marginLeft = "0px"
    keyboard.className = "left_pressed"
    await expWindow.waitForMs(400);
    keyboard.className = "unpressed";
    await expWindow.waitForMs(400);
    keyboard.className = "right_pressed";
    await expWindow.waitForMs(400);
    keyboard.className = "right_slip_1";
    rightHand.style.marginTop = "-51px"
    await expWindow.waitForMs(400);
    keyboard.className = "right_slip_2";
    rightHand.style.marginLeft = "51px"
    await expWindow.waitForMs(400);
    keyboard.className = "right_slip_3";
    rightHand.style.marginTop = "0px"
    expWindow.typing.pause();
    await expWindow.waitForMs(400);
    
    keyboard.className = "right_slip_4";
    rightHand.style.marginTop = "52px"
    await expWindow.waitForMs(400);
    keyboard.className = "right_slip_5";
    rightHand.style.marginLeft = "0px"
    await expWindow.waitForMs(400);
    keyboard.className = "right_slip_6";
    rightHand.style.marginLeft = "-51px"
    await expWindow.waitForMs(400);
    keyboard.className = "right_slip_7";
    rightHand.style.marginTop = "0px"
    await expWindow.waitForMs(400);
    keyboard.className = "right_slip_8";
    rightHand.style.marginTop = "-51px"
    await expWindow.waitForMs(400);
    keyboard.className = "right_pressed";
    rightHand.style.marginTop = "0px"
    rightHand.style.marginLeft = "0px"
    await expWindow.waitForMs(400);
    keyboard.className = "unpressed";
    
    instructions.disabled = false;
    nextRules.disabled = false;
    submit.disabled = false;   
    backRules.disabled = false;
}

const handPosBox = document.getElementById('handpos-box')
const handPosBox2 = document.getElementById('handpos-box2')
const previousRules = document.getElementById('previous')


backRules.addEventListener('click', (e) =>{
    handPosBox.style.display = "none";
    const explanationBox = document.getElementById('explanation-box');
    explanationBox.style.display = 'block';
    handPosText2.style.display = 'none';
    previousRules.style.display = 'none';
    const slothToppers = document.getElementsByClassName("keyTopper")
    for(let i = 0; i < slothToppers.length; i ++){
        slothToppers[i].style.display = "none"
    }

    exp4Place.innerHTML = "";
    exp5Place.innerHTML = "";
    exp6Place.innerHTML = "";
    exp7Place.innerHTML = "";
    exp8Place.innerHTML = "";
    exp9Place.innerHTML = "";
    yoSpot.innerHTML = "";
    weSpot.innerHTML = "";
    asSpot.innerHTML = "";
    upSpot.innerHTML = "";

})


const slothCatText = document.getElementById('slothcat-text')
const backRules2 = document.getElementById('backRules2');
backRules2.addEventListener('click', (e) =>{
    slothCatBox.style.display = "none";
    const explanationBox = document.getElementById('explanation-box');
    explanationBox.style.display = 'block';
    backRules2.style.display = 'none';
  
    const slothToppers = document.getElementsByClassName("keyTopper")
    for(let i = 0; i < slothToppers.length; i ++){
        slothToppers[i].style.display = "none"
    }

})

const backRules3 = document.getElementById('backRules3');
backRules3.addEventListener('click', (e) => {
    backRules3.style.display = 'none';
    slothGenBox.style.display = 'none'
    const explanationBox = document.getElementById('explanation-box');
    explanationBox.style.display = 'block';
})




const nextRules = document.getElementById('next');

nextRules.addEventListener('click', expNextPage);


async function expNextPage(){
    backRules.disabled = true;
    submit.disabled = true;    
    instructions.disabled = true;
    handPosText.style.display = "none";
    handPosText2.style.display = 'inline';
    nextRules.style.display = "none"
    previousRules.style.display = "block"
    previousRules.disabled = true;

    const exp4 = document.createElement('span');
    
    exp4Place.append(exp4)
    const exp4Words = "Once a hand has slipped, it must follow the same finger pattern of the word, prior to the slip -- see how the word:  "
    expWindow.playClicking();;
    await expWindow.typeWords(exp4Words, exp4);
    expWindow.typing.pause();

    const yo = "YO";

    await expWindow.handsTypeWords(yo, yoSpot, 500);


    const exp5 = document.createElement('span');
    
    exp5Place.append(exp5)
    const exp5Words = " follows the same right hand pattern as "
    expWindow.playClicking();;
    await expWindow.typeWords(exp5Words, exp5);
    expWindow.typing.pause();

    const up = "UP";

    await expWindow.handsTypeWords(up, upSpot, 500, yo, "blue");


    const exp6 = document.createElement('span');
    
    exp6Place.append(exp6)
    const exp6Words = " simply shifted one key position to the right. "
    expWindow.playClicking();
    await expWindow.typeWords(exp6Words, exp6);
    expWindow.typing.pause();

    await expWindow.waitForMs(1000)


    const exp7 = document.createElement('span');
    
    exp7Place.append(exp7);
    const exp7Words = " Similarly we see the same left hand typing pattern shared between";
    expWindow.playClicking();
    await expWindow.typeWords(exp7Words, exp7);
    expWindow.typing.pause();

    const as = "AS";

    await expWindow.handsTypeWords(as, asSpot, 500);

    const exp8 = document.createElement('span');
   
    exp8Place.append(exp8);
    const exp8Words = " and ";
    expWindow.playClicking();
    await expWindow.typeWords(exp8Words, exp8);
    expWindow.typing.pause();

    const we = "WE";

    await expWindow.handsTypeWords(we, weSpot, 500, as, "blue");

    await expWindow.waitForMs(1000)


    const exp9= document.createElement('span');
    
    exp9Place.append(exp9);
    const exp9Words = "Assuming each hand can slip indepdently, there are in total 80 possible hand slips from the correct typing position.";
    expWindow.playClicking();
    await expWindow.typeWords(exp9Words, exp9);
    expWindow.typing.pause();

    backRules.disabled = false;
    submit.disabled = false;    
    instructions.disabled = false;
    previousRules.disabled = false;
}


previousRules.addEventListener('click', (e)=>{
    exp4Place.innerHTML = "";
    exp5Place.innerHTML = "";
    exp6Place.innerHTML = "";
    exp7Place.innerHTML = "";
    exp8Place.innerHTML = "";
    exp9Place.innerHTML = "";
    yoSpot.innerHTML = "";
    weSpot.innerHTML = "";
    asSpot.innerHTML = "";
    upSpot.innerHTML = "";
    const slothToppers = document.getElementsByClassName("keyTopper")
    for(let i = 0; i < slothToppers.length; i ++){
        slothToppers[i].style.display = "none"
    }

  
    handPosText.style.display = "block";
    previousRules.style.display = "none";
    nextRules.style.display = "block";
    

})
    const slothGenBox = document.getElementById("slothgen-box");
const slothGenButton = document.getElementById('slothGenButton');
slothGenButton.addEventListener('click', (e)=>{
    clearExpPage();
    slothGenBox.style.display = "flex";
    slothGenBox.style.marginTop = '15px';
    backRules3.style.display = 'block';
})

const slothCatButton = document.getElementById('slothCatButton');
slothCatButton.addEventListener('click', handleCatButton)

async function handleCatButton (){
    submit.disabled = true;
    const home = document.getElementById('instructions');
    home.disabled = true;
    backRules2.disabled = true;

    clearExpPage();
    for (let i = 0; i<slothCatText.children.length; i++){
        slothCatText.children[i].innerHTML = "";
    }
    backRules2.style.display = 'block';
    const slothCatBox = document.getElementById('slothcat-box');
    slothCatBox.style.display = "block"
    slothCatBox.style.marginTop = "13px";

    const class1 = document.createElement('span');
    const class1Place = document.getElementById('slothCat1')
    class1Place.append(class1)
    const class1Words = "TRUE SlotHs: Created when left and right hand slip in the same direction.  A good example is "
    expWindow.playClicking();
    await expWindow.typeWords(class1Words, class1);
    expWindow.typing.pause();

    const gunSpot = document.getElementById('gun');
    gunSpot.style.color = 'red';
    await expWindow.handsTypeWords("GUN", gunSpot, 500);



    const class2 = document.createElement('span');
    const class2Place = document.getElementById('slothCat2')
    class2Place.append(class2)
    const class2Words = " and  "
    expWindow.playClicking();
    await expWindow.typeWords(class2Words, class2);
    expWindow.typing.pause();

    const himSpot = document.getElementById('him');
    himSpot.style.color = 'blue';
    await expWindow.handsTypeWords("HIM", himSpot, 500, "gun", "blue");

    await expWindow.waitForMs(1000)


    const class3 = document.createElement('span');
    const class3Place = document.getElementById('slothCat3')
    class3Place.append(class3)
    const class3Words = "  Notice how the whole word pattern is shifted one key to the right."
    expWindow.playClicking();
    await expWindow.typeWords(class3Words, class3);
    expWindow.typing.pause();

    await expWindow.waitForMs(2000)
    const slothToppers = document.getElementsByClassName("keyTopper")
        for(let i = 0; i < slothToppers.length; i ++){
            slothToppers[i].style.display = "none"
        }



    const class4 = document.createElement('span');
    const class4Place = document.getElementById('slothCat4')
    class4Place.append(class4)
    const class4Words = "HAlf SlotHs: Created when one hand slips and the other hand is in the correct typing position.  For example: "
    expWindow.playClicking();
    await expWindow.typeWords(class4Words, class4);
    expWindow.typing.pause();


    const tineSpot = document.getElementById('tine');
    tineSpot.style.color = 'red';
    await expWindow.handsTypeWords("TINE", tineSpot, 500);

    const class5 = document.createElement('span');
    const class5Place = document.getElementById('slothCat5')
    class5Place.append(class5)
    const class5Words = " and  "
    expWindow.playClicking();
    await expWindow.typeWords(class5Words, class5);
    expWindow.typing.pause();

    const tubeSpot = document.getElementById('tube');
    tubeSpot.style.color = 'blue';
    await expWindow.handsTypeWords("TUBE", tubeSpot, 500, "TINE", "blue");

    await expWindow.waitForMs(1000)

    const class6 = document.createElement('span');
    const class6Place = document.getElementById('slothCat6')
    class6Place.append(class6)
    const class6Words = " Notice how the left hand is unshifted, but the right hand has slipped one key to the left!  "
    expWindow.playClicking();
    await expWindow.typeWords(class6Words, class6);
    expWindow.typing.pause();

    await expWindow.waitForMs(2000)

    for(let i = 0; i < slothToppers.length; i ++){
        slothToppers[i].style.display = "none"
    }

    const class7 = document.createElement('span');
    const class7Place = document.getElementById('slothCat7')
    class7Place.append(class7)
    const class7Words = "CrAzY SlotHs: Created when each hand slips in a different direction.  For example: "
    expWindow.playClicking();
    await expWindow.typeWords(class7Words, class7);
    expWindow.typing.pause();

    const firmSpot = document.getElementById('firm');
    firmSpot.style.color = 'red';
    await expWindow.handsTypeWords("FINS", firmSpot, 500);


    const class8 = document.createElement('span');
    const class8Place = document.getElementById('slothCat8')
    class8Place.append(class8)
    const class8Words = " and  "
    expWindow.playClicking();
    await expWindow.typeWords(class8Words, class8);
    expWindow.typing.pause();


    const domeSpot = document.getElementById('dome');
    domeSpot.style.color = 'blue';
    await expWindow.handsTypeWords("TOME", domeSpot, 500, "FINS", "blue");

    await expWindow.waitForMs(1000)

    const class9 = document.createElement('span');
    const class9Place = document.getElementById('slothCat9')
    class9Place.append(class9)
    const class9Words = " Notice how the right hand shifts right one key, but the left hand shifts up one key as well!"
    expWindow.playClicking();
    await expWindow.typeWords(class9Words, class9);
    expWindow.typing.pause();

    submit.disabled = false;
    home.disabled = false;
    backRules2.disabled = false;
}

export default Session