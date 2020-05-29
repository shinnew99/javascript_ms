//program data : 
//var number=Math.random();
var number=Math.floor(Math.random()*100)+1;
var guess;
var limit=5;
var won=false;
var guesses=[];

for(var i=1; i<=limit; i++){
    
    guess=parseInt(window.prompt("Guess the number"));

    if(number == guess){
        window.alert("Your guess is correct!");
        document.write("Your guess is correct!");
        won=true;
        break;
    }else{
        var incorrect = document.getElementById("Incorrect\n");
        limit=--limit;
        guesses[i]=guess;
        alert("You have " + limit + " tries left.");
    }    
}


if(!won){
    var end = document.getElementById("end").innerHTML= "Sorry, you ran out of tries. Game Over. <br> The correct number was: " + number;
}


function isPreviousGuess(){
    for(i=0;i<guesses.length;i++){
        if(guesses[i]=guess){
            return true;
        }
        return false;
    }
}

