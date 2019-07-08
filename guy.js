document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup", keyUpHandler, false);
var N=0, R=1, L=-1, U=3;

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
	pressed=N;
}




function move(level, guy, upWait, flipWait, gravity){

	//First check if the player has pressed Up button at a portal. The variable upWait will be set to
	//true if they have just come from a portal, so they don't boing back and forth between two portals 
	//of the same color. So if player has pressed UP and are not just coming from a portal, we run 
	//checkPortal. Otherwise, run makeMove.
		
	if(pressed==U){
		flipWait=false;
		if(!upWait){
			return checkPortal(level,guy,upWait, flipWait, gravity);
		}else{
			return makeMove(level, guy, true, flipWait, gravity);
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
	
		return makeMove(level, guy, upWait, flipWait, gravity)
	}
}

//checkWall checks if the guy is running into a wall. First determine if he's within y-range of any 
//wall, and if so, check if he's at the right x-value to be blocked. If he's blocked, return true
//to indicate blockage.

function checkWall(level, guy, gravity,direction){
	for(w of levels[level].wall){
		if((gravity==1 && guy.y-2>w.top+1 && guy.y<w.bottom+2)
					||(gravity==-1 && guy.y-2>450-w.bottom+1 && guy.y<450-w.top+2)){
					if(guy.x-w.x<2 && 0<guy.x-w.x && direction==L){
						return true;
					}else if(w.x-guy.x<8 && 0<w.x-guy.x && direction==R){
						return true;
					}
				}
	}
	return false;
}


function makeMove(level, guy, upWait, flipWait, gravity){
	var safe=false;
	var frozen=false;
	
	//safe indicates if the guy is on a floor; it will switch to true if a floor is found.
	//frozen indicates whether another piece of floor is blocking the guy from moving forward. It will
	//be set to true if a blockage is found.

	for(f of levels[level].floor){
		//tan carries the tangent of the angle made by this floor, counterclockwise from 0.
		
		var tan=gravity*(f.right.y-f.left.y)/(f.right.x-f.left.x);
		
		//checky carries the difference between the expected y value on the floor, given the guy's
		//x-value, and his actual y-value.
		
		var checky = guy.y-225*(1-gravity)-gravity*f.left.y-abs(guy.x-5-f.left.x)*tan;

		//first set of ifs: check if the guy is in between the left and right endpoints of the floor's x-vals,
		//the second line is to ensure that we're within 3 of the expected y-value given our x-value.
		//the third and fourth line are to stop the guy from glomming onto a ledge while falling
		
		
		if(guy.x-5<f.right.x && guy.x>f.left.x-8
			&&checky<3
			&&!(guy.x<f.left.x-5 && guy.fallingFrames>3)
			&&!(guy.x-2>f.right.x && guy.fallingFrames>3)){
				
			//the next if characterizes the case that the y-value we have is larger than expected; i.e.,
			// we are going uphill. The second two lines are to correct for rounding error when we are 
			//very close to the edge of the floor.
				
			if(checky>1
			 && !(tan<0 && pressed==L && guy.x-5-f.left.x<10)
			 && !(tan>0 && pressed==R && f.right.x-guy.x-5<10)){
		
			
			//while we are going uphill: we reduce the y-value of the guy, but set him to safe since he's
			//on a floor. To improve speed, we push the x-value a bit more.
		
				guy.y-=1;
				safe=true;
				frozen=checkFrozen(guy,f,level,gravity);
				if(!frozen){
					if(pressed==R){guy.x-=1;}
					else if(pressed==L){guy.x+=1;}
				}
				
				//if we are on a moving floor, we increment the guy as detailed in the data for the level
				//so that he moves with the floor
				
				if(f.type=="move"){
					var [xupdate,yupdate]=f.guyChange(guy.time,guy.x,guy.y);
					var direction=N;
					if(xupdate<f.left.x){direction=L;}
					else{direction=R;}
					var wall=checkWall(level,guy, gravity,direction);
					if(!wall){
						guy.x=xupdate;
						guy.y=yupdate;
					}
				}
				
				//If we hit a flipper, we pause play and draw the  flip as detailed in drawFlip function, 
				//found in background.js
				
				if(f.type=="flip" && !flipWait){
					guy.x=(f.right.x+f.left.x)/2;
					pressed=N;
					gravity = -gravity;
					pause=true;
					drawFlip(level,gravity);
					guy.y=450-(guy.y-5)
					flipWait=true;
				}

				guy.fallingFrames=0;
				guy.theta=gravity*Math.atan(gravity*tan);
			}
			
			//The next chunk of code is similar to the previous, in the case that we are not going uphill.
			
			
			else if(checky>0
				&&!(guy.x<f.left.x-5 && guy.fallingFrames>3)
				&&!(guy.x-2>f.right.x && guy.fallingFrames>3)){
				safe=true;
				frozen=checkFrozen(guy,f,level,gravity);
				guy.theta=gravity*Math.atan((f.right.y-f.left.y)/(f.right.x-f.left.x));
				guy.fallingFrames=0;
				if(f.type=="move"){
					var [xupdate,yupdate]=f.guyChange(guy.time,guy.x,guy.y);
					var direction=N;
					if(xupdate<f.left.x){direction=L;}
					else{direction=R;}
					var wall=checkWall(level,guy, gravity,direction);
					if(!wall){
						guy.x=xupdate;
						guy.y=yupdate;
					}
				}
				if(f.type=="flip" && !flipWait){
					guy.x=(f.right.x+f.left.x)/2
					pressed=N;
					gravity=-gravity;
					pause=true;
					drawFlip(level,gravity);
					guy.y=450-(guy.y-5);
					flipWait=true;
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
			
			if(pressed==R){guy.x+=3;}
			else if(pressed==L){guy.x-=1;}
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
			if(guy.x<w.right.x //in range of that floor (xwise)
				&& guy.x>w.left.x
				&& guy.y-225*(1-gravity)-gravity*w.left.y-abs(guy.x-5-w.left.x)*tan<20 //below the floor
				&& guy.y-225*(1-gravity)-gravity*w.left.y-abs(guy.x-5-w.left.x)*tan>18.5 //but not too far away
				&& w.type!="bridge"){  //except for bridges, obvi

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
	
	//every frame, update the moving floor, draw the background, and draw that guy
	for(f of levels[level].floor){
		if(f.type=="move"){
			f.update(guy.time);
		}
	}
	drawBackground(level, gravity);
	
	sprite.draw(guy);
	sprite.update();
}

function checkFlag(guy,level,gravity){
	//check if we found the flag! actually checks the distance between the flag and the guy is small enough
	if(pow(guy.x-4-levels[level].flag.x,2)+pow(guy.y-(225*(1-gravity)+gravity*levels[level].flag.y),2)<100
		&& (abs(guy.theta-(Math.PI/2*(1-gravity)+gravity*levels[level].flag.theta))<2 )){
		
		return true;
		}else{return false;}
}

function checkPortal(level, guy, upWait, flipWait, gravity){
	for(p of levels[level].portals){
			if((guy.x+3-p.a.x)*(guy.x-p.a.x-12)<0
			&& (guy.y+2*gravity-(225*(1-gravity)+gravity*p.a.y))*(guy.y+2*gravity-(20+225*(1-gravity)+gravity*p.a.y))<0){
				guy.x=p.b.x+1+20*gravity*sin(p.b.theta);
				guy.y=225*(1-gravity)+gravity*p.b.y-3*gravity*p.b.loc;
				guy.theta=gravity*p.b.theta;
				upWait=true;
				return makeMove(level, guy, upWait, flipWait, gravity)
			}else	if((guy.x+3-p.b.x)*(guy.x-p.b.x-12)<0
				&& (guy.y+2*gravity-(225*(1-gravity)+gravity*p.b.y))*(guy.y+2*gravity-(20+225*(1-gravity)+gravity*p.b.y))<0){
					guy.x=p.a.x+1+20*gravity*sin(p.a.theta);
					guy.y=225*(1-gravity)+gravity*p.a.y-3*gravity*p.a.loc;
					guy.theta=gravity*p.a.theta;
					upWait=true;
					return makeMove(level, guy, upWait, flipWait, gravity)
				}
	}
	return makeMove(level, guy, upWait, flipWait, gravity);
	
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
			
			//default position is 4}
	};
	
	this.draw=function(guy){
		guy.ctx.translate(guy.x,guy.y);
		guy.ctx.rotate(guy.theta);
		if(pressed==L){guy.ctx.scale(-1,1);}
		guy.ctx.drawImage(image, 
			currentFrame*frameWidth,0,
			frameWidth,frameHeight,
			-5,-22,
			15,22);
		guy.ctx.setTransform(1,0,0,1,0,0);
	};
}

sprite=new spriteSheet();

