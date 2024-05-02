


class Word {
    
    KEYBOARD  = ["1234567890-=".split(""),
                ["tab"].concat("QWERTYUIOP[]".split("")), 
                ["caps lock"].concat("ASDFGHJKL;'".split("")), 
                ["shift"].concat("ZXCVBNM,./".split("")).concat(["shift"])
                ]
    
    constructor(value){
        this.value = value;
       
    }



}



export default Word;