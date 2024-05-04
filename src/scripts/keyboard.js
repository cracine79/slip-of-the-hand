const handleKeyDown = function(event){
    "abcdefghijklmnopqrstuvwxyz".split("").forEach((letter) => {
        if (event.key === letter){
            keyboard.className = `${letter}_pressed`;
            leftHand.id = `lh_${letter}_pressed`;
            rightHand.id = `rh_${letter}_pressed`;
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