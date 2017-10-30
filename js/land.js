// 地面
(function(w){
  function Land(ctx,landImg,speed){
    Land.len++;
    this.ctx =ctx;
    this.landImg =landImg;
    this.speed =speed;
    this.height = this.landImg.height;
    this.width = this.landImg.width;
    this.x = this.width *(Land.len-1);
    this.y= this.ctx.canvas.height -this.height;
  }
  //地面图片数量
  Land.len = 0;
  Land.prototype = {
    constructor:Land,
    update: function(){
      this.x -=this.speed;
      if(this.x <=-this.width){
        this.x += this.width * Land.len;
      }
    },
    draw: function(){
      this.ctx.drawImage(this.landImg,this.x,this.y);
      
    },

  };
  w.getLand= function(ctx,landImg,speed){
    land=new Land(ctx,landImg,speed);
    return land;
  }
}(window));
