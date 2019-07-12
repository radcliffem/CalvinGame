document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup", keyUpHandler, false);
var N=0, R=1, L=-1, U=3;

var lastPressed=N;
var pressed=N;

function keyDownHandler(e){
	if(e.key=="ArrowRight"){
		pressed=R;
	}else if(e.key=="ArrowLeft"){
		pressed=L;
	}else if(e.key=="ArrowUp"){
		pressed=U;
	}
}

function keyUpHandler(e){
	lastPressed=pressed;
	pressed=N;
}




function moveFrame(level, guy, upWait, flipWait, gravity){
	
	//First check if the player has pressed Up button at a portal. The variable upWait will be set to
	//true if they have just come from a portal, so they don't boing back and forth between two portals 
	//of the same color. So if player has pressed UP and are not just coming from a portal, we run 
	//checkPortal. Otherwise, run makeMove.
		
	if(pressed==U){
		flipWait=false;
		if(!upWait){
			return checkUpPress(level,guy,upWait, flipWait, gravity);
		}else{
			return makeMove(level, guy, true, flipWait, gravity,false);
		}
	}else{
		//if Up button is not pressed, we check first if we are hitting a wall that is preventing
		//player from moving further. If not, we increment the x-value appropriately. Then run makeMove
		
		var wall=false;
		wall=checkWall(level, guy, gravity,pressed);
		
		if(pressed==R && !wall){
			guy.x+=1;
			flipWait=false;
		}else if(pressed==L && !wall){
			guy.x-=1;
			flipWait=false;
		}
		
		upWait=false;
	
		return makeMove(level, guy, upWait, flipWait, gravity,wall)
	}
}

//checkWall checks if the guy is running into a wall. First determine if he's within y-range of any 
//wall, and if so, check if he's at the right x-value to be blocked. If he's blocked, return true
//to indicate blockage.

function checkWall(level, guy, gravity,direction){
	for(w of levels[level].wall){
		if((gravity==1 && guy.y-2>w.top+1 && guy.y<w.bottom+2)
					||(gravity==-1 && guy.y-2>450-w.bottom+1 && guy.y<450-w.top+2)){
					if(guy.x-w.x<8 && 0<guy.x-w.x && direction==L){
						return true;
					}else if(w.x-guy.x<6 && 0<w.x-guy.x && direction==R){
						return true;
					}
				}
	}
	return false;
}


