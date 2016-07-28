var x = []
var y = []

function setup() {
  createCanvas (800,800)
  
  for (var i=0; i<100; i++) {
//first position sets start number of loops for i
//second position tells maximum number of loops
//third position tells how many increments to increase loop number by

    x[i] = random(0,width)
    y[i] = random(0,height)
//i tells the computer which position in the loop it is in between 0-100
  }
  
}

function draw() {
  background(0)
  
  for (var i=0; i<100; i++) {
   noStroke()
   fill(255)
   ellipse(x[i],y[i],25,25)
   x[i] = x[i] + random(-5,5)
   y[i] = y[i] + random(-5,5)
//draws small circles
}
  
  for (var i2=0; i2<50; i2++) {
   noStroke()
   fill(255)
   ellipse(x[i2],y[i2],50,50)
   x[i2] = x[i2] + random(-5,5)
   y[i2] = y[i2] + random(-5,5)
//draws medium circles
}

for (var i3=0; i3<25; i3++) {
   noStroke()
   fill(255)
   ellipse(x[i3],y[i3],100,100)
   x[i3] = x[i3] + random(-5,5)
   y[i3] = y[i3] + random(-5,5)
//draws large circles
}

  for (var j=0; j<25; j++) {
//find distance between center points of other circles
    
    var distance = dist(x[i],y[i],x[j],y[j])
    
    if (distance < 25) {
      stroke(random(0,255),random(0,255),random(0,255),random(0,255))
      line(x[i],y[i],x[j],y[j])
    }
    
//draws line between coordinates defined by i and coordinates defined by j
    }
    
    for (var j2=0; j2<100; j2++) {
//find distance between center points of other circles
    
    var distance2 = dist(x[i],y[i],x[j2],y[j2])
  
    if (distance2 < 50) {
      stroke(random(0,255),random(0,255),random(0,255),random(0,255))
      line(x[i2],y[i2],x[j2],y[j2])
    }
    }
    
    for (var j3=0; j3<100; j3++) {

    var distance3 = dist(x[i3],y[i3],x[j3],y[j3])
    
      if (distance3 < 100) {
      stroke(random(0,255),random(0,255),random(0,255),random(0,255))
      line(x[i3],y[i3],x[j3],y[j3])
    }
  //draws line between coordinates defined by i and coordinates defined by j
    }
}