var game=document.querySelector('.game');
var scoreTxt=document.querySelector('.score');
var allEl=document.querySelectorAll('.game>div');
var redIndex=0,score=0;
game.addEventListener('click',chatchTheRed);

function chatchTheRed(ev){	
	var redSquare=document.querySelector('.winner');	
	if(!ev.target.nodeName=="DIV")
	return;
	
	if (ev.target.classList.contains("winner")){
		score+=5;		
	}
	else{
		score-=5;
	}
	scoreTxt.innerText='Score: '+ score;
	redSquare.classList.remove("winner");
	redIndex=randIndex(0, 4, redIndex);	
	allEl[Number(redIndex)].classList.add("winner");
	
}
function randIndex(lowest, highest, excluded) {
	var result=0;
	while (result==excluded){
    	result = Math.floor(Math.random() * (highest - lowest)) + lowest;
   }
   return result; 
}




