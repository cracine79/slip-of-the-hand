const handleKeyDown = function(event){
    "abcdefghijklmnopqrstuvwxyz".split("").forEach((letter) => {
        if (event.key === letter){
            keyboard.className = `${letter}_pressed`
        }
    })
   
}


const keyboard = document.getElementById('keyboard');

addEventListener("keydown", handleKeyDown);
addEventListener("keyup", e => keyboard.className = "unpressed")

export {handleKeyDown}