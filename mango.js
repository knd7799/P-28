class mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:1,
			friction:0,
			density:1.8

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		this.image=loadImage("mango.png")
		World.add(world, this.body);

	}
	display()
	{
			
			var mangopos=this.body.position;	

			push()
			translate(mangopos.x, mangopos.y);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image,0, 0, this.r, this.r);
			pop()
			
	}

}