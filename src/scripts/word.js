   const KEYBOARD  = ["1234567890-=".split(""),
                ["tab"].concat("qwertyuiop[]".split("")), 
                ["caps lock"].concat("asdfghjkl;'".split("")), 
                ["shift"].concat("zxcvbnm,./".split("")).concat(["shift"]),
                ["","",""," ", " ", " ", " ", " ", " ", "", "", ""]
                ]


class Word {
    
    KEYBOARD  = ["1234567890-=".split(""),
                ["tab"].concat("qwertyuiop[]".split("")), 
                ["caps lock"].concat("asdfghjkl;'".split("")), 
                ["shift"].concat("zxcvbnm,./".split("")).concat(["shift"]),
                ["","",""," ", " ", " ", " ", " ", " ", "", "", ""]
                ]

    DIRS = [[-1, 1], [0, 1], [1, 1],
            [-1, 0], [0,0], [-1, 0],
            [-1, -1], [0, -1], [1, -1]];
           
    
    constructor(value){
        this.value = value.toLowerCase();
        this.positionArr = this.toFullPattern();
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

    toRightPattern(){
        const rightPattern = [];
        for(let i = 0; i<this.positionArr.length; i++){
            if (this.positionArr[i][1]>5){
                rightPattern[i] = this.positionArr[i]
            } else {
                rightPattern[i] = undefined;
            }
        }
        return rightPattern;
    }


    toLeftPattern(){
        const leftPattern = [];
        for(let i = 0; i<this.positionArr.length; i++){
            if (this.positionArr[i][1]<=5){
                leftPattern[i] = this.positionArr[i];
            } else {
                leftPattern[i] = undefined;
            }
        }
        return leftPattern;
    }

    allRightPatterns = () => {
        const rightPattern = this.toRightPattern();
        const allTheRightPatterns = [];
        this.DIRS.forEach((dir) => {
            let subArr = [];
            for(let i = 0; i< rightPattern.length; i++){
                if (rightPattern[i] === undefined){
                    subArr[i] = undefined;
                } else {
                    subArr[i] = ([rightPattern[i][0]+dir[0], rightPattern[i][1]+dir[1]]);
                }
            }
            allTheRightPatterns.push(subArr)
        })
        return allTheRightPatterns;
    }

    allLeftPatterns = () => {
        const leftPattern = this.toLeftPattern();
        const allTheLeftPatterns = [];
        this.DIRS.forEach((dir) => {
            let subArr = [];
            for(let i = 0; i< leftPattern.length; i++){
                if (leftPattern[i] === undefined){
                    subArr[i] = undefined;
                } else {
                    subArr[i] = ([leftPattern[i][0]+dir[0], leftPattern[i][1]+dir[1]]);
                }
            }
            allTheLeftPatterns.push(subArr)
        })
        return allTheLeftPatterns;
    }

    allPatternsCompiled(){
        const alp = this.allLeftPatterns();
        const arp = this.allRightPatterns();
        const allPatternsBothHands = [];
        for(let i = 0; i<alp.length; i++){
            for(let j = 0; j<alp.length; j++){
                let innerArray = [];
                for (let k = 0; k<alp[0].length; k++){
                    if(alp[i][k]!==undefined){
                        innerArray.push(alp[i][k]);
                    } else {
                        innerArray.push(arp[j][k]);
                    }
                }
                allPatternsBothHands.push(innerArray);
            }
        }
        return allPatternsBothHands;
    }
  
    static patternToWord(pattern){
        const arr = [];
        const alphabet="abcdefghijklmnopqrstuvwxyz 1234567890-=`,./;'[]".split("");
        let caps = false; 
        pattern.forEach((pos)=>{
            const char = KEYBOARD[pos[0]][pos[1]];
            if (alphabet.includes(char)){
                arr.push(char)
            };
        })
        return arr.join("")
    }

    allPossibleSloths(){
        const allPatsCompiled = this.allPatternsCompiled();
        const allWordsCompiled = [];
        allPatsCompiled.forEach((pat)=>{
            if (Word.patternToWord(pat) !== this.value && !allWordsCompiled.includes(Word.patternToWord(pat))){
            allWordsCompiled.push(Word.patternToWord(pat))
            }
        })
        return allWordsCompiled;
    }
}



export default Word;