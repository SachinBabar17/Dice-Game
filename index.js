
// alert("Working")

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage1="dice"+randomNumber1+".png";
var randomImageSource1="images/" + randomDiceImage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);   

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/" + randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

/*
OR
document.querySelectorAll("img")[1].setAttribute("src", ("images/" + "dice" + (Math.floor(Math.random()*6)+1) + ".png"));
*/




// player1 is greater than player2
if (randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Play1 is wins!";
}

// player1 is greater than player2
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Play2 is wins!🚩";
}

// player1 iand player2 are equal
else{
    document.querySelector("h1").innerHTML="Draw!";
}

// adding time delay To play agin
setTimeout(function(){
    document.querySelector("h1").innerHTML="Refresh me...!";
}, 4000);  //4 sec

