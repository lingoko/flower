function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	//一次先有20朵花
	for (var i=0;i<20; i++){ 
	 generateRandomFlower()
	}
}

function generateRandomFlower(){
	sizes.push(random(0.2,1))
	positionListX.push(random(width))
  positionListY.push(random(height))
	vYList.push(1)
	colorList.push(random(list))
}

function drawFlower(clr,size=1){
  push()
  	fill(255,215,0)//
	  ellipse(0,0,50)
  	ellipseMode(CORNER)
	  fill(250,128,114)
	  if (clr){
			fill(clr)
		}
  	for(var i=0; i<16; i++){
	    ellipse(30,-20,140*size,40)
		  line(30,0,180*size,-5)
	    rotate(PI/8)
	  }
	 pop()
  }

var list = ["#DD614A","#F4A698","#C5C392","#73A580","#9CB489"]
var sizes =[0.6,0.4,0.8,1,0.7]
var positionListX=[300,600,500]
var positionListY=[160,400,200]
var vYList=[1,2,3]
var colorList=["#DD614A","#F4A698","#C5C392"]

function mousePressed(){
	generateRandomFlower()
}

function draw() {
	background(0)
 
	for(var i=0;i<positionListX.length; i++){
		let xx=positionListX[i]
		let yy=positionListY[i]
		push()
	    translate(xx,yy)
	    drawFlower(colorList[i],sizes[i])
		pop()
		positionListY[i]+=vYList[i]
		if (yy>height){
			positionListX.splice (i,1)
			positionListY.splice(i,1)
			colorList.splice(i,1)
			vYList.splice(i,1)
			sizes.splice(i,1)			
			
			//vYList[i]=-abs(vYList[i])
		}
		
	}
	
function windowResize(){
  resizeCanvas(windowWidth, windowHeight)
}
	
		
}	
	