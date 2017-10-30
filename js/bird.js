// bird
(function(w){
  // ctx,birdImg,frame,speed,jumpSpeed,gravity
  function Bird(obj){
    this.ctx=obj.ctx;
    this.birdImg = obj.birdImg;
    this.frame = obj.frame;
    this.speed =obj.speed;
    this.jumpSpeed =obj.jumpSpeed;
    this.gravity =obj.gravity;
    //鸟的坐标
    this.birdX =obj.birdX;
    this.birdY=obj.birdY;
    //鸟的宽高
    this.birdWidth = this.birdImg.width /this.frame;
    this.birdHeight = this.birdImg.height;

    this.currentFrame =1;
    this.birdRadian =0;
    this.maxBirdRadian =Math.PI/3;
    this.bind(w);
  }
  Bird.prototype = {
    constructor : Bird,
    bind: function(w){
      var self = this;
      this.ctx.canvas.addEventListener('click',function(){
        self.speed =self.jumpSpeed;
      })
    },
    update: function(){
      this.birdY +=this.speed;
      this.speed +=this.gravity;
      this.currentFrame +=1;
      if(this.currentFrame>this.frame){
        this.currentFrame =1;
      }
    },
    draw: function(){
      
      //依据坠落速度调整小鸟的角度
      this.birdRadian = Math.PI /180 * 10 * this.speed;
      // console.log(this.birdRadian);
      if(this.birdRadian>this.maxBirdRadian){
        this.birdRadian = this.maxBirdRadian;
      }
      this.ctx.save();
      this.ctx.translate(this.birdX+this.birdWidth/2,this.birdY+this.birdHeight/2);
      this.ctx.rotate(this.birdRadian);
      this.ctx.drawImage(this.birdImg,this.birdWidth*(this.currentFrame-1),0,this.birdWidth,this.birdHeight,-this.birdWidth/2,-this.birdHeight/2,this.birdWidth,this.birdHeight);
      this.ctx.restore();
    }
    
  } ;
  var bird = null;
  w.getBird=function(obj){
    if(!bird){
      bird =new Bird(obj);
    }
    return bird;
  };
}(window));

