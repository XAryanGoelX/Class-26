class Boat{
 constructor(x,y,width,height,boatPos){
    this.body = Bodies.rectangle(x,y,width,height)
    this.width = width
    this.height= height
    this.image = loadImage("./assets/boat.png")
    this.boatPosition = boatPos
    World.add(world,this.body)
    // console.log(this.body)
 }
 display(){
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,this.boatPosition,this.width,this.height)
    pop()
   }
 remove(i){
  // Matter.Body.setVelocity(this.body,{x:0,y:0})
   setTimeout(()=> {
      Matter.World.remove(world,boats[i].body)
      delete boats[i]
   },2000)
 }
}