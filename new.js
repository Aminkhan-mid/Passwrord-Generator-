// Creating a variable called characters which holds an array of random combination of letters, numbers, and characters.
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

// Grabing the ids of pass 1 and 2 and storing the in variables.
let randomOne = document.getElementById("pass-1")
let randomTwo = document.getElementById("pass-2")

// creating  a function which generates random combination from the characters variabled which has upto 15 different types of characters.
function random(){
    let results = ""
    for (i = 0; i < 15; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        results += characters[randomIndex]
    }
    return results
}
// creating the funciton of generate button when clicked it calls the random() funciton to give 15 random characters to display on pass 1 and 2.
function generate(){
    let pass1 = random()
    let pass2 = random()

    randomOne.textContent = pass1
    randomTwo.textContent = pass2
}
