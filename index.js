const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function createPassword(){

    let password =""
    let password2 =""

for(let i = 0 ; i < 15 ; i++){
    password += characters[Math.floor(Math.random() * characters.length)]
    password2 += characters[Math.floor(Math.random() * characters.length)]
}
 
let btn1 = document.getElementById("button-el")
let btn2 = document.getElementById("button2-el")

btn1.textContent = password
btn2.textContent = password2

}
