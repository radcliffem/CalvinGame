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

{levelText:"Button, button, who's got the button?",
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
}
]