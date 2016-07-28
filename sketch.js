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
   fill(0)
   ellipse(x[i],y[i],25,25)
//draws small circles
}
  
  for (var i2=0; i<100; i++) {
   noStroke()
   fill(0)
   ellipse(x[i2],y[i3],50,50)
//draws medium circles
}

for (var i3=0; i<100; i++) {
   noStroke()
   fill(0)
   ellipse(x[i3],y[i3],100,100)
//draws large circles
}

  x[i] = x[i] + random(-5,5)
  y[i] = y[i] + random(-5,5)
//assigns random movements between -5 and 5 pixels along x and y

  for (var j=0; j<200; j++) {
//find distance between center points of other circles
    
    var distance = dist(x[i],y[i],x[j],y[j])
    
    if (distance < 200) {
      stroke(random(0,255),random(0,255),random(0,255),random(0,255))
      line(x[i],y[i],x[j],y[j])
  //draws line between coordinates defined by i and coordinates defined by j
    }
    
    if (distance < 200) {
      stroke(random(0,255),random(0,255),random(0,255),random(0,255))
      line(x[i2],y[i2],x[j],y[j])
  //draws line between coordinates defined by i and coordinates defined by j
    }
    
    if (distance < 200) {
      stroke(random(0,255),random(0,255),random(0,255),random(0,255))
      line(x[i3],y[i3],x[j],y[j])
  //draws line between coordinates defined by i and coordinates defined by j
    }
  }
}