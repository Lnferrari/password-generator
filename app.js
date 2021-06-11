const lettersOpt = 'abcdefghijklmnopqrstuvwxyz'
const digitsOpt = '0123456789'
const symbolsOpt = '!@§$%&/()=?#,;.:-_';

// HTML Elements
const visor = document.getElementById('visor')
const btnCopy = document.getElementById('copy')
const btnGenerate = document.getElementById('generate')
const showPsw = document.getElementById('showpsw')
const upperC = document.getElementById('uppercase')
const lowerC = document.getElementById('lowercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const length = document.getElementById('length')


randomPicker = x => x[Math.floor(Math.random() * x.length)];

generatePassword = (length, mixedCase) => {
    let psw = ''
    let char;
    for(let i = 0; i < length; i++){
        char = randomPicker(charset)
        if(mixedCase && char.match(/[a-z]/) && (i+1) % 3 === 0){
            char = char.toUpperCase()
        }
        psw += char
    }
    return psw
}

console.log(generatePassword(20, true))