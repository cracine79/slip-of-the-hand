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
                KEYBOARD[4].slice(0,6).includes(letter)
            ){
            leftHand.id = `lh_${letter}_pressed`}else{
            rightHand.id = `rh_${letter}_pressed`
            }
        } else if (event.key === "["){
            rightHand.id = "rh_lbrac_pressed";
            keyboard.className = "lbrac_pressed"
        } else if (event.key === "]"){
            rightHand.id = "rh_rbrac_pressed";
            keyboard.className = "rbrac_pressed"
        } else if (event.key === ";"){
            rightHand.id = "rh_semicolon_pressed";
            keyboard.className = "semicolon_pressed";
        } else if (event.key === ","){
            rightHand.id = "rh_comma_pressed";
            keyboard.className = "comma_pressed";
        } else if (event.key === "."){
            rightHand.id = "rh_period_pressed";
            keyboard.className = "period_pressed";
        } else if (event.key === "/") {
            rightHand.id = "rh_slash_pressed";
            keyboard.className = "slash_pressed"
        } else if (event.key === `'`){
            rightHand.id = "rh_quote_pressed";
            keyboard.className = "quote_pressed"
        } else if (event.code === 'Space'){
            event.preventDefault();
            rightHand.id = "rh_space_pressed";
            leftHand.id="lh_space_pressed";
            keyboard.className = "space_pressed"
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