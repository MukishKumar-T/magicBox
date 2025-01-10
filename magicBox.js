var randomNumber = Math.floor(Math.random() * 10)+1;
var attempts = 5;
var lvl = 1;
document.getElementById('btn').addEventListener('click',function(){
    var guess = parseInt(document.getElementById('guessInput').value);
    // attempts++;
    if(guess === randomNumber){
        document.getElementById('cnt').innerHTML="You have opened "+lvl+" boxes.";
        display("You guessed it right!");
        lvl++;
        randomNumber = Math.floor(Math.random() * 10);
    }
    else if(guess < randomNumber){
        display("Number is too Low!");
    }
    else{
        display("Number is too High!");
    }
    if(lvl === 6){
        display("Congratulations! You have opened all the boxes.")
        var i = document.getElementById('img');
        img.src="WhatsApp Image 2025-01-09 at 15.02.55.jpeg";
    }
})

function display(msg){
    document.getElementById('msg').textContent = msg;
}
