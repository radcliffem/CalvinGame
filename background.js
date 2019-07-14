var floor = 0;
var flip = 1;
var bridge = 2;
var move = 3;
var button = 4;


//drawBackground renders all the features of the level other than the guy. This includes floor, bridges,
//portals, flips, flag, etc. This is called to set up the level, to update the moving floor, 
//and anytime a flip is triggered

function drawBackground(level,gravity){
	var backgroundCanvas=document.getElementById("floorCanvas");
	var bgctx = backgroundCanvas.getContext("2d");
	
  // Scale up canvas by pixelRatio keeping same screen dimensions (do this once).
	if (window.devicePixelRatio && !backgroundCanvas.dataset.is_scaled) {
	  backgroundCanvas.dataset.is_scaled = 1;
	  backgroundCanvas.style.width = backgroundCanvas.width + "px";
	  backgroundCanvas.style.height = backgroundCanvas.height + "px";
	  backgroundCanvas.width = devicePixelRatio * backgroundCanvas.width;
	  backgroundCanvas.height = devicePixelRatio * backgroundCanvas.height;
	  bgctx.scale(devicePixelRatio, devicePixelRatio);
	}
		
	backgroundCanvas.style.letterSpacing = "-1px"
	bgctx.clearRect(0,0,backgroundCanvas.width,backgroundCanvas.height);
	
	drawPortals(bgctx, level, gravity);
	drawFloor(bgctx, level, gravity);
	drawButtons(bgctx, level, gravity);
	

	bgctx.save();
	bgctx.translate(levels[level].flag.x,225*(1-gravity)+gravity*levels[level].flag.y)
	bgctx.rotate(Math.PI/2*(1-gravity)+gravity*levels[level].flag.theta);
	bgctx.font="25px Arial";
	bgctx.strokeStyle = 'black';
	bgctx.lineWidth=1;
	bgctx.strokeText('\u2690',0,0);
	bgctx.restore();
}


//drawStaticFloor draws the walls and any floors that are nonmoving. For each feature, it translates
//and rotates properly, then builds a rectangle for each floor segment (or an arc of a circle for)
//bridges 

function drawFloor(ctx,level,gravity){
	for(w of levels[level].wall){
		var width = w.bottom-w.top;
	  ctx.save();
		ctx.translate(w.x,225*(1-gravity)+gravity*w.top)
		ctx.rotate(Math.sign(gravity)*Math.PI/2);
		ctx.fillStyle="black";
		ctx.fillRect(0,0,abs(gravity)*width,2);
		ctx.restore()
	}
	
	for(f of levels[level].floor){
		var theta = Math.atan((f.right.y-f.left.y)/(f.right.x-f.left.x))
		var width = Math.sqrt(pow(f.right.x-f.left.x,2)+pow(f.right.y-f.left.y,2))
	  ctx.save();
		ctx.translate(f.left.x,225*(1-gravity)+gravity*f.left.y);
		ctx.rotate(gravity*theta);

		if(f.type==floor||f.type==move||f.type==button){
			ctx.fillStyle="black";
			ctx.fillRect(0,0,width,2);
		}
		else if(f.type==bridge){
			ctx.translate(0,1);
			ctx.beginPath();
			ctx.strokeStyle="#a0522d";
			var a=4; //sometime play with this parameter
			var Rad = pow(width,2)/8/a-a/2;
			var angle = Math.atan(width/(2*(Rad-a)));
			ctx.arc(width/2,-(Rad-a),Rad,Math.PI/2-angle,Math.PI/2+angle);
			ctx.stroke();
			ctx.closePath();
		}
		else if(f.type==flip){
			ctx.lineWidth=1;
			ctx.strokeStyle="blue";
			var Rad=width/(4*(Math.floor(width/8)+1));

			//wavy floors are constructed as half-circles pasted together

			for(var i=0;i<=width/8;i++){
				ctx.beginPath();
				ctx.arc(Rad+4*i*Rad,0,Rad,Math.PI,2*Math.PI);		
				
				ctx.stroke();
				ctx.beginPath();			
				ctx.arc(3*Rad+4*i*Rad,0,Rad,0,Math.PI);
				ctx.stroke();
			}
		}	
		ctx.restore()
	}
	
}

