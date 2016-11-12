var game=document.querySelector('.game');
var scoreTxt=document.querySelector('.score');
var allEl=document.querySelectorAll('.game>div');
var redSquare=document.querySelector('.winner');
var redIndex=0,score=0;
game.addEventListener('click',chatchTheRed);
var timeout=setTimeout(function(){ mixSquares(0); }, 2000);

function chatchTheRed(ev){	
	var scoreToAdd=0;
	if(!ev.target.nodeName=="DIV")
	return;
	
	if (ev.target.classList.contains("winner")){
		scoreToAdd=5;		
	}
	else{
		scoreToAdd=-5;
	}
	clearTimeout(timeout);
	mixSquares(scoreToAdd);
}

function mixSquares(scoreToAdd){	
	score+=scoreToAdd;	
	scoreTxt.innerText='Score: '+ score;
	redSquare=document.querySelector('.winner');	
	redSquare.classList.remove("winner");
	redIndex=randIndex(0, allEl.length, redIndex);	
	allEl[Number(redIndex)].classList.add("winner");
	timeout=setTimeout(function(){ mixSquares(-5); }, 2000);
	
}

function randIndex(lowest, highest, excluded) {
	var result=0;
	while (result==excluded){
    	result = Math.floor(Math.random() * (highest - lowest)) + lowest;
   }
   return result; 
}




