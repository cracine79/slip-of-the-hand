const KEYBOARD  = ["1234567890-=".split(""),
["tab"].concat("qwertyuiop[]".split("")), 
["caps lock"].concat("asdfghjkl;'".split("")), 
["shift"].concat("zxcvbnm,./".split("")).concat(["shift"]),
["","",""," ", " ", " ", " ", " ", " ", "", "", ""]
]

const handleKeyDown = function(event){
    "abcdefghijklmnopqrstuvwxyz".split("").forEach((letter) => {
        if (event.key === letter){
            keyboard.className = `${letter}_pressed`;
            if (KEYBOARD[1].slice(0,6).includes(letter)||
                KEYBOARD[2].slice(0,6).includes(letter)||
                KEYBOARD[3].slice(0,6).includes(letter)||
                KEYBOARD[4].slice(0,6).includes(letter)){
            leftHand.id = `lh_${letter}_pressed`}else{
            rightHand.id = `rh_${letter}_pressed`
            }
        }
    })
   
}


const keyboard = document.getElementById('keyboard');
const leftHand = document.querySelector('.leftHand');
const rightHand = document.querySelector('.rightHand');

addEventListener("keydown", handleKeyDown);
addEventListener("keyup", e => {
    keyboard.className = "unpressed";
    leftHand.id = "lh_unpressed";
    rightHand.id = "rh_unpressed";
})

export {handleKeyDown}