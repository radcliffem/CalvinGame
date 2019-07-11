var floor = 0;
var flip = 1;
var bridge = 2;
var move = 3;
var button = 4;

var levels = [
  { levelText: "TUTORIAL 1. Move to the goal. No jumping. The faster you complete the level, the more points you get!",
    score: 2,
   	 floor: [{left:{x: 200, y: 225}, right: {x: 400, y: 225}, type: floor}
	    ],
	    wall: [],
	    flag: {x: 285, y: 225, theta: 0},
	    portals: [],
	    startx: 255,
	    starty: 205},

  { levelText: "TUTORIAL 2. You can go up an incline.",
    score: 2,
    floor: [{left:{x: 195, y: 250}, right: {x: 295, y: 250}, type: floor},
      {left:{x: 294, y: 250}, right: {x: 345, y: 200}, type: floor},
      {left:{x: 345, y: 200}, right: {x: 405, y: 200}, type: floor}
    ],
    wall: [],
    flag: {x: 370, y: 200, theta: 0},
    portals: [],
    startx: 211,
    starty: 232},
  { levelText: "TUTORIAL 3. You can travel through a bridge.",
    score: 3,
    floor: [{left:{x: 210, y: 250}, right: {x: 310, y: 250}, type: floor},
      {left:{x: 309, y: 250}, right: {x: 360, y: 200}, type: floor},
      {left:{x: 360, y: 200}, right: {x: 390, y: 200}, type: floor},
      {left:{x: 300, y: 200}, right: {x: 360, y: 200}, type: bridge},
      {left:{x: 235, y: 200}, right: {x: 300, y: 200}, type: floor}
    ],
    wall: [],
    flag: {x: 245, y: 200, theta: 0},
    portals: [],
    startx: 220,
    starty: 230},
  { levelText: "TUTORIAL 4. You can go through portals by pressing the up button.",
    score: 3,
    floor: [{left:{x: 205, y: 225}, right: {x: 285, y: 225}, type: floor},
      {left:{x: 315, y: 225}, right: {x: 395, y: 225}, type: floor}
    ],
    wall: [],
    flag: {x: 355, y: 225, theta: 0},
    portals: [{color: "red", a:{x: 255, y: 225, theta: 0, loc: 1}, b: {x: 325, y: 225, theta: 0, loc: 1}}
    ],
    startx: 215,
    starty: 205},
  { levelText: "TUTORIAL 5. You can flip the world upside down.",
    score: 4,
    floor: [{left:{x: 293, y: 275}, right: {x: 333, y: 275}, type: floor},
      {left:{x: 333, y: 275}, right: {x: 363, y: 275}, type: flip},
      {left:{x: 363, y: 275}, right: {x: 383, y: 275}, type: floor},
      {left:{x: 252, y: 175}, right: {x: 377, y: 175}, type: floor},
      {left:{x: 232, y: 175}, right: {x: 252, y: 175}, type: flip},
      {left:{x: 217, y: 275}, right: {x: 267, y: 275}, type: floor}
    ],
    wall: [],
    flag: {x: 243, y: 275, theta: 0},
    portals: [],
    startx: 298,
    starty: 265},
  { levelText: "TUTORIAL 6. Now you're ready for your first real level!",
    score: 8,
    floor: [{left:{x: 180, y: 295.5}, right: {x: 220, y: 295.5}, type: floor},
      {left:{x: 210, y: 275.5}, right: {x: 245, y: 275.5}, type: floor},
      {left:{x: 260, y: 275.5}, right: {x: 310, y: 275.5}, type: floor},
      {left:{x: 310, y: 275.5}, right: {x: 343, y: 275.5}, type: flip},
      {left:{x: 220, y: 175.5}, right: {x: 245, y: 154.5}, type: floor},
      {left:{x: 350, y: 275.5}, right: {x: 400, y: 275.5}, type: floor},
      {left:{x: 180, y: 175.5}, right: {x: 220, y: 175.5}, type: floor},
      {left:{x: 244, y: 155.5}, right: {x: 420, y: 155.5}, type: floor},
      {left:{x: 335, y: 155.5}, right: {x: 360, y: 175.5}, type: floor},
      {left:{x: 360, y: 175.5}, right: {x: 390, y: 175.5}, type: flip},
      {left:{x: 245, y: 225.5}, right: {x: 350, y: 225.5}, type: floor}
    ],
    wall: [{top: 225.5, bottom: 275.5, x: 245},
      {top: 225.5, bottom: 275.5, x: 350}
    ],
    flag: {x: 380, y: 275.5, theta: 0},
    portals: [{color: "orange", a:{x: 195, y: 295.5, theta: 0, loc: 1}, b: {x: 265, y: 245.5, theta: 0, loc: -1}}
    ],
    startx: 210,
    starty: 273.5},
  { levelText: "TAUNT",
    score: 6,
    floor: [{left:{x: 160, y: 200.5}, right: {x: 185, y: 200.5}, type: floor},
      {left:{x: 185, y: 200.5}, right: {x: 237, y: 149.5}, type: floor},
      {left:{x: 234, y: 151.5}, right: {x: 340, y: 151.5}, type: floor},
      {left:{x: 340, y: 150.5}, right: {x: 380, y: 150.5}, type: flip},
      {left:{x: 380, y: 150.5}, right: {x: 420, y: 150.5}, type: floor},
      {left:{x: 235, y: 200.5}, right: {x: 340, y: 200.5}, type: floor},
      {left:{x: 210, y: 299.5}, right: {x: 360, y: 299.5}, type: floor},
      {left:{x: 259, y: 300.5}, right: {x: 310, y: 250.5}, type: floor},
      {left:{x: 310, y: 250.5}, right: {x: 330, y: 250.5}, type: floor},
      {left:{x: 360, y: 300.5}, right: {x: 400, y: 300.5}, type: flip},
      {left:{x: 350, y: 250.5}, right: {x: 400, y: 250.5}, type: floor},
      {left:{x: 400, y: 250.5}, right: {x: 440, y: 300.5}, type: floor},
      {left:{x: 400, y: 300.5}, right: {x: 440, y: 300.5}, type: floor}
    ],
    wall: [],
    flag: {x: 360, y: 250.5, theta: 0},
    portals: [],
    startx: 225,
    starty: 295.5},
  { levelText: "GOLDEN SECTION",
    score: 7,
    floor: [{left:{x: 200, y: 324}, right: {x: 305, y: 324}, type: floor},
      {left:{x: 305, y: 324}, right: {x: 345, y: 324}, type: flip},
      {left:{x: 345, y: 324}, right: {x: 400, y: 324}, type: floor},
      {left:{x: 200, y: 224}, right: {x: 300, y: 224}, type: floor},
      {left:{x: 345, y: 224}, right: {x: 400, y: 224}, type: floor},
      {left:{x: 200, y: 124}, right: {x: 400, y: 124}, type: floor}
    ],
    wall: [{top: 124, bottom: 325, x: 203},
      {top: 124, bottom: 325, x: 400},
      {top: 224, bottom: 326, x: 300},
      {top: 204, bottom: 224, x: 250},
      {top: 124, bottom: 144, x: 300},
      {top: 124, bottom: 144, x: 350}
    ],
    flag: {x: 385, y: 224, theta: 3.141592653589793},
    portals: [{color: "red", a:{x: 245, y: 324, theta: 0, loc: 1}, b: {x: 215, y: 144, theta: 0, loc: -1}},
      {color: "orange", a:{x: 215, y: 224, theta: 0, loc: 1}, b: {x: 265, y: 224, theta: 0, loc: 1}},
      {color: "green", a:{x: 315, y: 144, theta: 0, loc: -1}, b: {x: 365, y: 224, theta: 0, loc: 1}},
      {color: "cyan", a:{x: 351, y: 244, theta: 0, loc: -1}, b: {x: 375, y: 144, theta: 0, loc: -1}}
    ],
    startx: 205,
    starty: 319},
  { levelText: "REFLECTION",
    score: 12,
    floor: [{left:{x: 179, y: 105}, right: {x: 281, y: 105}, type: floor},
      {left:{x: 180, y: 165}, right: {x: 210, y: 165}, type: floor},
      {left:{x: 179, y: 285}, right: {x: 210, y: 285}, type: floor},
      {left:{x: 180, y: 225}, right: {x: 380, y: 225}, type: floor},
      {left:{x: 180, y: 345}, right: {x: 281, y: 345}, type: floor},
      {left:{x: 280, y: 105}, right: {x: 300, y: 105}, type: flip},
      {left:{x: 280, y: 345}, right: {x: 300, y: 345}, type: flip},
      {left:{x: 300, y: 105}, right: {x: 421, y: 105}, type: floor},
      {left:{x: 300, y: 345}, right: {x: 421, y: 345}, type: floor},
      {left:{x: 278, y: 134}, right: {x: 320, y: 104}, type: floor},
      {left:{x: 278, y: 316}, right: {x: 320, y: 346}, type: floor},
      {left:{x: 209, y: 284}, right: {x: 271, y: 347}, type: floor},
      {left:{x: 209, y: 166}, right: {x: 271, y: 103}, type: floor}
    ],
    wall: [{top: 105, bottom: 346, x: 180},
      {top: 105, bottom: 346, x: 421}
    ],
    flag: {x: 200, y: 165, theta: 3.141592653589793},
    portals: [],
    startx: 190,
    starty: 223},

		{levelText:"CAVE OF MIRRORS",
		floor:[{left:{x:100,y:275},right:{x:145,y:250},type:floor},
			{left:{x:145,y:250},right:{x:175,y:250},type:floor},
			{left:{x:175,y:250},right:{x:200,y:250},type:flip},
			{left:{x:200,y:250},right:{x:225,y:250},type:floor},
			{left:{x:225,y:250},right:{x:250,y:242},type:floor},
			{left:{x:250,y:242},right:{x:275,y:242},type:floor},
			{left:{x:275,y:242},right:{x:310,y:275},type:floor},
			{left:{x:310,y:275},right:{x:340,y:275},type:flip},
			{left:{x:310,y:225},right:{x:340,y:200},type:floor},
			{left:{x:340,y:275},right:{x:375,y:275},type:floor},
			{left:{x:375,y:275},right:{x:400,y:275},type:flip},
			{left:{x:400,y:275},right:{x:475,y:275},type:floor},
			{left:{x:475,y:275},right:{x:500,y:280},type:floor},
			{left:{x:175,y:200},right:{x:250,y:175},type:floor},
			{left:{x:250,y:175},right:{x:260,y:175},type:floor},
			{left:{x:260,y:175},right:{x:290,y:175},type:flip},
			{left:{x:290,y:175},right:{x:350,y:175},type:floor},
			{left:{x:350,y:175},right:{x:375,y:175},type:flip},
			{left:{x:350,y:225},right:{x:375,y:225},type:floor},
			{left:{x:375,y:175},right:{x:400,y:175},type:floor},
			{left:{x:400,y:175},right:{x:425,y:175},type:flip},
			{left:{x:425,y:175},right:{x:475,y:200},type:floor}],
		wall:[],
		portals:[],
		flag:{x:465,y:275,theta:0},
		startx:110,
		starty:248,
		score:10},

  { levelText: "FLOATING ISLANDS",
    score: 10,
    floor: [{left:{x: 119.5, y: 169.5}, right: {x: 180.5, y: 169.5}, type: floor},
      {left:{x: 120.5, y: 109.5}, right: {x: 340.5, y: 109.5}, type: floor},
      {left:{x: 300.5, y: 129.5}, right: {x: 340.5, y: 129.5}, type: flip},
      {left:{x: 160.5, y: 209.5}, right: {x: 298.5, y: 209.5}, type: floor},
      {left:{x: 120.5, y: 229.5}, right: {x: 180.5, y: 229.5}, type: floor},
      {left:{x: 79.5, y: 289.5}, right: {x: 140.5, y: 289.5}, type: floor},
      {left:{x: 139.5, y: 289.5}, right: {x: 179.5, y: 289.5}, type: flip},
      {left:{x: 295.5, y: 289.5}, right: {x: 445.5, y: 289.5}, type: floor},
      {left:{x: 340.5, y: 289.5}, right: {x: 392.5, y: 239.5}, type: floor},
      {left:{x: 390.5, y: 239.5}, right: {x: 420.5, y: 239.5}, type: floor},
      {left:{x: 399.5, y: 339.5}, right: {x: 520.5, y: 339.5}, type: floor}
    ],
    wall: [{top: 109.5, bottom: 170.5, x: 120.5},
      {top: 109.5, bottom: 130.5, x: 300.5},
      {top: 109.5, bottom: 130.5, x: 340.5},
      {top: 189.5, bottom: 210.5, x: 298.5},
      {top: 209.5, bottom: 230.5, x: 180.5},
      {top: 229.5, bottom: 251.5, x: 120.5},
      {top: 259.5, bottom: 290.5, x: 80.5},
      {top: 288.5, bottom: 290.5, x: 360.5},
      {top: 310.5, bottom: 340.5, x: 400.5},
      {top: 310.5, bottom: 340.5, x: 520.5}
    ],
    flag: {x: 420.5, y: 339.5, theta: 0},
    portals: [],
    startx: 140.5,
    starty: 167.5},
  { levelText: "HALL OF DOORS",
    score: 18,
    floor: [{left:{x: 67.5, y: 95}, right: {x: 438.5, y: 95}, type: floor},
      {left:{x: 67.5, y: 155}, right: {x: 487.5, y: 155}, type: floor},
      {left:{x: 67.5, y: 355}, right: {x: 530.5, y: 355}, type: floor},
      {left:{x: 487.5, y: 155}, right: {x: 517.5, y: 155}, type: bridge},
      {left:{x: 517.5, y: 155}, right: {x: 532.5, y: 155}, type: floor},
      {left:{x: 437.5, y: 94}, right: {x: 517.5, y: 155}, type: floor},
      {left:{x: 437.5, y: 198}, right: {x: 487.5, y: 155}, type: floor},
      {left:{x: 437.5, y: 198}, right: {x: 478.5, y: 198}, type: bridge},
      {left:{x: 477.5, y: 198}, right: {x: 528.5, y: 198}, type: floor},
      {left:{x: 477.5, y: 198}, right: {x: 519.5, y: 230}, type: floor},
      {left:{x: 436.5, y: 284}, right: {x: 492.5, y: 230}, type: floor},
      {left:{x: 437.5, y: 230}, right: {x: 493.5, y: 230}, type: floor},
      {left:{x: 516.5, y: 230}, right: {x: 530.5, y: 230}, type: floor},
      {left:{x: 487.5, y: 230}, right: {x: 517.5, y: 230}, type: bridge},
      {left:{x: 357.5, y: 283}, right: {x: 387.5, y: 283}, type: floor},
      {left:{x: 387.5, y: 283}, right: {x: 417.5, y: 283}, type: flip},
      {left:{x: 417.5, y: 283}, right: {x: 437.5, y: 283}, type: floor}
    ],
    wall: [{top: 95, bottom: 355, x: 67.5},
      {top: 155, bottom: 355, x: 357.5},
      {top: 154, bottom: 356, x: 530.5},
      {top: 95, bottom: 155, x: 157.5},
      {top: 95, bottom: 155, x: 337.5},
      {top: 155, bottom: 282, x: 437.5},
      {top: 315, bottom: 355, x: 187.5}
    ],
    flag: {x: 307.5, y: 355, theta: 0},
    portals: [{color: "red", a:{x: 137.5, y: 155, theta: 0, loc: 1}, b: {x: 390.5, y: 175, theta: 0, loc: -1}},
      {color: "yellow", a:{x: 87.5, y: 115, theta: 0, loc: -1}, b: {x: 172.5, y: 155, theta: 0, loc: 1}},
      {color: "cyan", a:{x: 357.5, y: 115, theta: 0, loc: -1}, b: {x: 317.5, y: 115, theta: 0, loc: -1}},
      {color: "magenta", a:{x: 257.5, y: 115, theta: 0, loc: -1}, b: {x: 297.5, y: 155, theta: 0, loc: 1}},
      {color: "orange", a:{x: 507.5, y: 355, theta: 0, loc: 1}, b: {x: 67.5, y: 195, theta: 1.5707963267948966, loc: 1}},
      {color: "purple", a:{x: 157.5, y: 355, theta: 0, loc: 1}, b: {x: 207.5, y: 355, theta: 0, loc: 1}}
    ],
    startx: 77.5,
    starty: 153},
  { levelText: "CRAZY SHADOWS",
    score: 23,
    floor: [{left:{x: 90, y: 39.5}, right: {x: 350, y: 39.5}, type: floor},
      {left:{x: 90, y: 154.5}, right: {x: 190, y: 154.5}, type: floor},
      {left:{x: 190, y: 154.5}, right: {x: 220, y: 154.5}, type: flip},
      {left:{x: 90, y: 269.5}, right: {x: 142, y: 269.5}, type: bridge},
      {left:{x: 140, y: 269.5}, right: {x: 310, y: 269.5}, type: floor},
      {left:{x: 310, y: 269.5}, right: {x: 340, y: 269.5}, type: flip},
      {left:{x: 340, y: 269.5}, right: {x: 510, y: 269.5}, type: floor},
      {left:{x: 90, y: 334.5}, right: {x: 330, y: 334.5}, type: floor},
      {left:{x: 330, y: 334.5}, right: {x: 360, y: 334.5}, type: flip},
      {left:{x: 360, y: 334.5}, right: {x: 510, y: 334.5}, type: floor},
      {left:{x: 90, y: 409.5}, right: {x: 390, y: 409.5}, type: floor},
      {left:{x: 390, y: 409.5}, right: {x: 420, y: 409.5}, type: flip},
      {left:{x: 420, y: 409.5}, right: {x: 510, y: 409.5}, type: floor},
      {left:{x: 158, y: 154.5}, right: {x: 204, y: 136.5}, type: floor},
      {left:{x: 188, y: 169.5}, right: {x: 300, y: 169.5}, type: floor},
      {left:{x: 90, y: 270.5}, right: {x: 189, y: 168.5}, type: floor},
      {left:{x: 300, y: 299.5}, right: {x: 350, y: 299.5}, type: floor},
      {left:{x: 350, y: 299.5}, right: {x: 370, y: 299.5}, type: flip},
      {left:{x: 370, y: 299.5}, right: {x: 390, y: 299.5}, type: floor},
      {left:{x: 370, y: 63.5}, right: {x: 427, y: 39.5}, type: floor},
      {left:{x: 350, y: 39.5}, right: {x: 380, y: 39.5}, type: flip},
      {left:{x: 380, y: 39.5}, right: {x: 510, y: 39.5}, type: floor},
      {left:{x: 290, y: 334.5}, right: {x: 336, y: 353.5}, type: floor}
    ],
    wall: [{top: 39.5, bottom: 410.5, x: 90},
      {top: 39.5, bottom: 410.5, x: 510},
      {top: 39.5, bottom: 189.5, x: 300}
    ],
    flag: {x: 480, y: 334.5, theta: 3.141592653589793},
    portals: [{color: "red", a:{x: 260, y: 59.5, theta: 0, loc: -1}, b: {x: 260, y: 189.5, theta: 0, loc: -1}},
      {color: "cyan", a:{x: 480, y: 59.5, theta: 0, loc: -1}, b: {x: 480, y: 287.5, theta: 0, loc: -1}},
      {color: "yellow", a:{x: 320, y: 59.5, theta: 0, loc: -1}, b: {x: 180, y: 354.5, theta: 0, loc: -1}}
    ],
    startx: 100,
    starty: 154.5},
  { levelText: "HOUSE",
    score: 12,
    floor: [{left:{x: 80, y: 386}, right: {x: 520, y: 386}, type: floor},
      {left:{x: 139, y: 156}, right: {x: 300, y: 63}, type: floor},
      {left:{x: 300, y: 63}, right: {x: 426, y: 136}, type: floor},
      {left:{x: 140, y: 231}, right: {x: 217, y: 308}, type: floor},
      {left:{x: 215, y: 306}, right: {x: 315, y: 306}, type: floor},
      {left:{x: 313, y: 305}, right: {x: 394, y: 386}, type: floor},
      {left:{x: 140, y: 232}, right: {x: 180, y: 232}, type: bridge},
      {left:{x: 179, y: 232}, right: {x: 219, y: 232}, type: floor},
      {left:{x: 219, y: 232}, right: {x: 259, y: 232}, type: flip},
      {left:{x: 259, y: 232}, right: {x: 320, y: 232}, type: floor},
      {left:{x: 320, y: 232}, right: {x: 461, y: 156}, type: floor},
      {left:{x: 420, y: 156}, right: {x: 460, y: 156}, type: bridge},
      {left:{x: 310, y: 156}, right: {x: 420, y: 156}, type: floor},
      {left:{x: 270, y: 156}, right: {x: 310, y: 156}, type: flip},
      {left:{x: 140, y: 156}, right: {x: 270, y: 156}, type: floor},
      {left:{x: 460, y: 156}, right: {x: 486, y: 156}, type: floor},
      {left:{x: 484, y: 157}, right: {x: 502, y: 139}, type: floor},
      {left:{x: 280, y: 76}, right: {x: 320, y: 76}, type: floor}
    ],
    wall: [{top: 154, bottom: 384, x: 140},
      {top: 162, bottom: 387, x: 460},
      {top: 119, bottom: 156, x: 390}
    ],
    flag: {x: 300, y: 76, theta: 3.141592653589793},
    portals: [{color: "green", a:{x: 210, y: 156, theta: 0, loc: 1}, b: {x: 465, y: 156, theta: 0, loc: 1}},
      {color: "pink", a:{x: 110, y: 386, theta: 0, loc: 1}, b: {x: 490, y: 386, theta: 0, loc: 1}}
    ],
    startx: 440,
    starty: 381},
  { levelText: "MYSTERY",
    score: 9,
    floor: [{left:{x: 150, y: 250}, right: {x: 390, y: 250}, type: floor},
      {left:{x: 390, y: 250}, right: {x: 430, y: 250}, type: flip},
      {left:{x: 150, y: 150}, right: {x: 390, y: 150}, type: floor},
      {left:{x: 390, y: 150}, right: {x: 430, y: 150}, type: flip},
      {left:{x: 350, y: 300}, right: {x: 450, y: 300}, type: floor},
      {left:{x: 380, y: 200}, right: {x: 430, y: 200}, type: floor}
    ],
    wall: [{top: 220, bottom: 250, x: 260},
      {top: 150, bottom: 180, x: 290},
      {top: 150, bottom: 280, x: 150},
      {top: 150, bottom: 250, x: 430}
    ],
    flag: {x: 430, y: 300, theta: 0},
    portals: [{color: "red", a:{x: 180, y: 270, theta: 0, loc: -1}, b: {x: 220, y: 170, theta: 0, loc: -1}},
      {color: "red", a:{x: 220, y: 250, theta: 0, loc: 1}, b: {x: 315, y: 170, theta: 0, loc: -1}},
      {color: "red", a:{x: 280, y: 250, theta: 0, loc: 1}, b: {x: 265, y: 170, theta: 0, loc: -1}},
      {color: "red", a:{x: 315, y: 250, theta: 0, loc: 1}, b: {x: 180, y: 170, theta: 0, loc: -1}},
      {color: "red", a:{x: 350, y: 250, theta: 0, loc: 1}, b: {x: 150, y: 200, theta: 1.5707963267948966, loc: 1}},
      {color: "red", a:{x: 160, y: 150, theta: 0, loc: 1}, b: {x: 350, y: 170, theta: 0, loc: -1}}
    ],
    startx: 180,
    starty: 248},

		{levelText:"CASTLE",
		score:24,
		floor:[{left:{x:50,y:400},right:{x:75,y:400},type:floor},
			{left:{x:100,y:400},right:{x:300,y:400},type:floor},
			{left:{x:300,y:400},right:{x:330,y:400},type:flip},
			{left:{x:330,y:400},right:{x:500,y:400},type:floor},
			{left:{x:525,y:400},right:{x:550,y:400},type:floor},
			{left:{x:75,y:300},right:{x:100,y:300},type:floor},
			{left:{x:100,y:300},right:{x:150,y:300},type:bridge},
			{left:{x:150,y:300},right:{x:385,y:300},type:floor},
			{left:{x:385,y:300},right:{x:415,y:300},type:flip},
			{left:{x:415,y:300},right:{x:450,y:300},type:floor},
			{left:{x:450,y:300},right:{x:500,y:300},type:bridge},
			{left:{x:500,y:300},right:{x:525,y:300},type:floor},
			{left:{x:150,y:200},right:{x:225,y:200},type:floor},
			{left:{x:225,y:200},right:{x:255,y:200},type:flip},
			{left:{x:255,y:200},right:{x:450,y:200},type:floor},
			{left:{x:150,y:50},right:{x:175,y:50},type:floor},
			{left:{x:175,y:75},right:{x:200,y:75},type:floor},
			{left:{x:200,y:50},right:{x:225,y:50},type:floor},
			{left:{x:225,y:50},right:{x:250,y:50},type:bridge},
			{left:{x:225,y:75},right:{x:250,y:75},type:floor},
			{left:{x:250,y:50},right:{x:275,y:50},type:floor},
			{left:{x:325,y:50},right:{x:350,y:50},type:floor},
			{left:{x:350,y:75},right:{x:375,y:75},type:flip},
			{left:{x:375,y:50},right:{x:400,y:50},type:floor},
			{left:{x:400,y:75},right:{x:425,y:75},type:floor},
			{left:{x:425,y:50},right:{x:450,y:50},type:floor},
			{left:{x:249,y:320},right:{x:280,y:300},type:floor}],
		wall:[{top:300,bottom:400,x:75},
			{top:300,bottom:400,x:100},
			{top:300,bottom:400,x:150},
			{top:300,bottom:400,x:450},
			{top:300,bottom:400,x:500},
			{top:300,bottom:400,x:525},
			{top:380,bottom:400,x:250},
			{top:380,bottom:400,x:350},
			{top:300,bottom:320,x:250},
			{top:300,bottom:320,x:350},
			{top:50,bottom:220,x:150},
			{top:50,bottom:220,x:450},
			{top:180,bottom:200,x:377},
			{top:50,bottom:75,x:175},
			{top:50,bottom:75,x:200},
			{top:50,bottom:75,x:225},
			{top:50,bottom:75,x:250},
			{top:50,bottom:100,x:275},
			{top:50,bottom:100,x:325},
			{top:50,bottom:75,x:350},
			{top:50,bottom:75,x:375},
			{top:50,bottom:75,x:400},
			{top:50,bottom:75,x:425}],
		flag:{x:205,y:50,theta:0},
		portals:[{color:"red",a:{x:82.5,y:300,theta:0,loc:1},b:{x:110,y:400,theta:0,loc:1}},
			{color:"orange",a:{x:130,y:400,theta:0,loc:1},b:{x:480,y:400,theta:0,loc:1}},
			{color:"yellow",a:{x:460,y:400,theta:0,loc:1},b:{x:175,y:200,theta:0,loc:1}},
			{color:"green",a:{x:507.5,y:300,theta:0,loc:1},b:{x:420,y:400,theta:0,loc:1}},
			{color:"blue",a:{x:220,y:400,theta:0,loc:1},b:{x:270,y:400,theta:0,loc:1}},
			{color:"purple",a:{x:170,y:320,theta:0,loc:-1},b:{x:375,y:400,theta:0,loc:1}},
			{color:"cyan",a:{x:232.5,y:95,theta:0,loc:-1},b:{x:357.5,y:200,theta:0,loc:1}},
			{color:"pink",a:{x:300,y:200,theta:0,loc:1},b:{x:382.5,y:70,theta:0,loc:-1}},
			{color:"magenta",a:{x:412.5,y:200,theta:0,loc:1},b:{x:257.5,y:50,theta:0,loc:1}}],
		startx:155,
		starty:398},

  { levelText: "DOUBLE DOORS",
    score: 25,
    floor: [{left:{x: 100, y: 26.5}, right: {x: 500, y: 26.5}, type: floor},
      {left:{x: 100, y: 423.5}, right: {x: 130, y: 423.5}, type: floor},
      {left:{x: 170, y: 423.5}, right: {x: 230, y: 423.5}, type: floor},
      {left:{x: 270, y: 423.5}, right: {x: 330, y: 423.5}, type: floor},
      {left:{x: 330, y: 423.5}, right: {x: 370, y: 423.5}, type: flip},
      {left:{x: 370, y: 423.5}, right: {x: 470, y: 423.5}, type: floor},
      {left:{x: 300, y: 163.5}, right: {x: 300, y: 173.5}, type: floor},
      {left:{x: 100, y: 226.5}, right: {x: 250, y: 226.5}, type: floor},
      {left:{x: 250, y: 226.5}, right: {x: 270, y: 226.5}, type: flip},
      {left:{x: 270, y: 226.5}, right: {x: 450, y: 226.5}, type: floor},
      {left:{x: 450, y: 226.5}, right: {x: 480, y: 226.5}, type: flip},
      {left:{x: 480, y: 226.5}, right: {x: 500, y: 226.5}, type: floor},
      {left:{x: 100, y: 161.5}, right: {x: 169, y: 225.5}, type: floor},
      {left:{x: 230, y: 226.5}, right: {x: 300, y: 161.5}, type: floor},
      {left:{x: 100, y: 164.5}, right: {x: 141, y: 164.5}, type: bridge},
      {left:{x: 260, y: 164.5}, right: {x: 301, y: 164.5}, type: bridge},
      {left:{x: 140, y: 164.5}, right: {x: 260, y: 164.5}, type: floor},
      {left:{x: 100, y: 86.5}, right: {x: 300, y: 86.5}, type: floor},
      {left:{x: 400, y: 226.5}, right: {x: 450, y: 176.5}, type: floor},
      {left:{x: 425, y: 177.5}, right: {x: 450, y: 176.5}, type: bridge},
      {left:{x: 449, y: 177.5}, right: {x: 469, y: 176.5}, type: floor},
      {left:{x: 400, y: 177.5}, right: {x: 425, y: 176.5}, type: flip},
      {left:{x: 350, y: 276.5}, right: {x: 475, y: 276.5}, type: floor},
      {left:{x: 300, y: 326.5}, right: {x: 400, y: 326.5}, type: floor},
      {left:{x: 300, y: 376.5}, right: {x: 350, y: 376.5}, type: floor},
      {left:{x: 450, y: 376.5}, right: {x: 500, y: 376.5}, type: floor},
      {left:{x: 350, y: 351.5}, right: {x: 450, y: 351.5}, type: floor}
    ],
    wall: [{top: 26.5, bottom: 423.5, x: 100},
      {top: 26.5, bottom: 423.5, x: 500},
      {top: 26.5, bottom: 164.5, x: 300},
      {top: 171.5, bottom: 423.5, x: 300},
      {top: 226.5, bottom: 423.5, x: 200},
      {top: 86.5, bottom: 166.5, x: 200},
      {top: 26.5, bottom: 176.5, x: 400},
      {top: 351.5, bottom: 423.5, x: 400}
    ],
    flag: {x: 450, y: 277.5, theta: 3.141592653589793},
    portals: [{color: "red", a:{x: 165, y: 164.5, theta: 0, loc: 1}, b: {x: 150, y: 246.5, theta: 0, loc: -1}},
      {color: "red", a:{x: 220, y: 164.5, theta: 0, loc: 1}, b: {x: 125, y: 86.5, theta: 0, loc: 1}},
      {color: "blue", a:{x: 250, y: 86.5, theta: 0, loc: 1}, b: {x: 350, y: 46.5, theta: 0, loc: -1}},
      {color: "green", a:{x: 425, y: 46.5, theta: 0, loc: -1}, b: {x: 325, y: 246.5, theta: 0, loc: -1}},
      {color: "green", a:{x: 475, y: 46.5, theta: 0, loc: -1}, b: {x: 260, y: 246.5, theta: 0, loc: -1}}
    ],
    startx: 200,
    starty: 224.5},
  { levelText: "DECISIONS, DECISIONS",
    score: 17,
    floor: [{left:{x: 150, y: 27.5}, right: {x: 170, y: 27.5}, type: flip},
      {left:{x: 170, y: 27.5}, right: {x: 450, y: 27.5}, type: floor},
      {left:{x: 450, y: 27.5}, right: {x: 470, y: 27.5}, type: flip},
      {left:{x: 140, y: 67.5}, right: {x: 160, y: 67.5}, type: floor},
      {left:{x: 200, y: 67.5}, right: {x: 260, y: 67.5}, type: floor},
      {left:{x: 260, y: 67.5}, right: {x: 300, y: 67.5}, type: flip},
      {left:{x: 260, y: 97.5}, right: {x: 310, y: 97.5}, type: floor},
      {left:{x: 140, y: 137.5}, right: {x: 190, y: 137.5}, type: floor},
      {left:{x: 190, y: 137.5}, right: {x: 210, y: 137.5}, type: flip},
      {left:{x: 280, y: 137.5}, right: {x: 310, y: 137.5}, type: flip},
      {left:{x: 310, y: 137.5}, right: {x: 400, y: 137.5}, type: floor},
      {left:{x: 400, y: 137.5}, right: {x: 440, y: 137.5}, type: flip},
      {left:{x: 180, y: 177.5}, right: {x: 200, y: 177.5}, type: floor},
      {left:{x: 170, y: 217.5}, right: {x: 230, y: 217.5}, type: floor},
      {left:{x: 230, y: 217.5}, right: {x: 250, y: 217.5}, type: flip},
      {left:{x: 250, y: 217.5}, right: {x: 380, y: 217.5}, type: floor},
      {left:{x: 150, y: 267.5}, right: {x: 360, y: 267.5}, type: floor},
      {left:{x: 400, y: 267.5}, right: {x: 440, y: 267.5}, type: floor},
      {left:{x: 90, y: 337.5}, right: {x: 200, y: 337.5}, type: floor},
      {left:{x: 200, y: 337.5}, right: {x: 220, y: 337.5}, type: flip},
      {left:{x: 285, y: 337.5}, right: {x: 410, y: 337.5}, type: floor},
      {left:{x: 410, y: 337.5}, right: {x: 430, y: 337.5}, type: flip},
      {left:{x: 430, y: 337.5}, right: {x: 480, y: 337.5}, type: floor},
      {left:{x: 260, y: 422.5}, right: {x: 510, y: 422.5}, type: floor}
    ],
    wall: [{top: 47.5, bottom: 68.5, x: 140},
      {top: 67.5, bottom: 87.5, x: 200},
      {top: 247.5, bottom: 268.5, x: 150},
      {top: 317.5, bottom: 338.5, x: 90},
      {top: 317.5, bottom: 338.5, x: 480},
      {top: 402.5, bottom: 422.5, x: 260},
      {top: 402.5, bottom: 422.5, x: 510}
    ],
    flag: {x: 260, y: 217.5, theta: 3.141592653589793},
    portals: [{color: "blue", a:{x: 185, y: 177.5, theta: 0, loc: 1}, b: {x: 470, y: 422.5, theta: 0, loc: 1}}
    ],
    startx: 190,
    starty: 215.5},

		{levelText:"PALACE",
		score:20,
		floor:[{left:{x:100,y:400},right:{x:380,y:400},type:floor},
			{left:{x:380,y:400},right:{x:400,y:400},type:flip},
			{left:{x:400,y:400},right:{x:500,y:400},type:floor},
			{left:{x:110,y:250},right:{x:120,y:260},type:floor},
			{left:{x:120,y:260},right:{x:150,y:260},type:floor},
			{left:{x:160,y:375},right:{x:210,y:375},type:floor},
			{left:{x:210,y:375},right:{x:230,y:400},type:floor},
			{left:{x:130,y:201},right:{x:161,y:150},type:floor},
			{left:{x:160,y:100},right:{x:180.5,y:75},type:floor},
			{left:{x:179.5,y:75},right:{x:200,y:100},type:floor},
			{left:{x:199,y:170},right:{x:250,y:170},type:floor},
			{left:{x:248,y:100},right:{x:275,y:50},type:floor},
			{left:{x:275,y:50},right:{x:302,y:102},type:floor},
			{left:{x:250,y:100},right:{x:270,y:100},type:flip},
			{left:{x:270,y:100},right:{x:325,y:100},type:floor},
			{left:{x:250,y:160},right:{x:264,y:160},type:floor},
			{left:{x:250,y:170},right:{x:263,y:170},type:flip},
			{left:{x:180,y:207},right:{x:220,y:207},type:floor},
			{left:{x:200,y:270},right:{x:225,y:270},type:floor},
			{left:{x:225,y:270},right:{x:240,y:270},type:flip},
			{left:{x:240,y:270},right:{x:310,y:270},type:floor},
			{left:{x:265,y:245},right:{x:300,y:245},type:floor},
			{left:{x:300,y:245},right:{x:330,y:200},type:floor},
			{left:{x:310,y:270},right:{x:340,y:245},type:floor},
			{left:{x:300,y:245},right:{x:340,y:245},type:bridge},
			{left:{x:340,y:245},right:{x:400,y:245},type:floor},
			{left:{x:330,y:200},right:{x:350,y:200},type:floor},
			{left:{x:300,y:175},right:{x:340,y:175},type:floor},
			{left:{x:315,y:320},right:{x:340,y:320},type:floor},
			{left:{x:339,y:330},right:{x:410,y:330},type:floor},
			{left:{x:410,y:330},right:{x:465,y:400},type:floor},
			{left:{x:400,y:245},right:{x:430,y:225},type:floor},
			{left:{x:430,y:225},right:{x:475,y:225},type:floor},
			{left:{x:475,y:225},right:{x:485,y:220},type:floor},
			{left:{x:460,y:340},right:{x:475,y:340},type:flip},
			{left:{x:475,y:340},right:{x:490,y:340},type:floor},
			{left:{x:340,y:140},right:{x:360,y:125},type:floor},
			{left:{x:360,y:125},right:{x:380,y:140},type:floor},
			{left:{x:380,y:175},right:{x:410,y:175},type:floor},
			{left:{x:410,y:140},right:{x:430,y:125},type:floor},
			{left:{x:430,y:125},right:{x:450,y:140},type:floor},
		],
		wall:[{top:260,bottom:400,x:140},
			{top:200,bottom:230,x:130},
			{top:100,bottom:151,x:161},
			{top:100,bottom:171,x:200},
			{top:100,bottom:170,x:250},
			{top:100,bottom:175,x:300},
			{top:160,bottom:247,x:264},
			{top:260,bottom:280,x:200},
			{top:235,bottom:245,x:380},
			{top:320,bottom:330,x:339},
			{top:225,bottom:340,x:460},
			{top:140,bottom:175,x:340},
			{top:140,bottom:175,x:380},
			{top:140,bottom:175,x:410},
			{top:140,bottom:175,x:450}
			],
		flag: {x:272, y:50, theta:0},
		portals:[{color:"orange", a:{x:252,y:160,theta:0,loc:1},b:{x:305,y:100,theta:0,loc:1}},
			{color:"purple",a:{x:125,y:260,theta:0,loc:1},b:{x:196,y:400,theta:0,loc:1}},
			{color:"blue",a:{x:210,y:190,theta:0,loc:-1},b:{x:205,y:290,theta:0,loc:-1}},
			{color:"green",a:{x:270,y:245,theta:0,loc:1},b:{x:202,y:227,theta:0,loc:-1}},
			{color:"brown", a:{x:335,y:200,theta:0,loc:1},b:{x:363,y:245,theta:0,loc:1}},
			{color:"red", a:{x:323,y:340,theta:0,loc:-1},b:{x:335,y:220,theta:0,loc:-1}},
			{color:"pink",a:{x:386,y:245,theta:0,loc:1},b:{x:120,y:400,theta:0,loc:1}},
			{color:"yellow",a:{x:350,y:330,theta:0,loc:1},b:{x:420,y:400,theta:0,loc:1}},
			{color:"magenta",a:{x:462,y:245,theta:0,loc:-1},b:{x:188,y:227,theta:0,loc:-1}}],
		startx:490,
		starty:398},

  { levelText: "THE TRIAL",
    score: 38,
    floor: [{left:{x: 75, y: 187.5}, right: {x: 125, y: 237.5}, type: floor},
      {left:{x: 75, y: 187.5}, right: {x: 106, y: 187.5}, type: bridge},
      {left:{x: 124, y: 237.5}, right: {x: 175, y: 237.5}, type: floor},
      {left:{x: 105, y: 187.5}, right: {x: 175, y: 187.5}, type: floor},
      {left:{x: 175, y: 187.5}, right: {x: 224, y: 140.5}, type: floor},
      {left:{x: 193, y: 142.5}, right: {x: 225, y: 142.5}, type: bridge},
      {left:{x: 75, y: 142.5}, right: {x: 195, y: 142.5}, type: floor},
      {left:{x: 75, y: 87.5}, right: {x: 225, y: 87.5}, type: floor},
      {left:{x: 174, y: 237.5}, right: {x: 200, y: 212.5}, type: floor},
      {left:{x: 200, y: 212.5}, right: {x: 225, y: 212.5}, type: floor},
      {left:{x: 225, y: 212.5}, right: {x: 250, y: 237.5}, type: floor},
      {left:{x: 249, y: 237.5}, right: {x: 325, y: 237.5}, type: floor},
      {left:{x: 225, y: 142.5}, right: {x: 255, y: 142.5}, type: bridge},
      {left:{x: 254, y: 142.5}, right: {x: 284, y: 142.5}, type: floor},
      {left:{x: 275, y: 212.5}, right: {x: 305, y: 212.5}, type: floor},
      {left:{x: 324, y: 238.5}, right: {x: 450, y: 112.5}, type: floor},
      {left:{x: 305, y: 197.5}, right: {x: 365, y: 197.5}, type: bridge},
      {left:{x: 450, y: 112.5}, right: {x: 470, y: 112.5}, type: floor},
      {left:{x: 410, y: 112.5}, right: {x: 450, y: 112.5}, type: bridge},
      {left:{x: 360, y: 112.5}, right: {x: 410, y: 112.5}, type: floor},
      {left:{x: 75, y: 37.5}, right: {x: 395, y: 37.5}, type: floor},
      {left:{x: 440, y: 37.5}, right: {x: 470, y: 37.5}, type: floor},
      {left:{x: 175, y: 287.5}, right: {x: 195, y: 287.5}, type: flip},
      {left:{x: 195, y: 287.5}, right: {x: 215, y: 287.5}, type: floor},
      {left:{x: 215, y: 287.5}, right: {x: 255, y: 327.5}, type: floor},
      {left:{x: 254, y: 327.5}, right: {x: 285, y: 327.5}, type: floor},
      {left:{x: 285, y: 327.5}, right: {x: 305, y: 307.5}, type: floor},
      {left:{x: 305, y: 307.5}, right: {x: 485, y: 307.5}, type: floor},
      {left:{x: 175, y: 387.5}, right: {x: 250, y: 387.5}, type: floor},
      {left:{x: 300, y: 387.5}, right: {x: 485, y: 387.5}, type: floor},
      {left:{x: 486, y: 387.5}, right: {x: 505, y: 387.5}, type: flip},
      {left:{x: 375, y: 412.5}, right: {x: 525, y: 412.5}, type: floor},
      {left:{x: 345, y: 412.5}, right: {x: 375, y: 412.5}, type: flip},
      {left:{x: 275, y: 412.5}, right: {x: 345, y: 412.5}, type: floor},
      {left:{x: 250, y: 387.5}, right: {x: 270, y: 367.5}, type: floor},
      {left:{x: 270, y: 367.5}, right: {x: 300, y: 367.5}, type: floor}
    ],
    wall: [{top: 37.5, bottom: 188.5, x: 75},
      {top: 87.5, bottom: 142.5, x: 225},
      {top: 222.5, bottom: 387.5, x: 175},
      {top: 212.5, bottom: 237.5, x: 275},
      {top: 197.5, bottom: 212.5, x: 305},
      {top: 97.5, bottom: 127.5, x: 470},
      {top: 302.5, bottom: 388.5, x: 485},
      {top: 367.5, bottom: 387.5, x: 300}
    ],
    flag: {x: 475, y: 412.5, theta: 0},
    portals: [{color: "red", a:{x: 85, y: 142.5, theta: 0, loc: 1}, b: {x: 85, y: 57.5, theta: 0, loc: -1}},
      {color: "cyan", a:{x: 285, y: 237.5, theta: 0, loc: 1}, b: {x: 255, y: 237.5, theta: 0, loc: 1}},
      {color: "lime", a:{x: 280, y: 388.5, theta: 0, loc: -1}, b: {x: 315, y: 387.5, theta: 0, loc: 1}},
      {color: "lime", a:{x: 345, y: 387.5, theta: 0, loc: 1}, b: {x: 450, y: 57.5, theta: 0, loc: -1}},
      {color: "lime", a:{x: 375, y: 387.5, theta: 0, loc: 1}, b: {x: 210, y: 107.5, theta: 0, loc: -1}},
      {color: "grey", a:{x: 380, y: 112.5, theta: 0, loc: 1}, b: {x: 453, y: 132.5, theta: 0, loc: -1}}
    ],
    startx: 165,
    starty: 235.5},
  { levelText: "RED HERRING",
    score: 30,
    floor: [{left:{x: 160, y: 414.5}, right: {x: 185, y: 414.5}, type: floor},
      {left:{x: 185, y: 414.5}, right: {x: 215, y: 414.5}, type: flip},
      {left:{x: 215, y: 414.5}, right: {x: 265, y: 414.5}, type: floor},
      {left:{x: 265, y: 414.5}, right: {x: 295, y: 414.5}, type: flip},
      {left:{x: 295, y: 414.5}, right: {x: 410, y: 414.5}, type: floor},
      {left:{x: 410, y: 414.5}, right: {x: 440, y: 414.5}, type: flip},
      {left:{x: 180, y: 394.5}, right: {x: 260, y: 394.5}, type: floor},
      {left:{x: 320, y: 394.5}, right: {x: 350, y: 394.5}, type: flip},
      {left:{x: 350, y: 394.5}, right: {x: 440, y: 394.5}, type: floor},
      {left:{x: 320, y: 354.5}, right: {x: 410, y: 354.5}, type: floor},
      {left:{x: 410, y: 354.5}, right: {x: 440, y: 354.5}, type: flip},
      {left:{x: 322, y: 314.5}, right: {x: 380, y: 314.5}, type: floor},
      {left:{x: 160, y: 294.5}, right: {x: 240, y: 294.5}, type: floor},
      {left:{x: 300, y: 294.5}, right: {x: 380, y: 294.5}, type: floor},
      {left:{x: 240, y: 274.5}, right: {x: 260, y: 274.5}, type: floor},
      {left:{x: 279, y: 274.5}, right: {x: 300, y: 274.5}, type: floor},
      {left:{x: 180, y: 194.5}, right: {x: 210, y: 194.5}, type: floor},
      {left:{x: 210, y: 194.5}, right: {x: 240, y: 194.5}, type: flip},
      {left:{x: 200, y: 134.5}, right: {x: 240, y: 134.5}, type: floor},
      {left:{x: 300, y: 134.5}, right: {x: 340, y: 134.5}, type: floor},
      {left:{x: 160, y: 54.5}, right: {x: 180, y: 54.5}, type: floor},
      {left:{x: 200, y: 54.5}, right: {x: 260, y: 54.5}, type: floor},
      {left:{x: 320, y: 54.5}, right: {x: 400, y: 54.5}, type: floor},
      {left:{x: 320, y: 74.5}, right: {x: 360, y: 74.5}, type: floor},
      {left:{x: 160, y: 34.5}, right: {x: 190, y: 34.5}, type: flip},
      {left:{x: 190, y: 34.5}, right: {x: 365, y: 34.5}, type: floor},
      {left:{x: 365, y: 34.5}, right: {x: 395, y: 34.5}, type: flip},
      {left:{x: 395, y: 34.5}, right: {x: 440, y: 34.5}, type: floor}
    ],
    wall: [{top: 34.5, bottom: 415.5, x: 161},
      {top: 54.5, bottom: 214.5, x: 180},
      {top: 54.5, bottom: 294.5, x: 260},
      {top: 314.5, bottom: 394.5, x: 260},
      {top: 274.5, bottom: 295.5, x: 279},
      {top: 34.5, bottom: 274.5, x: 300},
      {top: 154.5, bottom: 294.5, x: 340},
      {top: 154.5, bottom: 294.5, x: 360},
      {top: 74.5, bottom: 94.5, x: 360},
      {top: 74.5, bottom: 334.5, x: 400},
      {top: 34.5, bottom: 414.5, x: 440}
    ],
    flag: {x: 350, y: 314.5, theta: 3.141592653589793},
    portals: [{color: "fuchsia", a:{x: 166, y: 74.5, theta: 0, loc: -1}, b: {x: 345, y: 294.5, theta: 0, loc: 1}},
      {color: "blue", a:{x: 225, y: 74.5, theta: 0, loc: -1}, b: {x: 425, y: 394.5, theta: 0, loc: 1}},
      {color: "red", a:{x: 245, y: 274.5, theta: 0, loc: 1}, b: {x: 365, y: 334.5, theta: 0, loc: -1}},
      {color: "lime", a:{x: 325, y: 354.5, theta: 0, loc: 1}, b: {x: 365, y: 74.5, theta: 0, loc: -1}}
    ],
    startx: 350,
    starty: 352.5},

		{levelText:"FOURSQUARE",
		floor:[
		  {left:{x: 5.0, y: 365.0}, right: {x: 185.0, y: 365.0}, type: floor},
		  {left:{x: 35.0, y: 365.0}, right: {x: 80.0, y: 320.0}, type: floor},
		  {left:{x: 155.0, y: 365.0}, right: {x: 155.0, y: 345.0}, type: floor},
		  {left:{x: 215.0, y: 365.0}, right: {x: 395.0, y: 365.0}, type: floor},
		  {left:{x: 125.0, y: 345.0}, right: {x: 155.0, y: 345.0}, type: floor},
		  {left:{x: 155.0, y: 345.0}, right: {x: 185.0, y: 315.0}, type: floor},
		  {left:{x: 5.0, y: 335.0}, right: {x: 20.0, y: 335.0}, type: floor},
		  {left:{x: 20.0, y: 305.0}, right: {x: 50.0, y: 305.0}, type: floor},
		  {left:{x: 35.0, y: 275.0}, right: {x: 105.0, y: 275.0}, type: floor},
		  {left:{x: 95.0, y: 320.0}, right: {x: 125.0, y: 320.0}, type: floor},
		  {left:{x: 125.0, y: 320.0}, right: {x: 155.0, y: 290.0}, type: floor},
		  {left:{x: 155.0, y: 290.0}, right: {x: 165.0, y: 290.0}, type: floor},
		  {left:{x: 185.0, y: 315.0}, right: {x: 200.0, y: 315.0}, type: floor},
		  {left:{x: 230.0, y: 335.0}, right: {x: 300.0, y: 335.0}, type: floor},
		  {left:{x: 350.0, y: 335.0}, right: {x: 360.0, y: 335.0}, type: floor},
		  {left:{x: 65.0, y: 230.0}, right: {x: 185.0, y: 230.0}, type: floor},
		  {left:{x: 20.0, y: 200.0}, right: {x: 35.0, y: 200.0}, type: floor},
		  {left:{x: 35.0, y: 200.0}, right: {x: 50.0, y: 185.0}, type: floor},
		  {left:{x: 50.0, y: 185.0}, right: {x: 175.0, y: 185.0}, type: floor},
		  {left:{x: 225.0, y: 185.0}, right: {x: 350.0, y: 185.0}, type: floor},
		  {left:{x: 201.0, y: 215.0}, right: {x: 215.0, y: 215.0}, type: floor},
		  {left:{x: 215.0, y: 215.0}, right: {x: 245.0, y: 245.0}, type: floor},
		  {left:{x: 220.0, y: 275.0}, right: {x: 235.0, y: 275.0}, type: floor},
		  {left:{x: 235.0, y: 275.0}, right: {x: 265.0, y: 305.0}, type: floor},
		  {left:{x: 335.0, y: 320.0}, right: {x: 350.0, y: 335.0}, type: floor},
		  {left:{x: 350.0, y: 335.0}, right: {x: 360.0, y: 335.0}, type: floor},
		  {left:{x: 320.0, y: 275.0}, right: {x: 335.0, y: 275.0}, type: floor},
		  {left:{x: 335.0, y: 275.0}, right: {x: 350.0, y: 290.0}, type: floor},
		  {left:{x: 360.0, y: 290.0}, right: {x: 380.0, y: 290.0}, type: floor},
		  {left:{x: 305.0, y: 245.0}, right: {x: 320.0, y: 245.0}, type: floor},
		  {left:{x: 330.0, y: 245.0}, right: {x: 350.0, y: 245.0}, type: floor},
		  {left:{x: 290.0, y: 205.0}, right: {x: 320.0, y: 205.0}, type: floor},
		  {left:{x: 350.0, y: 185.0}, right: {x: 365.0, y: 170.0}, type: floor},
		  {left:{x: 364.0, y: 170.0}, right: {x: 380.0, y: 170.0}, type: floor},
		  {left:{x: 35.0, y: 170.0}, right: {x: 50.0, y: 185.0}, type: floor},
		  {left:{x: 40.0, y: 125.0}, right: {x: 50.0, y: 125.0}, type: floor},
		  {left:{x: 50.0, y: 125.0}, right: {x: 80.0, y: 155.0}, type: floor},
		  {left:{x: 50.0, y: 95.0}, right: {x: 65.0, y: 95.0}, type: floor},
		  {left:{x: 65.0, y: 95.0}, right: {x: 125.0, y: 155.0}, type: floor},
		  {left:{x: 125.0, y: 155.0}, right: {x: 170.0, y: 155.0}, type: floor},
		  {left:{x: 20.0, y: 25.0}, right: {x: 40.0, y: 25.0}, type: floor},
		  {left:{x: 40.0, y: 25.0}, right: {x: 140.0, y: 125.0}, type: floor},
		  {left:{x: 140.0, y: 125.0}, right: {x: 155.0, y: 125.0}, type: floor},
		  {left:{x: 125.0, y: 65.0}, right: {x: 155.0, y: 95.0}, type: floor},
		  {left:{x: 155.0, y: 95.0}, right: {x: 180.0, y: 95.0}, type: floor},
		  {left:{x: 110.0, y: 35.0}, right: {x: 140.0, y: 35.0}, type: floor},
		  {left:{x: 140.0, y: 35.0}, right: {x: 170.0, y: 65.0}, type: floor},
		  {left:{x: 170.0, y: 25.0}, right: {x: 180.0, y: 35.0}, type: floor},
		  {left:{x: 5.0, y: 5.0}, right: {x: 185.0, y: 5.0}, type: floor},
		  {left:{x: 200.0, y: 5.0}, right: {x: 395.0, y: 5.0}, type: floor},
		  {left:{x: 201.0, y: 125.0}, right: {x: 215.0, y: 125.0}, type: floor},
		  {left:{x: 215.0, y: 125.0}, right: {x: 230.0, y: 110.0}, type: floor},
		  {left:{x: 230.0, y: 155.0}, right: {x: 260.0, y: 155.0}, type: floor},
		  {left:{x: 245.0, y: 110.0}, right: {x: 305.0, y: 110.0}, type: floor},
		  {left:{x: 260.0, y: 155.0}, right: {x: 275.0, y: 140.0}, type: floor},
		  {left:{x: 275.0, y: 140.0}, right: {x: 348.0, y: 140.0}, type: floor},
		  {left:{x: 305.0, y: 110.0}, right: {x: 320.0, y: 95.0}, type: floor},
		  {left:{x: 260.0, y: 80.0}, right: {x: 275.0, y: 80.0}, type: floor},
		  {left:{x: 305.0, y: 65.0}, right: {x: 348.0, y: 65.0}, type: floor},
		  {left:{x: 350.0, y: 185.0}, right: {x: 365.0, y: 170.0}, type: floor},
		  {left:{x: 365.0, y: 170.0}, right: {x: 380.0, y: 170.0}, type: floor},
		  {left:{x: 380.0, y: 35.0}, right: {x: 395.0, y: 35.0}, type: floor},
		  {left:{x: 200.0, y: 175.0}, right: {x: 215.0, y: 175.0}, type: floor},
		  {left:{x: 200.0, y: 195.0}, right: {x: 215.0, y: 195.0}, type: floor},
		  {left:{x: 215.0, y: 195.0}, right: {x: 225.0, y: 185.0}, type: floor},
		  {left:{x: 215.0, y: 175.0}, right: {x: 225.0, y: 185.0}, type: floor},
		  {left:{x: 185.0, y: 175.0}, right: {x: 200.0, y: 175.0}, type: floor},
		  {left:{x: 185.0, y: 195.0}, right: {x: 200.0, y: 195.0}, type: floor},
		  {left:{x: 175.0, y: 185.0}, right: {x: 185.0, y: 195.0}, type: floor},
		  {left:{x: 175.0, y: 185.0}, right: {x: 185.0, y: 175.0}, type: floor},
		  {left:{x: 368.0, y: 245.0}, right: {x: 380.0, y: 245.0}, type: floor},
		  {left:{x: 289.0, y: 289.0}, right: {x: 320.0, y: 320.0}, type: floor},
		  {left:{x: 260.0, y: 245.0}, right: {x: 275.0, y: 260.0}, type: floor},
		  {left:{x: 240.0, y: 205.0}, right: {x: 275.0, y: 205.0}, type: floor},
		  {left:{x: 275.0, y: 260.0}, right: {x: 290.0, y: 260.0}, type: floor},
		  {left:{x: 20.0, y: 275.0}, right: {x: 35.0, y: 275.0}, type: flip},
		  {left:{x: 20.0, y: 170.0}, right: {x: 35.0, y: 170.0}, type: flip},
		  {left:{x: 50.0, y: 230.0}, right: {x: 65.0, y: 230.0}, type: flip},
		  {left:{x: 80.0, y: 320.0}, right: {x: 95.0, y: 320.0}, type: flip},
		  {left:{x: 80.0, y: 155.0}, right: {x: 95.0, y: 155.0}, type: flip},
		  {left:{x: 95.0, y: 35.0}, right: {x: 110.0, y: 35.0}, type: flip},
		  {left:{x: 105.0, y: 275.0}, right: {x: 110.0, y: 275.0}, type: flip},
		  {left:{x: 112.0, y: 345.0}, right: {x: 125.0, y: 345.0}, type: flip},
		  {left:{x: 155.0, y: 125.0}, right: {x: 165.0, y: 125.0}, type: flip},
		  {left:{x: 185.0, y: 5.0}, right: {x: 195.0, y: 5.0}, type: flip},
		  {left:{x: 185.0, y: 230.0}, right: {x: 197.0, y: 230.0}, type: flip},
		  {left:{x: 185.0, y: 365.0}, right: {x: 200.0, y: 365.0}, type: flip},
		  {left:{x: 200.0, y: 365.0}, right: {x: 215.0, y: 365.0}, type: flip},
		  {left:{x: 201.0, y: 65.0}, right: {x: 210.0, y: 65.0}, type: flip},
		  {left:{x: 216.0, y: 335.0}, right: {x: 230.0, y: 335.0}, type: flip},
		  {left:{x: 230.0, y: 110.0}, right: {x: 240.0, y: 110.0}, type: flip},
		  {left:{x: 248.0, y: 65.0}, right: {x: 256.0, y: 65.0}, type: flip},
		  {left:{x: 275.0, y: 205.0}, right: {x: 290.0, y: 205.0}, type: flip},
		  {left:{x: 275.0, y: 50.0}, right: {x: 285.0, y: 50.0}, type: flip},
		  {left:{x: 320.0, y: 245.0}, right: {x: 330.0, y: 245.0}, type: flip},
		  {left:{x: 350.0, y: 290.0}, right: {x: 360.0, y: 290.0}, type: flip},
		  {left:{x: 320.0, y: 320.0}, right: {x: 335.0, y: 320.0}, type: flip},
		  {left:{x: 245.0, y: 245.0}, right: {x: 260.0, y: 245.0}, type: flip},
		  {left:{x: 230.0, y: 205.0}, right: {x: 240.0, y: 205.0}, type: flip}
		],
		wall:[{top: 335.0, bottom: 365.0, x: 5.0},
		  {top: 5.0, bottom: 335.0, x: 20.0},
		  {top: 5.0, bottom: 175.0, x: 200.0},
		  {top: 195.0, bottom: 365.0, x: 200.0},
		  {top: 5.0, bottom: 20.0, x: 230.0},
		  {top: 65.0, bottom: 80.0, x: 260.0},
		  {top: 5.0, bottom: 20.0, x: 290.0},
		  {top: 5.0, bottom: 65.0, x: 305.0},
		  {top: 50.0, bottom: 65.0, x: 335.0},
		  {top: 65.0, bottom: 140.0, x: 348.0},
		  {top: 5.0, bottom: 140.0, x: 365.0},
		  {top: 5.0, bottom: 35.0, x: 395.0},
		  {top: 35.0, bottom: 365.0, x: 380.0},
		  {top: 205.0, bottom: 230.0, x: 320.0},
		  {top: 185.0, bottom: 205.0, x: 350.0},
		  {top: 50.0, bottom: 80.0, x: 275.0},
		  {top: 260, bottom: 290, x: 290},
		  {top: 260, bottom: 290, x: 291},
		  {top: 65, bottom: 110, x: 245}
		],

		flag:{x: 380, y: 5, theta: 3.141592653589793},
		portals:[
		  {color: "#000000", a:{x: 70, y: 365.0, theta: 0, loc: 1}, b: {x: 25, y: 325.0, theta: 0, loc: -1}},
		  {color: "#ffffff", a:{x: 187.5, y: 335.0, theta: 0, loc: -1}, b: {x: 187.5, y: 195.0, theta: 0, loc: 1}},
		  {color: "#f58231", a:{x: 20, y: 200.0, theta: 0, loc: 1}, b: {x: 367.5, y: 190.0, theta: 0, loc: -1}},
		  {color: "#f032e6", a:{x: 20, y: 25.0, theta: 0, loc: 1}, b: {x: 367.5, y: 365.0, theta: 0, loc: 1}},
		  {color: "#4363d8", a:{x: 187.5, y: 215.0, theta: 0, loc: -1}, b: {x: 187.5, y: 175.0, theta: 0, loc: 1}},
		  {color: "#3cb44b", a:{x: 200, y: 215.0, theta: 0, loc: 1}, b: {x: 200, y: 175.0, theta: 0, loc: 1}},
		  {color: "#000000", a:{x: 337.5, y: 205.0, theta: 0, loc: -1}, b: {x: 367.5, y: 245.0, theta: 0, loc: 1}},
		  {color: "#42d4f4", a:{x: 200, y: 125.0, theta: 0, loc: 1}, b: {x: 200, y: 25.0, theta: 0, loc: -1}},
		  {color: "#a9a9a9", a:{x: 217.5, y: 25.0, theta: 0, loc: -1}, b: {x: 310, y: 65.0, theta: 0, loc: 1}},
		  {color: "#469990", a:{x: 335, y: 140.0, theta: 0, loc: 1}, b: {x: 335, y: 65.0, theta: 0, loc: 1}},
		  {color: "#ffe119", a:{x: 247.5, y: 110.0, theta: 0, loc: 1}, b: {x: 292.5, y: 25.0, theta: 0, loc: -1}},
		  {color: "#800000", a:{x: 280.0, y: 140.0, theta: 0, loc: 1}, b: {x: 262.5, y: 25.0, theta: 0, loc: -1}},
		  {color: "#911eb4", a:{x: 262.5, y: 80.0, theta: 0, loc: 1}, b: {x: 278.5, y: 25.0, theta: 0, loc: -1}},
		  {color: "#e6194B", a:{x: 280.0, y: 110.0, theta: 0, loc: 1}, b: {x: 320, y: 25.0, theta: 0, loc: -1}},
		  {color: "#000000", a:{x: 352.5, y: 25.0, theta: 0, loc: -1}, b: {x: 367.5, y: 170.0, theta: 0, loc: 1}},
		  {color: "#ffffff", a:{x: 200, y: 195.0, theta: 0, loc: -1}, b: {x: 385, y: 365.0, theta: 0, loc: 1}},
		  {color: "#ffffff", a:{x: 385, y: 55.0, theta: 0, loc: -1}, b: {x: 5, y: 335.0, theta: 0, loc: 1}},
		  {color: "#000075", a:{x: 5, y: 25.0, theta: 0, loc: -1}, b: {x: 367.5, y: 125.0, theta: 0, loc: 1}}],
		startx: 15, 
		starty: 365,
		score:60},
		
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
	portals:[],
	startx:275,
	starty:223
	},
	

  { levelText: "IT'S A TRAP(EZOID)!",
    score: 45,
    floor: [{left:{x: 10, y: 360}, right: {x: 100, y: 360}, type: floor},
      {left:{x: 10, y: 360}, right: {x: 170, y: 120}, type: floor},
      {left:{x: 58, y: 332}, right: {x: 97, y: 270}, type: floor},
      {left:{x: 97, y: 270}, right: {x: 130, y: 270}, type: floor},
      {left:{x: 88, y: 332}, right: {x: 110, y: 300}, type: floor},
      {left:{x: 120, y: 320}, right: {x: 230, y: 320}, type: floor},
      {left:{x: 110, y: 300}, right: {x: 150, y: 300}, type: floor},
      {left:{x: 90, y: 240}, right: {x: 110, y: 240}, type: flip},
      {left:{x: 110, y: 240}, right: {x: 130, y: 240}, type: flip},
      {left:{x: 100, y: 360}, right: {x: 110, y: 360}, type: flip},
      {left:{x: 110, y: 360}, right: {x: 130, y: 360}, type: flip},
      {left:{x: 130, y: 240}, right: {x: 150, y: 240}, type: floor},
      {left:{x: 110, y: 210}, right: {x: 150, y: 210}, type: floor},
      {left:{x: 130, y: 360}, right: {x: 550, y: 360}, type: floor},
      {left:{x: 150, y: 150}, right: {x: 170, y: 150}, type: floor},
      {left:{x: 150, y: 180}, right: {x: 170, y: 180}, type: floor},
      {left:{x: 150, y: 300}, right: {x: 170, y: 300}, type: flip},
      {left:{x: 170, y: 300}, right: {x: 190, y: 300}, type: flip},
      {left:{x: 170, y: 240}, right: {x: 192, y: 240}, type: floor},
      {left:{x: 170, y: 150}, right: {x: 190, y: 150}, type: flip},
      {left:{x: 190, y: 150}, right: {x: 210, y: 150}, type: flip},
      {left:{x: 170, y: 120}, right: {x: 430, y: 120}, type: floor},
      {left:{x: 170, y: 240}, right: {x: 190, y: 240}, type: floor},
      {left:{x: 190, y: 240}, right: {x: 230, y: 270}, type: floor},
      {left:{x: 210, y: 300}, right: {x: 250, y: 300}, type: floor},
      {left:{x: 190, y: 210}, right: {x: 230, y: 240}, type: floor},
      {left:{x: 210, y: 150}, right: {x: 230, y: 180}, type: floor},
      {left:{x: 230, y: 150}, right: {x: 250, y: 150}, type: floor},
      {left:{x: 230, y: 180}, right: {x: 270, y: 180}, type: floor},
      {left:{x: 230, y: 200}, right: {x: 250, y: 200}, type: floor},
      {left:{x: 229, y: 240}, right: {x: 250, y: 240}, type: floor},
      {left:{x: 250, y: 120}, right: {x: 290, y: 90}, type: floor},
      {left:{x: 290, y: 90}, right: {x: 310, y: 90}, type: floor},
      {left:{x: 310, y: 90}, right: {x: 350, y: 120}, type: floor},
      {left:{x: 310, y: 330}, right: {x: 330, y: 330}, type: flip},
      {left:{x: 330, y: 330}, right: {x: 350, y: 330}, type: flip},
      {left:{x: 310, y: 150}, right: {x: 330, y: 150}, type: floor},
      {left:{x: 350, y: 330}, right: {x: 530, y: 330}, type: floor},
      {left:{x: 350, y: 165}, right: {x: 372, y: 165}, type: floor},
      {left:{x: 370, y: 165}, right: {x: 390, y: 150}, type: floor},
      {left:{x: 370, y: 210}, right: {x: 390, y: 210}, type: floor},
      {left:{x: 390, y: 150}, right: {x: 450, y: 150}, type: floor},
      {left:{x: 390, y: 180}, right: {x: 470, y: 180}, type: floor},
      {left:{x: 370, y: 300}, right: {x: 470, y: 300}, type: floor},
      {left:{x: 390, y: 240}, right: {x: 410, y: 240}, type: flip},
      {left:{x: 410, y: 240}, right: {x: 430, y: 240}, type: flip},
      {left:{x: 410, y: 210}, right: {x: 470, y: 210}, type: floor},
      {left:{x: 410, y: 270}, right: {x: 450, y: 270}, type: floor},
      {left:{x: 430, y: 120}, right: {x: 590, y: 360}, type: floor},
      {left:{x: 470, y: 210}, right: {x: 490, y: 240}, type: floor},
      {left:{x: 470, y: 270}, right: {x: 510, y: 270}, type: floor},
      {left:{x: 468, y: 332}, right: {x: 490, y: 300}, type: floor},
      {left:{x: 490, y: 300}, right: {x: 510, y: 300}, type: floor},
      {left:{x: 510, y: 270}, right: {x: 530, y: 270}, type: floor},
      {left:{x: 550, y: 360}, right: {x: 570, y: 360}, type: flip},
      {left:{x: 570, y: 360}, right: {x: 590, y: 360}, type: flip}
    ],
    wall: [{top: 331, bottom: 360, x: 62},
      {top: 180, bottom: 240, x: 170},
      {top: 320, bottom: 360, x: 230},
      {top: 200, bottom: 340, x: 250},
      {top: 180, bottom: 360, x: 270},
      {top: 120, bottom: 360, x: 290},
      {top: 120, bottom: 330, x: 310},
      {top: 170, bottom: 320, x: 330},
      {top: 120, bottom: 310, x: 350},
      {top: 210, bottom: 300, x: 370},
      {top: 270, bottom: 300, x: 510}
    ],
    flag: {x: 300, y: 90, theta: 0},
    portals: [{color: "#800000", a:{x: 295, y: 120, theta: 0, loc: 1}, b: {x: 295, y: 140, theta: 0, loc: -1}},
      {color: "#9A6324", a:{x: 275, y: 140, theta: 0, loc: -1}, b: {x: 435, y: 170, theta: 0, loc: -1}},
      {color: "#808000", a:{x: 175, y: 120, theta: 0, loc: 1}, b: {x: 415, y: 150, theta: 0, loc: 1}},
      {color: "#469990", a:{x: 175, y: 140, theta: 0, loc: -1}, b: {x: 35, y: 360, theta: 0, loc: 1}},
      {color: "#000075", a:{x: 315, y: 140, theta: 0, loc: -1}, b: {x: 255, y: 180, theta: 0, loc: 1}},
      {color: "#e6194B", a:{x: 335, y: 140, theta: 0, loc: -1}, b: {x: 175, y: 260, theta: 0, loc: -1}},
      {color: "#f58231", a:{x: 355, y: 140, theta: 0, loc: -1}, b: {x: 495, y: 330, theta: 0, loc: 1}},
      {color: "#ffe119", a:{x: 235, y: 170, theta: 0, loc: -1}, b: {x: 435, y: 270, theta: 0, loc: 1}},
      {color: "#bfef45", a:{x: 315, y: 170, theta: 0, loc: -1}, b: {x: 255, y: 360, theta: 0, loc: 1}},
      {color: "#3cb44b", a:{x: 355, y: 185, theta: 0, loc: -1}, b: {x: 235, y: 300, theta: 0, loc: 1}},
      {color: "#42d4f4", a:{x: 395, y: 200, theta: 0, loc: -1}, b: {x: 235, y: 240, theta: 0, loc: 1}},
      {color: "#4363d8", a:{x: 135, y: 210, theta: 0, loc: 1}, b: {x: 62, y: 360, theta: 0, loc: 1}},
      {color: "#911eb4", a:{x: 135, y: 230, theta: 0, loc: -1}, b: {x: 475, y: 270, theta: 0, loc: 1}},
      {color: "#f032e6", a:{x: 135, y: 260, theta: 0, loc: -1}, b: {x: 395, y: 170, theta: 0, loc: -1}},
      {color: "#a9a9a9", a:{x: 215, y: 360, theta: 0, loc: 1}, b: {x: 435, y: 200, theta: 0, loc: -1}},
      {color: "#fabebe", a:{x: 75, y: 360, theta: 0, loc: 1}, b: {x: 495, y: 300, theta: 0, loc: 1}},
      {color: "#ffd8b1", a:{x: 155, y: 340, theta: 0, loc: -1}, b: {x: 395, y: 300, theta: 0, loc: 1}},
      {color: "#fffac8", a:{x: 415, y: 270, theta: 0, loc: 1}, b: {x: 415, y: 230, theta: 0, loc: -1}},
      {color: "#aaffc3", a:{x: 175, y: 340, theta: 0, loc: -1}, b: {x: 375, y: 230, theta: 0, loc: -1}},
      {color: "#e6beff", a:{x: 275, y: 360, theta: 0, loc: 1}, b: {x: 515, y: 290, theta: 0, loc: -1}},
      {color: "black", a:{x: 135, y: 360, theta: 0, loc: 1}, b: {x: 455, y: 230, theta: 0, loc: -1}}
    ],
    startx: 300,
    starty: 113},

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
		portals:[{color:"red",a:{x:275,y:400,theta:0,loc:1},b:{x:475,y:50,theta:0,loc:1}},
			{color:"blue",a:{x:295,y:430,theta:0,loc:1},b:{x:110,y:50,theta:0,loc:1}}],
		score:50,
		startx:127,
		starty:49 },
		
		{levelText: "TEST",
		floor:[{left:{x:100,y:100},right:{x:200,y:100},type:floor},
			{left:{x:75,y:100},right:{x:100,y:100},type:flip},
			{left:{x:75,y:50},right:{x:100,y:50},type:floor},
			{left:{x:100,y:50},right:{x:150,y:50},type:flip},
			{left:{x:50,y:200,states:[{x:50,y:200}, {x:50,y:175},{x:50,y:225}]},
				right:{x:100,y:200,states:[{x:100,y:200},{x:100,y:225},{x:100,y:175}]},
			state:0,
			type:button,
			trig:1,
			}],
		wall:[],
		flag:{x:200,y:100,theta:0},
		buttons:[{color:"blue",x:175,y:100,trigger:1}],
		portals:[],
		score:10,
		startx:125,
		starty:98
		}



]