function makeMove(level, guy, upWait, flipWait, gravity,wall){
	var safe=false;
	var frozen=false;
	
	//safe indicates if the guy is on a floor; it will switch to true if a floor is found.
	//frozen indicates whether another piece of floor is blocking the guy from moving forward. It will
	//be set to true if a blockage is found.
		for(f of levels[level].floor){
			
			//tan carries the tangent of the angle made by this floor, counterclockwise from 0.
			var tan=gravity*(f.right.y-f.left.y)/(f.right.x-f.left.x);

			// the difference between the expected y value on the floor, given the guy's
			//x-value, and his actual y-value.			
			var checky = guy.y-225*(1-gravity)-gravity*f.left.y-abs(guy.x-5-f.left.x)*tan;
			
			
			var checkx = (guy.x-5<f.right.x) && (guy.x>f.left.x-8) //check if x is in range for this floor

			//check if we're falling too close to a ledge, don't want to land here
			var fallingEdge = (guy.x<f.left.x-6 && guy.fallingFrames>3) || (guy.x-3>f.right.x && guy.fallingFrames>3)

			if(checkx	&& checky<3 && !fallingEdge){
				if(checky>1 //going uphill
						//correct for rounding error when we are very close to the edge of the floor.
				 && !(tan<0 && pressed==L && guy.x-5-f.left.x<10)
				 && !(tan>0 && pressed==R && f.right.x-guy.x-5<10)){

					safe=true;

					if(!wall){
						guy.y-=1;
						guy.fallingFrames=0;
						guy.theta=gravity*Math.atan(gravity*tan);

						//check if we run into some other floor
						frozen=checkFrozen(guy,f,level,gravity);
						if(!frozen){
							if(pressed==R){guy.x-=1;}
							else if(pressed==L){guy.x+=1;}
						}

						//if we are on a moving floor, we increment the guy as detailed in the data for the level
						//so that he moves with the floor
						if(f.type==move){
							moveIncrement(guy,level,gravity,f);
						}

						//If we hit a flipper, draw the flip as detailed in flipTime function
						if(f.type==flip && !flipWait){						
							[gravity, flipWait]=flipTime(guy,level,gravity,f);
						}
					}
					
				}

				//going flat or downhill
				else if(checky>0){
					safe=true;
					
					if(!wall){
							checkFrozen(guy,f,level,gravity);

							guy.theta=gravity*Math.atan((f.right.y-f.left.y)/(f.right.x-f.left.x));
							guy.fallingFrames=0;

							if(f.type==move){
								moveIncrement(guy,level,gravity,f);
							}

							if(f.type==flip && !flipWait){						
								[gravity, flipWait]=flipTime(guy,level,gravity,f);
							}
						
					}
					
				}
			}
		}
		
	


	

//if the guy is found not to be on a floor (i.e., not safe), we want him to fall. So we increase his
//y-value and then do some falling stuff

	if(!safe){
		guy.y+=1;
		if(guy.fallingFrames>2){
			//if he's been falling for more than 2 frames, we decide to believe he's falling for realsies.
			//so we undo the incrementation of his x-value that was found in move()
			
				if(pressed==R){guy.x-=1;}
				else if(pressed==L){guy.x+=1;}				
			
		}
		guy.fallingFrames +=1;
		if(guy.fallingFrames==7){
			//if he's been falling for more than 7 frames, this shit is for real. Turn that guy back upright.
			
			//push away from floor so he isn't falling just below the ledge, unless a wall in the way
			if(!wall){
				if(pressed==R){guy.x+=3;}
				else if(pressed==L){guy.x-=1;}	
			}
			guy.theta=0;
		}
	}
	if(guy.y>450){
		//if he's off the screen, he's fuckin dead
		gravity=0;
	}
	
	guy.ctx.clearRect(0,0,guy.canvas.width,guy.canvas.height);
	drawGuy(guy,level,gravity);
	
	return([guy,upWait, flipWait, gravity]);
}


function checkFrozen(guy,f,level,gravity){
	//check if there is a floor (other than the one we are on) blocking the guy from moving forward
	for(w of levels[level].floor){
		if(w!=f){
			var tan=gravity*(w.right.y-w.left.y)/(w.right.x-w.left.x);
			var checky = guy.y-225*(1-gravity)-gravity*w.left.y-abs(guy.x-5-w.left.x)*tan
			var checkx = (guy.x<w.right.x)&&(guy.x>w.left.x)
			
			if(checkx //in range of that floor (xwise)
				&& checky<20 //below the floor
				&& checky>18.5 //but not too far away
				&& w.type!=bridge){  //except for bridges, obvi
					
					//if those conditions are met, undo the increment to guy.x that was done in move()
					if(pressed==R){guy.x-=1;}
					else if(pressed==L){guy.x+=1;}
					return true;
				}
			}
		}
		return false;
}


function drawGuy(guy, level, gravity){
	
	//every frame, update the moving floor, draw the background, and draw the guy
	for(f of levels[level].floor){
		if(f.type==move){
			f.update(guy.time);
		}
	}
	drawBackground(level, gravity);
	
	sprite.draw(guy);
	sprite.update();
}

function moveIncrement(guy,level,gravity,f){
	var [xupdate,yupdate]=f.guyChange(guy.time,guy.x,guy.y);
	//get proposed update to position of the guy
	
	var direction=N;
	if(xupdate<f.left.x){direction=L;}
	else{direction=R;}
	var wall=checkWall(level,guy, gravity,direction);
	//check if a wall is blocking you
	
	//if it's not, update the guy
	if(!wall){
		guy.x=xupdate;
		guy.y=yupdate;
	}
}

