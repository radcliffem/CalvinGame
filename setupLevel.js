var {cos, sin, tan, abs, pow, atan}=Math;

var pause=false;
var time=0;
var score=0;
var levelScores={};
var levelTimes={};
var levels=[];

if(window.localStorage.getItem('scores')!=undefined){
	levelScores = JSON.parse(window.localStorage.getItem('scores'));
	levelTimes = JSON.parse(window.localStorage.getItem('times'));
	setInitialScores();
}

function switchToPlay(){
	
	for(e of document.getElementsByClassName("intro")){
		e.style.display="none";
	}
	for(e of document.getElementsByName("playing")){
		e.style.display="block";
	}
}

document.getElementById("worldOneButton").onclick=function(){
	
	switchToPlay();
	
	levels = worldOne;
	if(levelScores.worldOne==undefined){
		levelScores.worldOneScores = new Array(levels.length).fill(0);
		levelScores.worldOne = 0;
		levelTimes.worldOne=new Array(levels.length).fill(0);
		saveScores();
	}
	
	setup(0,"worldOne");
}

document.getElementById("worldTwoButton").onclick=function(){
	
	switchToPlay();
	
	levels = worldTwo;
	if(levelScores.worldTwo==undefined){
		levelScores.worldTwoScores = new Array(levels.length).fill(0);
		levelScores.worldTwo = 0;	
		levelTimes.worldTwo=new Array(levels.length).fill(0);
		saveScores();
	}
	
	setup(0,"worldTwo");
}

document.getElementById("worldThreeButton").onclick=function(){
	
	switchToPlay();
	
	levels = worldThree;
	if(levelScores.worldThree == undefined){
		levelScores.worldThreeScores = new Array(levels.length).fill(0);
		levelScores.worldThree = 0;		
		levelTimes.worldThree=new Array(levels.length).fill(0);
		saveScores();
	}
	
	setup(0,"worldThree");
}




document.getElementById("tutorialButton").onclick=function() {
	
	switchToPlay();
	
	levels = tutorial;
	if(levelScores.tutorial == undefined){
		levelScores.tutorialScores = new Array(levels.length).fill(0);
		levelScores.tutorial = 0;		
		levelTimes.tutorial=new Array(levels.length).fill(0);
		saveScores();
	}
	
	setup(0,"tutorial");
}

//setup() is called to start a new level every time a new level is needed.

function setup(level,world){
	pressed=N;
	lastPressed=N;
	var startClock=false;
	var gravity=1;
	document.getElementById("bestScore").innerHTML=levelScores[world+"Scores"][level];
	document.getElementById("bestTime").innerHTML = levelTimes[world][level];
	
	drawBackground(level,gravity);
	document.getElementById("levelMessage").innerText=(level+1)+". "+levels[level].levelText;		
	
	document.getElementById("homeButton").onclick=function(){
		resetButtons(level);
		
		
		for(e of document.getElementsByClassName("intro")){
			e.style.display="block";
		}
		for(e of document.getElementsByName("playing")){
			e.style.display="none";
		}
		clearInterval(a);
	}
	
	document.getElementById("backOne").onclick=function(){
		clearInterval(a);
		time=0;
		setup(level-1,world);
	}
	
	document.getElementById("forwardOne").onclick=function(){
		clearInterval(a);
		time=0;
		if(level==levels.length){
			resetButtons(level);


			for(e of document.getElementsByClassName("intro")){
				e.style.display="block";
			}
			for(e of document.getElementsByName("playing")){
				e.style.display="none";
			}
		}else{setup(level+1,world);}

	}
	
	document.getElementById("startOver").onclick=function(){
		clearInterval(a);
		resetButtons(level);
		setup(level,world);
	}
	
	var guyCanvas=document.getElementById("guyCanvas");
	var guyctx=guyCanvas.getContext("2d");
	
  // Scale up canvas by pixelRatio keeping same screen dimensions (do this once).
	if (window.devicePixelRatio && !guyCanvas.dataset.is_scaled) {
	  guyCanvas.dataset.is_scaled = 1;
	  guyCanvas.style.width = guyCanvas.width + "px";
	  guyCanvas.style.height = guyCanvas.height + "px";
	  guyCanvas.width = devicePixelRatio * guyCanvas.width;
	  guyCanvas.height = devicePixelRatio * guyCanvas.height;
	  guyctx.scale(devicePixelRatio, devicePixelRatio);
	}
	
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
				resetButtons(level);
				clearInterval(a);
				
				setup(level,world);
			}
			
			//checkFlag determines if the guy is touching the flag. If true, we set the score to be 50 (max),
			//10 (min), and inbetween, we take the score detailed in the level data as the baseline
			
			solved=checkFlag(guy,level,gravity);
			if(solved){
				resetButtons(level);
				
				var congrats="Good job! "
				var scoreAcheived=(Math.round(50-time+levels[level].score));
				if(scoreAcheived>50){scoreAcheived=50;}
				if(scoreAcheived<10){scoreAcheived=10;}
				if(levelScores[world+"Scores"][level]>scoreAcheived){
					levelScores[world]-=scoreAcheived;
				}else{
					levelScores[world]-=levelScores[world+"Scores"][level];
					levelScores[world+"Scores"][level]=scoreAcheived;
					congrats = "New Record! "
				}
				
				clearInterval(a);
				
				//if we are at the last level, trigger a game-win message. If we are ending the tutorial, 
				//trigger an appropriate message to start the "real" game. Otherwise, continue on.
				if(level==levels.length-1){
					levelScores[world]=levelScores[world]+scoreAcheived;
					if(levelTimes[world][level]==0 || time<levelTimes[world][level]){
						levelTimes[world][level]=Math.round(time*100-1)/100;
					}
					saveScores();
					
						
					document.getElementById(world+"Score").innerText = levelScores[world]+"/"+(50*levels.length);
					
					time=0;
					alert("Congratulations! You finished the world with "+levelScores[world]+" points!");	
					
					for(e of document.getElementsByClassName("intro")){
						e.style.display="block";
					}
					for(e of document.getElementsByName("playing")){
						e.style.display="none";
					}
					
				}
				else{
					levelScores[world] = levelScores[world]+scoreAcheived;
					if(levelTimes[world][level]==0 || Math.round(time*100)/100<levelTimes[world][level]){
						levelTimes[world][level]=Math.round(time*100-1)/100;
					}
					saveScores();
					
					
					document.getElementById(world+"Score").innerText = levelScores[world]+"/"+(50*levels.length);
					alert(congrats + "You scored "+scoreAcheived+" points! Try the next level.");
					clearInterval(a);
					time=0;
					level+=1;
					setup(level,world);	
				}
			}
		}
	}, 10)
	
}

function setInitialScores(){
	setInitial("tutorial");
	setInitial("worldOne");
	setInitial("worldTwo");
	setInitial("worldThree");
}

function setInitial(world){
	if(levelScores[world]!=undefined){
		while(levelScores[world+"Scores"].length<eval(world).length){
			levelScores[world+"Scores"].push(0);
			levelTimes[world].push(0);
		}
		document.getElementById(world+"Score").innerText=levelScores[world]+"/"+(50*levelScores[world+"Scores"].length);
	}
}

function saveScores(){
	window.localStorage.setItem('scores',JSON.stringify(levelScores));
	window.localStorage.setItem('times',JSON.stringify(levelTimes));
}