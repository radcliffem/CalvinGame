worldThree = [
	
{levelText:"TIMING",
score:13,
floor:[{left:{x:149,y:164},right:{x:239,y:75},type:floor},
	{left:{x:238,y:75},right:{x:363,y:75},type:floor},
	{left:{x:363,y:75},right:{x:450,y:163},type:floor},
	{left:{x:149,y:287},right:{x:238,y:375},type:floor},
	{left:{x:238,y:375},right:{x:363,y:375},type:floor},
	{left:{x:363,y:375},right:{x:450,y:287},type:floor},
	{left:{x:150,y:250},right:{x:170,y:250},type:flip},
	{left:{x:250,y:225},right:{x:350,y:225},type:floor},
	{left:{x:0,y:0},right:{x:0,y:0},type:move,
		update: function(t){
			this.left.x = 275+100*sin(t/100);
			this.left.y = 225+100*cos(t/100);
			this.right.x=325+100*sin(t/100);
			this.right.y=225+100*cos(t/100);},
		guyChange: function(t,x,y){
			return([x-this.left.x+275+100*sin(t/100),y-this.left.y+225+100*cos(t/100)]);
		}
	},
	{left:{x:0,y:0},right:{x:0,y:0},type:move,
		update: function(t){
			this.left.x = 275+100*sin(t/100+25*Math.PI);
			this.left.y = 225+100*cos(t/100+25*Math.PI);
			this.right.x=325+100*sin(t/100+25*Math.PI);
			this.right.y=225+100*cos(t/100+25*Math.PI);},
		guyChange: function(t,x,y){
			return([x-this.left.x+275+100*sin(t/100+25*Math.PI),y-this.left.y+225+100*cos(t/100+25*Math.PI)]);
		}
	}	],
wall:[{top:161,bottom:292,x:150},
	{top:161,bottom:292,x:450}],
flag:{x:350,y:75,theta:Math.PI},
buttons: [], 
portals:[],
startx:275,
starty:223
},
{levelText: "FROGGER",
floor:[{left:{x:100,y:50},right:{x:130,y:50},type:floor},
	{left:{x:0,y:200},right:{x:0,y:200},type:move,
	update: function(t){
		if(2*t%300<100){
			this.left.x = 302-2*t%100;
			this.right.x = 299
		}else if(2*t%300<200){
			this.left.x = 200-2*t%100;
			this.right.x = 299-2*t%100;
		}else{
			this.left.x=100;
			this.right.x = 200-2*t%100;
		}		
	},
	guyChange:function(t,x,y){
		return([x-2,y]);
	}},
	
	{left:{x:0,y:125},right:{x:0,y:125},type:move,
	update: function(t){
		if(t%250<50){
			this.left.x = 100;
			this.right.x =100+ t%250
		}else if(t%250<200){
			this.left.x = 50+t%250;
			this.right.x = 100+t%250;
		}else{
			this.left.x=250+t%50;
			this.right.x = 299;
		}		
	},
	guyChange:function(t,x,y){
		return([x+1,y]);
	}},
	
	{left:{x:0,y:125},right:{x:0,y:125},type:move,
	update: function(t){
		if((t+85)%250<50){
			this.left.x = 100;
			this.right.x =100+ (t+85)%250
		}else if((t+85)%250<200){
			this.left.x = 50+(t+85)%250;
			this.right.x = 100+(t+85)%250;
		}else{
			this.left.x=250+(t+85)%50;
			this.right.x = 299;
		}		
	},
	guyChange:function(t,x,y){
		return([x+1,y]);
	}},
	
	{left:{x:0,y:125},right:{x:0,y:125},type:move,
	update: function(t){
		if((t+170)%250<50){
			this.left.x = 100;
			this.right.x =100+ (t+170)%250
		}else if((t+170)%250<200){
			this.left.x = 50+(t+170)%250;
			this.right.x = 100+(t+170)%250;
		}else{
			this.left.x=250+(t+170)%50;
			this.right.x = 299;
		}		
	},
	guyChange:function(t,x,y){
		return([x+1,y]);
	}},
	
	{left:{x:0,y:275},right:{x:0,y:275},type:move,
	update: function(t){
		if(t%230<30){
			this.left.x = 100;
			this.right.x =100+t%230
		}else if(t%230<200){
			this.left.x = 70+t%230;
			this.right.x = 100+t%230;
		}else{
			this.left.x=70+t%230;
			this.right.x = 299;
		}		
	},
	guyChange:function(t,x,y){
		return([x+1,y]);
	}},
	
	{left:{x:0,y:275},right:{x:0,y:275},type:move,
	update: function(t){
		if((t+56)%230<30){
			this.left.x = 100;
			this.right.x =100+(t+56)%230
		}else if((t+56)%230<200){
			this.left.x = 70+(t+56)%230;
			this.right.x = 100+(t+56)%230;
		}else{
			this.left.x=70+(t+56)%230;
			this.right.x = 299;
		}		
	},
	guyChange:function(t,x,y){
		return([x+1,y]);
	}},
	
	{left:{x:0,y:275},right:{x:0,y:275},type:move,
	update: function(t){
		if((t+112)%230<30){
			this.left.x = 100;
			this.right.x =100+(t+112)%230
		}else if((t+112)%230<200){
			this.left.x = 70+(t+112)%230;
			this.right.x = 100+(t+112)%230;
		}else{
			this.left.x=70+(t+112)%230;
			this.right.x = 299;
		}		
	},
	guyChange:function(t,x,y){
		return([x+1,y]);
	}},		
	
	{left:{x:0,y:275},right:{x:0,y:275},type:move,
	update: function(t){
		if((t+168)%230<30){
			this.left.x = 100;
			this.right.x =100+(t+168)%230
		}else if((t+168)%230<200){
			this.left.x = 70+(t+168)%230;
			this.right.x = 100+(t+168)%230;
		}else{
			this.left.x=70+(t+168)%230;
			this.right.x = 299;
		}		
	},
	guyChange:function(t,x,y){
		return([x+1,y]);
	}},			
		
	{left:{x:260,y:400},right:{x:302,y:400},type:floor},
	{left:{x:460,y:50},right:{x:500,y:50},type:floor},
	{left:{x:375,y:400},right:{x:425,y:400},type:floor},
	
	{left:{x:0,y:225},right:{x:0,y:225},type:move,
		update: function(t){
			if(1.5*t%275<75){
				this.left.x = 302;
				this.right.x = 299+1.5*t%275;
			}else if(1.5*t%275<200){
				this.left.x = 225+1.5*t%275;
				this.right.x = 299+1.5*t%275;
			}else{
				this.left.x=225+1.5*t%275;
				this.right.x = 500;
			}		
		},
		guyChange:function(t,x,y){
			return([x+1.5,y]);
		}},
	
		{left:{x:0,y:225},right:{x:0,y:225},type:move,
			update: function(t){
				if(1.5*(t+90)%275<75){
					this.left.x = 302;
					this.right.x = 299+1.5*(t+90)%275;
				}else if(1.5*(t+90)%275<200){
					this.left.x = 225+1.5*(t+90)%275;
					this.right.x = 299+1.5*(t+90)%275;
				}else{
					this.left.x=225+1.5*(t+90)%275;
					this.right.x = 500;
				}		
			},
			guyChange:function(t,x,y){
				return([x+1.5,y]);
			}},
	
				{left:{x:0,y:350},right:{x:0,y:350},type:move,
				update: function(t){
					if((2*t/3)%230<30){
						this.left.x = 500-(2*t/3)%230;
						this.right.x =500;
					}else if((2*t/3)%230<200){
						this.left.x = 500-(2*t/3)%230;
						this.right.x = 530-(2*t/3)%230;
					}else{
						this.left.x = 304;
						this.right.x = 530-(2*t/3)%230;
					}		
				},
				guyChange:function(t,x,y){
					return([x-2/3,y]);
				}},

				{left:{x:0,y:350},right:{x:0,y:350},type:move,
				update: function(t){
					if((2*t/3+56)%230<30){
						this.left.x = 500-(2*t/3+56)%230;
						this.right.x =500;
					}else if((2*t/3+56)%230<200){
						this.left.x = 500-(2*t/3+56)%230;
						this.right.x = 530-(2*t/3+56)%230;
					}else{
						this.left.x = 304;
						this.right.x = 530-(2*t/3+56)%230;
					}		
				},
				guyChange:function(t,x,y){
					return([x-2/3,y]);
				}},

				{left:{x:0,y:350},right:{x:0,y:350},type:move,
				update: function(t){
					if((2*t/3+112)%230<30){
						this.left.x = 500-(2*t/3+112)%230;
						this.right.x =500;
					}else if((2*t/3+112)%230<200){
						this.left.x = 500-(2*t/3+112)%230;
						this.right.x = 530-(2*t/3+112)%230;
					}else{
						this.left.x = 304;
						this.right.x = 530-(2*t/3+112)%230;
					}		
				},
				guyChange:function(t,x,y){
					return([x-2/3,y]);
				}},		

				{left:{x:0,y:350},right:{x:0,y:350},type:move,
				update: function(t){
					if((2*t/3+168)%230<30){
						this.left.x = 500-(2*t/3+168)%230;
						this.right.x =500;
					}else if((2*t/3+168)%230<200){
						this.left.x = 500-(2*t/3+168)%230;
						this.right.x = 530-(2*t/3+168)%230;
					}else{
						this.left.x = 304;
						this.right.x = 530-(2*t/3+168)%230;
					}		
				},
				guyChange:function(t,x,y){
					return([x-2/3,y]);
				}},
				{left:{x:105,y:430},right:{x:495,y:430},type:floor},
				
				{left:{x:0,y:100},right:{x:0,y:100},type:move,
				update: function(t){
					if((1/2*t)%250<50){
						this.left.x = 302;
						this.right.x =300+ (1/2*t)%250
					}else if((1/2*t)%250<200){
						this.left.x = 250+(1/2*t)%250;
						this.right.x = 300+(1/2*t)%250;
					}else{
						this.left.x=450+(1/2*t)%50;
						this.right.x = 499;
					}		
				},
				guyChange:function(t,x,y){
					return([x+1/2,y]);
				}},

				{left:{x:0,y:100},right:{x:0,y:100},type:move,
				update: function(t){
					if((1/2*t+85)%250<50){
						this.left.x = 302;
						this.right.x =300+ (1/2*t+85)%250
					}else if((1/2*t+85)%250<200){
						this.left.x = 250+(1/2*t+85)%250;
						this.right.x = 300+(1/2*t+85)%250;
					}else{
						this.left.x=450+(1/2*t+85)%50;
						this.right.x = 499;
					}		
				},
				guyChange:function(t,x,y){
					return([x+1/2,y]);
				}},

				{left:{x:0,y:100},right:{x:0,y:100},type:move,
				update: function(t){
					if((1/2*t+170)%250<50){
						this.left.x = 302;
						this.right.x =300+ (1/2*t+170)%250
					}else if((1/2*t+170)%250<200){
						this.left.x = 250+(1/2*t+170)%250;
						this.right.x = 300+(1/2*t+170)%250;
					}else{
						this.left.x=450+(1/2*t+170)%50;
						this.right.x = 499;
					}		
				},
				guyChange:function(t,x,y){
					return([x+1/2,y]);
				}},
	
	],
wall:[{top:50,bottom:400,x:302},
	{top:50,bottom:400,x:98},
	{top:50,bottom:400,x:500}],
flag: {x:393,y:400,theta:0},
buttons: [], 
portals:[{color:"red",a:{x:275,y:400,theta:0,loc:1},b:{x:475,y:50,theta:0,loc:1}},
	{color:"blue",a:{x:295,y:430,theta:0,loc:1},b:{x:110,y:50,theta:0,loc:1}}],
score:50,
startx:127,
starty:49 },

{levelText:"BUTTON, BUTTON, WHO'S GOT THE BUTTON?",
floor:[{left:{x:202,y:135},right:{x:262,y:135},type:floor},
	{left:{x:262,y:135},right:{x:277,y:135},type:flip},
	{left:{x:277,y:135},right:{x:397,y:135},type:floor},
	{left:{x:202,y:255},right:{x:262,y:255},type:floor},
	{left:{x:322,y:195},right:{x:382,y:195},type:floor},
	{left:{x:382,y:195},right:{x:397,y:195},type:flip},
	{left:{x:202,y:315},right:{x:277,y:315},type:floor},
	{left:{x:292,y:315},right:{x:397,y:315},type:floor},
	{left:{x:262,y:255,states:[{x:262,y:255},{x:292,y:255},{x:262,y:195}]},
		right:{x:322,y:195,states:[{x:322,y:195},{x:292,y:195},{x:322,y:255}]},
		type:button,state:0,trig:1}],
wall:[],
buttons:[{color:"red",x:357,y:195,trigger:1}],
portals:[{color:"blue",a:{x:209.5,y:155,theta:0,loc:-1},b:{x:382,y:315,theta:0,loc:1}}],
flag: {x:209.5,y:315,theta:0},
score:10,
startx:210,
starty:253
},

{levelText:"OPPOSITE",
floor:[{left:{x:50,y:375},right:{x:300,y:75},type:floor},
	{left:{x:300,y:75},right:{x:300+325/3,y:205},type:floor},
	{left:{x:300+320/3,y:203,states:[{x:300+320/3,y:203},{x:0,y:0}]},
		right:{x:300+445/3,y:253,states:[{x:300+445/3,y:253},{x:0,y:0}]},
		type:button,trig:2,state:0},
	{left:{x:300+440/3,y:251},right:{x:550,y:375},type:floor},
	{left:{x:50,y:375},right:{x:550,y:375},type:floor},
	{left:{x:300-250/3,y:175,states:[{x:300-250/3,y:175},{x:240,y:200}]},
	right:{x:300,y:175,states:[{x:300,y:175},{x:300,y:175}]},
	type:button, trig:1, state:0},
	{left:{x:299,y:175},right:{x:300+250/3,y:175},type:floor},
	{left:{x:175,y:225},right:{x:250,y:250},type:floor},
	{left:{x:250,y:250},right:{x:325,y:250},type:bridge},
	{left:{x:325,y:250},right:{x:475,y:250},type:floor},
	{left:{x:50+50*5/6,y:325},right:{x:150,y:325},type:floor},
	{left:{x:150,y:325},right:{x:195,y:325},type:bridge},
	{left:{x:195,y:325},right:{x:230,y:325},type:floor}
	],
wall:[{top:350,bottom:375,x:300}],
buttons:[{x:275,y:175,trigger:1,color:"magenta"},
	{x:360,y:250,trigger:2,color:"pink"}],
portals:[{color:"#b666d2",a:{x:455,y:250,theta:0,loc:1},b:{x:120,y:325,theta:0,loc:1}},
	{color:"#bfb4fe",a:{x:250,y:375,theta:0,loc:1},b:{x:325,y:375,theta:0,loc:1}},
	{color:"#bfb4fe",a:{x:275,y:375,theta:0,loc:1},b:{x:560,y:375,theta:0,loc:1}}],
flag:{x:425,y:375,theta:0},
score:12,
startx:315,
starty:173},

{levelText:"ESCAPE",
floor:[{left:{x:150,y:175},right:{x:250,y:175},type:floor},
	{left:{x:250,y:175},right:{x:266,y:175},type:flip},
	{left:{x:266,y:175},right:{x:300,y:175},type:floor},
	{left:{x:150,y:75},right:{x:275,y:75},type:floor},
	{left:{x:275,y:75},right:{x:290,y:75},type:flip},
	{left:{x:290,y:75},right:{x:300,y:75},type:floor},
	{left:{x:0,y:0,states:[{x:0,y:0},{x:175,y:300}]},
		right:{x:0,y:0,states:[{x:0,y:0},{x:225,y:300}]},
		state:0,
		type:button,
		trig:1},
	{left:{x:0,y:0,states:[{x:0,y:0},{x:400,y:225}]},
		right:{x:0,y:0,states:[{x:0,y:0},{x:440,y:225}]},
		state:0,
		type:button,
		trig:1},
	{left:{x:350,y:275,states:[{x:350,y:275},{x:0,y:0}]},
		right:{x:377,y:248,states:[{x:377,y:248},{x:0,y:0}]},
		state:0,
		type:button,
		trig:3},
	{left:{x:375,y:250}, right:{x:400,y:225},type:floor},
	{left:{x:250,y:275},right:{x:280,y:275},type:floor},
	{left:{x:278,y:275,states:[{x:278,y:275},{x:0,y:0}]},
		right:{x:352,y:275,states:[{x:352,y:275},{x:0,y:0}]},
		state:0,
		type:button,
		trig:2},
	{left:{x:205,y:275,states:[{x:205,y:275},{x:0,y:0}]},
		right:{x:225,y:300,states:[{x:225,y:300},{x:0,y:0}]},
		state:0,
		type:button,
		trig:2},
	{left:{x:175,y:300,states:[{x:175,y:300},{x:0,y:0}]},
			right:{x:195,y:275,states:[{x:195,y:275},{x:0,y:0}]},
			state:0,
			type:button,
			trig:2},
	{left:{x:194,y:275,states:[{x:194,y:275},{x:0,y:0}]},
		right:{x:206,y:275,states:[{x:206,y:275},{x:0,y:0}]},
		type:button,trig:2,state:0},
	{left:{x:413,y:275},right:{x:427,y:275},type:flip},
	{left:{x:413,y:175},right:{x:427,y:175},type:flip},
	{left:{x:345,y:175},right:{x:413,y:175},type:floor},
	{left:{x:427,y:175},right:{x:450,y:175},type:floor},
	{left:{x:350,y:275},right:{x:413,y:275},type:floor},
	{left:{x:300,y:125},right:{x:350,y:125},type:floor},
	{left:{x:350,y:125},right:{x:375,y:125},type:flip},
	{left:{x:0,y:0,states:[{x:0,y:0},{x:224,y:299.2}]},
		right:{x:0,y:0,states:[{x:0,y:0},{x:255,y:337.5}]},
		state:0,
		type:button,
		trig:3},
	{left:{x:254,y:337},right:{x:350,y:337},type:floor},
	{left:{x:350,y:337},right:{x:366,y:337},type:flip}
	],
wall:[{top:75,bottom:175,x:150},
	{top:150,bottom:175,x:200},
	{top:75,bottom:175,x:300}],
buttons:[{x:153,y:175,trigger:1,color:"green"},
	{x:260,y:275,trigger:3,color:"cyan"},
	{x:320,y:145,trigger:2,color:"purple"}],
portals:[{color:"red",a:{x:275,y:175,theta:0,loc:1},b:{x:160,y:95,theta:0,loc:-1}},
	{color:"orange",a:{x:185,y:175,theta:0,loc:1},b:{x:415,y:225,theta:0,loc:1}}],
flag:{x:197,y:300,theta:0},
score:30,
startx:210,
starty:175
}
]