function flipTime(guy,level, gravity, f){
	guy.x=(f.right.x+f.left.x)/2;
	pressed=N;
	pause=true;
	drawFlip(level,-gravity);
	guy.y=450-(guy.y-5);
	guy.fallingFrames=8;
	return([-gravity,true]);
}

function checkFlag(guy,level,gravity){
	//check if we found the flag! actually checks the distance between the flag and the guy
	if(pow(guy.x-4-levels[level].flag.x,2)+pow(guy.y-(225*(1-gravity)+gravity*levels[level].flag.y),2)<100
		&& (abs(guy.theta-(Math.PI/2*(1-gravity)+gravity*levels[level].flag.theta))<2 )){
		
		return true;
		}else{return false;}
}

function checkUpPress(level, guy, upWait, flipWait, gravity){
	
	for(p of levels[level].portals){
		
		//check if we are at the x-y point for p.a, and move if so
			if(checkForPortal(guy, p.a.x, p.a.y, gravity)){
				return portalMove(level, guy, p.b,gravity)
			
				//check if we are at the x-y point for p.b, and move if so	
			}else	if(checkForPortal(guy,p.b.x,p.b.y,gravity)){
					return portalMove(level, guy, p.a, gravity)
				}
	}
	
	for(b of levels[level].buttons){
		if(checkButton(guy,b.x,b.y,gravity)){
			for(f of levels[level].floor){
				if(f.type==button && f.trig==b.trigger){
					pressed=N;
					upWait=true;
					pause=true;
					drawSwitch(f,level,gravity);
				}
				
			}
		}
	}
	
	//otherwise just make a normal move
	return makeMove(level, guy, upWait, flipWait, gravity,false);
	
}

function checkButton(guy, x, y, g){
	var checkx = (guy.x+3-x)*(guy.x-x-12)<0;
	var checky = (guy.y+2*g-(225*(1-g)+g*y))*(guy.y+2*g-(20+225*(1-g)+g*y))<0;
	return( checkx && checky);
	
}

function checkForPortal(guy, x, y, g){
	var checkx = (guy.x+3-x)*(guy.x-x-12)<0;
	var checky = (guy.y+2*g-(225*(1-g)+g*y))*(guy.y+2*g-(20+225*(1-g)+g*y))<0;
	return( checkx && checky);
}

function portalMove(level, guy, portal, g){
	guy.x = portal.x+1+20*g*sin(portal.theta);
	guy.y=225*(1-g)+g*portal.y+(-3*portal.loc+5*(portal.loc*g-1-(portal.loc-1)*(g-1)))*g;
	guy.theta = g*portal.theta;
	return makeMove(level, guy, true, false, g, false);
}

//create the sprite for the guy 

function spriteSheet(){
	var image = new Image();
	var framesPerRow = 8;
	image.src="walking.png";
	var frameWidth=1455/8;
	var frameHeight=318;
	var currentFrame = 4;
	var counter = 0;
	this.update = function(){
		if(counter == 4 ){
			currentFrame = (currentFrame+1)%framesPerRow;
		}
		if(abs(pressed)==1){counter = (counter+1)%5}
		else{currentFrame=4;
			counter=0;
			
			//default position is 4
			}
	};
	
	this.draw=function(guy){
		guy.ctx.save();
		guy.ctx.translate(guy.x,guy.y);
		guy.ctx.rotate(guy.theta);
		if(pressed==L){guy.ctx.scale(-1,1);}
		if(abs(pressed)!=1 && lastPressed==L){
			guy.ctx.scale(-1,1);
			guy.ctx.translate(-5,0);}
		guy.ctx.drawImage(image, 
			currentFrame*frameWidth,0,
			frameWidth,frameHeight,
			-5,-23,
			15,22);
		guy.ctx.restore();
	};
}

sprite=new spriteSheet();

