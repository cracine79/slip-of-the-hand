import Session from "./session.js"

function handleWord (event){
    event.preventDefault();
    const word = form.inputbox.value;
    const session = new Session(word)
    session.generateSlothsArray();
}




const form = document.getElementById('getSloth');
form.addEventListener("submit", handleWord);

export {handleWord}