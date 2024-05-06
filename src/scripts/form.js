import Session from "./session.js"

function handleWord (event){
    event.preventDefault();
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
}




const form = document.getElementById('getSloth');
form.addEventListener("submit", handleWord);

export {handleWord}