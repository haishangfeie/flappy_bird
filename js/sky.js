// 天空
(function(w){
  function Sky(ctx,skyImg,speed){
    Sky.len +=1;
    this.ctx =ctx;
    this.skyImg =skyImg;
    this.speed =speed;
    this.height = this.skyImg.height;
    this.width = this.skyImg.width;
    this.x = this.width *(Sky.len-1);
  }
  //天空图片数量
  Sky.len = 0;
  Sky.prototype = {
    constructor:Sky,
    update: function(){
      this.x -=this.speed;
      if(this.x <=-this.width){
        this.x += this.width * Sky.len;
      }
    },
    draw: function(){
      this.ctx.drawImage(this.skyImg,this.x,0);
    },

  };
  w.getSky= function(ctx,skyImg,speed){
    sky=new Sky(ctx,skyImg,speed);
    return sky;

  }

}(window));
