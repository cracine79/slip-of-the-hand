

const keyboard = document.getElementById('keyboard');

keyboard.addEventListener("keypress", handleKeyPress);

const handleKeyPress = (e) => {
    if (e.key === "a"){
        keyboard.className = ".a_pressed"
    }
}