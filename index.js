let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1=document.getElementById("pass1")
let password2=document.getElementById("pass2")
let count=0
function generating(){
    count++
    if(count===1){
        for(let i=0; i<15; i++){
            let charPass1 = characters[(Math.floor(Math.random()*characters.length))]
            password1.textContent+=charPass1
            let charPass2 = characters[(Math.floor(Math.random()*characters.length))]
            password2.textContent+=charPass2
            }      
    }
    else{
       password1.textContent=""
       password2.textContent=""
       for(let i=0; i<15; i++){
            let charPass1 = characters[(Math.floor(Math.random()*characters.length))]
            password1.textContent+=charPass1
            let charPass2 = characters[(Math.floor(Math.random()*characters.length))]
            password2.textContent+=charPass2
            }       
    }
}
function copyToClipboard(id){
    let coppy=document.getElementById(id).textContent
    let textarea = document.createElement('textarea');
    textarea.value = coppy;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    
    // Select and copy the text inside the textarea
    textarea.select();
    document.execCommand('copy');
    
    // Clean up - remove the textarea from the DOM
    document.body.removeChild(textarea);

    if(count===0)
   showMessage('Generate Your Passwords!');
    else
   showMessage('Password copied to clipboard!');
    
    // Clear message after 2 seconds
    setTimeout(function() {
        clearMessage();
    }, 2000); // 2000 milliseconds = 2 seconds
}

function showMessage(message) {
    let messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = ''; al:
    messageElement.style.fontWeight = 'bold'; 
    messageElement.style.textAlign="center";
}

function clearMessage() {
    let messageElement = document.getElementById('message');
    messageElement.textContent = ''; 
}
   
    