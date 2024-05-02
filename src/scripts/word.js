


class Word {
    
    KEYBOARD  = ["1234567890-=".split(""),
                ["tab"].concat("QWERTYUIOP[]".split("")), 
                ["caps lock"].concat("ASDFGHJKL;'".split("")), 
                ["shift"].concat("ZXCVBNM,./".split("")).concat(["shift"])
                ]
    
    constructor(value){
        this.value = value.toUpperCase();
    }

    toFullPattern() {
        const positionArr = [];
        let arr = [];
        arr = this.value.split("");
        for (let i=0; i< arr.length; i++){
         
            for (let j=0; j<4; j++){
      
                for(let k = 0; k<(this.KEYBOARD[j].length); k++){
                   
                    if(arr[i] === this.KEYBOARD[j][k]){
                        positionArr.push([j,k])
                    }
                }
            }
        }

        return positionArr;
    }



}



export default Word;