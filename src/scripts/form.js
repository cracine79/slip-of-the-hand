import Session from "./session.js"

function handleWord (event){
    event.preventDefault();
    
    const clippy = document.getElementById('clippy');
    if (clippy) {
    clippy.style.display = "none"
    }
    const intro = document.getElementById('intro-box');
    intro.style.display = 'none'
    const explanation = document.getElementById('explanation-box');
    explanation.style.display = 'none';
    const word = form.inputbox.value;
    const session = new Session(word)
    const rules = document.getElementById('rules')
    rules.style.display = 'none';
    const home = document.getElementById('instructions');
    home.style.display = 'inline'
    session.generateSlothsArray();
    const header = document.getElementById('slHeader')
    const listBox = document.getElementById('list-box')
    listBox.style.display = "flex"
    header.style.display = "inline"
    const keyToppers = document.getElementsByClassName("keyTopper");
    for(let i =0; i<keyToppers.length; i++){
        keyToppers[i].style.display = 'none'
    }
}




const form = document.getElementById('getSloth');
form.addEventListener("submit", handleWord);

export {handleWord}