class Ground
{
constructor(x,y,w,h) {

this.x=x
this.y=y
this.w=w
this.h=h

var groundProp= {
isStatic:true
}

this.body= Bodies.rectangle (x,y,w,h,groundProp)
World.add(world,this.body)








}



display () {

var pos=this.body.position

push ()

rectMode (CENTER)
rect (pos.x,pos.y,this.w,this.h)


pop ()

}



}