function drawButtons(ctx, level, gravity){
	if(gravity!=0){
		for(b of levels[level].buttons){
  	  ctx.save();
			ctx.beginPath();
			ctx.lineJoin="round";
			ctx.lineWidth=0.5;
			ctx.translate(b.x+2.5*(1-gravity),225*(1-gravity)+gravity*(b.y-15)-5*(1-gravity));
			ctx.fillStyle=b.color;
			ctx.strokeStyle="black";
			ctx.rect(0,0,10,10);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();
			ctx.restore();
		}
	}
}



function drawSwitch(f,level,gravity){
	var backgroundCanvas=document.getElementById("floorCanvas");
	var bgctx = backgroundCanvas.getContext("2d");
	var step=0.04;
	var count=50;
	
	var prevLeftX = f.left.states[f.state].x;
	var prevLeftY = f.left.states[f.state].y;
	var newLeftX = f.left.states[(f.state+1)%f.left.states.length].x
	var newLeftY = f.left.states[(f.state+1)%f.left.states.length].y

	var prevRightX = f.right.states[f.state].x;
	var prevRightY = f.right.states[f.state].y;
	var newRightX = f.right.states[(f.state+1)%f.right.states.length].x
	var newRightY = f.right.states[(f.state+1)%f.right.states.length].y

	
	var c=setInterval(function(){
		if(count>24){
			f.left.x = (prevLeftX+prevRightX)/2-((prevLeftX+prevRightX)/2-prevLeftX)*(1-step*(50-count));
			f.right.x = (prevLeftX+prevRightX)/2+(-(prevLeftX+prevRightX)/2+prevRightX)*(1-step*(50-count));
			f.left.y = (prevLeftY+prevRightY)/2-((prevLeftY+prevRightY)/2-prevLeftY)*(1-step*(50-count));
			f.right.y = (prevLeftY+prevRightY)/2+(-(prevLeftY+prevRightY)/2+prevRightY)*(1-step*(50-count));	
		}
		if(count>0 && count <25){
			f.left.x = (newLeftX+newRightX)/2-((newLeftX+newRightX)/2-newLeftX)*(step*(25-count));
			f.right.x = (newLeftX+newRightX)/2+(-(newLeftX+newRightX)/2+newRightX)*(step*(25-count));
			f.left.y = (newLeftY+newRightY)/2-((newLeftY+newRightY)/2-newLeftY)*(step*(25-count));
			f.right.y = (newLeftY+newRightY)/2+(-(newLeftY+newRightY)/2+newRightY)*(step*(25-count));			
		}
		drawBackground(level,gravity);
		if(count==25){
			f.state = (f.state+1)%f.left.states.length;
		}
		count-=1;
		if(count==-1){
			clearInterval(c);
			pause=false;
		}
	},15)
	
}



//drawPortals goes through the portals array and draws both the a-side and b-side

function drawPortals(ctx,level,gravity){
	for(p of levels[level].portals){
	  ctx.save();
		ctx.translate(p.a.x+20*sin(p.a.theta)+5*(1-gravity),225*(1-gravity)+gravity*(p.a.y-20*cos(p.a.theta)));
		ctx.rotate(Math.PI/2*(1-gravity)+gravity*(p.a.theta));
		ctx.fillStyle=p.color;
		ctx.fillRect(0,0,10,20);
		ctx.restore();
	  ctx.save();
		ctx.translate(p.b.x+20*sin(p.b.theta)+5*(1-gravity),225*(1-gravity)+gravity*(p.b.y-20*cos(p.b.theta)));
		ctx.rotate(Math.PI/2*(1-gravity)+gravity*(p.b.theta));
		ctx.fillStyle=p.color;
		ctx.fillRect(0,0,10,20);
		ctx.restore();
	}
}



function drawFlip(level, gravity){
	var step=0.08;
	var count=25;
	var c=setInterval(function(){
		drawBackground(level,gravity*(1-count*step));
		count-=1;
		if(count==-1){
			clearInterval(c);
			pause=false;
		}
	},15)
}

function resetButtons(level){
	for(f of levels[level].floor){
		if(f.type==move){
			f.left.x = f.init.left.x;
			f.left.y = f.init.left.y;
			f.right.x = f.init.right.x;
			f.right.y = f.init.right.y;
		}
		if(f.type==button){
			f.state=0;
			f.left.x = f.left.states[f.state].x;
			f.right.x = f.right.states[f.state].x;
			f.left.y = f.left.states[f.state].y;
			f.right.y = f.right.states[f.state].y;
		}
	}
}