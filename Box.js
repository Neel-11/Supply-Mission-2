class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,widht,height,options);
        World.add(world,this.body);
    }
}