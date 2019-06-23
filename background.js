function drawBackground(level,gravity){
	var backgroundCanvas=document.getElementById("floorCanvas");
	var bgctx = backgroundCanvas.getContext("2d");
	backgroundCanvas.style.letterSpacing = "-1px"
	bgctx.clearRect(0,0,backgroundCanvas.width,backgroundCanvas.height);
	drawPortals(bgctx,level,gravity);
	drawFloor(bgctx,level,gravity);

	bgctx.translate(levels[level].flag.x,225*(1-gravity)+gravity*levels[level].flag.y)
	bgctx.rotate(Math.PI/2*(1-gravity)+gravity*levels[level].flag.theta);
	bgctx.font="25px Arial";
	bgctx.strokeStyle = 'black';
	bgctx.lineWidth=1;
	bgctx.strokeText('\u2690',0,0);
	bgctx.setTransform(1,0,0,1,0,0);
}


function drawFloor(ctx,level,gravity){
	for(w of levels[level].wall){
		var width = w.bottom-w.top;
		ctx.translate(w.x,225*(1-gravity)+gravity*w.top)
		ctx.rotate(Math.sign(gravity)*Math.PI/2);
		ctx.fillStyle="black";
		ctx.fillRect(0,0,abs(gravity)*width,2);
		ctx.setTransform(1,0,0,1,0,0)
	}
	
	for(f of levels[level].floor){
		var theta = Math.atan((f.right.y-f.left.y)/(f.right.x-f.left.x))
		var width = Math.sqrt(pow(f.right.x-f.left.x,2)+pow(f.right.y-f.left.y,2))
		ctx.translate(f.left.x,225*(1-gravity)+gravity*f.left.y);
		ctx.rotate(gravity*theta);
		if(f.type=="floor"){
			ctx.fillStyle="black";
			ctx.fillRect(0,0,width,2);
		}else if(f.type=="bridge"){
			ctx.beginPath();
			ctx.strokeStyle="#a0522d";
			var a=4;
			var Rad = pow(width,2)/8/a-a/2;
			var angle = Math.atan(width/(2*(Rad-a)));
			ctx.arc(width/2,-(Rad-a),Rad,Math.PI/2-angle,Math.PI/2+angle);
			ctx.stroke();
			ctx.closePath();

		}else if(f.type=="flip"){
			ctx.lineWidth=0.5;
			ctx.strokeStyle="blue";
			var Rad=2;
			for(var i=0;i<width/8;i++){
				ctx.beginPath();
				ctx.arc(Rad+8*i,0,Rad,Math.PI,2*Math.PI);		
				ctx.stroke();
				ctx.closePath();
				ctx.beginPath();			
				ctx.arc(3*Rad+8*i,0,Rad,0,Math.PI);
				ctx.stroke();
				ctx.closePath();
			}
		}
		ctx.setTransform(1,0,0,1,0,0)
	}
	
}

function drawPortals(ctx,level,gravity){
	for(p of levels[level].portals){
		ctx.translate(p.a.x+20*sin(p.a.theta)+5*(1-gravity),225*(1-gravity)+gravity*(p.a.y-20*cos(p.a.theta)));
		ctx.rotate(Math.PI/2*(1-gravity)+gravity*(p.a.theta));
		ctx.fillStyle=p.color;
		ctx.fillRect(0,0,10,20);
		ctx.setTransform(1,0,0,1,0,0);
		ctx.translate(p.b.x+20*sin(p.b.theta)+5*(1-gravity),225*(1-gravity)+gravity*(p.b.y-20*cos(p.b.theta)));
		ctx.rotate(Math.PI/2*(1-gravity)+gravity*(p.b.theta));
		ctx.fillStyle=p.color;
		ctx.fillRect(0,0,10,20);
		ctx.setTransform(1,0,0,1,0,0);
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