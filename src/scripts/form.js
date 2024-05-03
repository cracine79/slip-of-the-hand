import Session from "./session.js"

const handleWord = function(event){
    event.preventDefault();
    const word = form.inputbox.value;
    const session = new Session(word)
    const result = session.generateSlothsArray();
    console.log(result);
}




const form = document.getElementById('getSloth');
form.addEventListener("submit", handleWord);

export {handleWord}