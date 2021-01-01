class Plinko{
    constructor(x,y,r){
        var options = {
             isStatic:true
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body= Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS); 
        fill(255,255,255); 
        ellipse(pos.x,pos.y,this.r,this.r);
        for (var i = 40; i <=width; i = i + 50) {
            pli.push(new Plinko(i,75));
        }
        for (var i = 15; i <=width-10; i = i + 50) {
            pli.push(new Plinko(i,175));
        }
        
        for (var i = 0; i < pli.length; i++){
            pli[i].display();
        }
      }
}   