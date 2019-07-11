var {cos, sin, tan, abs, pow, atan}=Math;
var pause=false;
var time=0;
var score=0;
var levelScores=new Array(levels.length).fill(0);


document.getElementById("levelsButton").onclick=function(){
	for(e of document.getElementsByClassName("intro")){
		e.style.display="none";
	}
	for(e of document.getElementsByName("playing")){
		e.style.display="block";
	}
	setup(6);
}



document.getElementById("tutorialButton").onclick=function() {
	for(e of document.getElementsByClassName("intro")){
		e.style.display="none";
	}
	for(e of document.getElementsByName("playing")){
		e.style.display="block";
	}
	setup(0);
}

//setup() is called to start a new level every time a new level is needed.

function setup(level){
	
	pressed=N;
	lastPressed=N;
	var startClock=false;
	var gravity=1;
	document.getElementById("score").innerHTML=score;
	
	drawBackground(level,gravity);
	if(level>5){
		document.getElementById("levelMessage").innerText=(level-5)+". "+levels[level].levelText;
	}else{
		document.getElementById("levelMessage").innerText=levels[level].levelText;		
	}

	
	document.getElementById("backOne").onclick=function(){
		clearInterval(a);
		time=0;
		setup(level-1);
	}
	
	document.getElementById("forwardOne").onclick=function(){
		clearInterval(a);
		time=0;
		setup(level+1);
	}
	
	document.getElementById("startOver").onclick=function(){
		clearInterval(a);
		setup(level);
	}
	
	var guyCanvas=document.getElementById("guyCanvas");
	var guyctx=guyCanvas.getContext("2d");
	
	//positions and information about the guy are stored in variable guy, accessible throughout the 
	//level play
	
	var guy={x:levels[level].startx, 
		y: levels[level].starty,
		theta:0,
		fallingFrames:0,
		canvas:guyCanvas,
		ctx:guyctx,
		time: 0}
		
	var solved=false;
	var upWait=false;
	var flipWait=false;
	
	document.getElementById("timer").innerHTML=time;
	
	//the a-Interval is the primary animation tool. It is set to run every 10 milliseconds
	
	var a=setInterval(function(){
		
		//display clock to player
		if(startClock){
			time+=0.01;
			time=Math.round(time*100)/100
			document.getElementById("timer").innerHTML=time;
		}
		
		//if not paused for flipping, we make a move

		if(!pause){
			guy.time +=1;
			if(pressed!=N){startClock=true;}
			
			//move function is in the guy.js file, and controls the motion of the guy
			[___, upWait, flipWait,gravity]=moveFrame(level,guy,upWait,flipWait,gravity);
		
			//gravity is set to 0 only if you have fallen off the world
			if(gravity==0){
				alert("Oh no! You should probably try that again.");
				clearInterval(a);
				setup(level);
			}
			
			//checkFlag determines if the guy is touching the flag. If true, we set the score to be 50 (max),
			//10 (min), and inbetween, we take the score detailed in the level data as the baseline
			
			solved=checkFlag(guy,level,gravity);
			if(solved){
				var congrats="Good job! "
				var scoreAcheived=(Math.round(50-time+levels[level].score));
				if(scoreAcheived>50){scoreAcheived=50;}
				if(scoreAcheived<10){scoreAcheived=10;}
				if(levelScores[level]>scoreAcheived){
					score-=scoreAcheived;
				}else{
					score-=levelScores[level];
					levelScores[level]=scoreAcheived;
					congrats = "New Record! "
				}
				
				clearInterval(a);
				
				//if we are at the last level, trigger a game-win message. If we are ending the tutorial, 
				//trigger an appropriate message to start the "real" game. Otherwise, continue on.
				if(level==levels.length-1){
					score=score+scoreAcheived;
					time=0;
					alert("Congratulations! You won the game with "+score+" points!");
				}else if(level==5){
					score=score+scoreAcheived;
					alert("You've completed the tutorial and scored "+score+" points! Now on to the game.")
					clearInterval(a);
					time=0;
					score=0;
					level+=1;
					setup(level);
				}else{
					score = score+scoreAcheived;
					alert(congrats + "You scored "+scoreAcheived+" points! Try the next level.");
					clearInterval(a);
					time=0;
					level+=1;
					setup(level);	
				}
			}
		}
	}, 10)
	
}