//柱子
(function(w){
  //ctx,pipeDownImg,pipeUpImg,space,landHeight,speed
  function Pipe(obj) {
    //注意down表示管口向下，是上面的柱子，up表示管口向上，是下面的柱子
    this.ctx =obj.ctx;
    this.pipeDownImg = obj.pipeDownImg;
    this.pipeUpImg=obj.pipeUpImg;
    this.space =obj.space;
    this.landHeight =obj.landHeight;
    this.speed = obj.speed;

    //设定管道的最小高度
    this.minHeight = 100;

    //计算单个柱子最大理论高度
    this.maxHeight = this.ctx.canvas.height - this.space-this.landHeight - this.minHeight;

    this.width = this.pipeDownImg.width;
    this.height = this.pipeDownImg.height;

    Pipe.len++;

    this.x = 300 + this.width*3*(Pipe.len-1);
    this.y =0;
    this._init();

  }
  Pipe.len=0;
  Pipe.prototype ={
    _init: function(){

      //随机生成上柱子高度
      var randomHeight = Math.random() * this.maxHeight;
      //二次处理上柱子高度
      if(randomHeight<this.minHeight){
        randomUpHeight = this.minHeight;
      }
      this.downY = randomHeight-this.height;
      this.upY = this.space+ randomHeight;
    },
    draw: function(){
      this.ctx.drawImage(this.pipeDownImg,this.x,this.downY);
      this.ctx.drawImage(this.pipeUpImg,this.x,this.upY);
      this._drawPath();

    },
    // 根据柱子绘制路径，以判断是否越界
    _drawPath:function(){
      this.ctx.rect(this.x,this.downY,this.width,this.height);
      this.ctx.rect(this.x,this.upY,this.width,this.height);

    },
    update:function(){
      this.x -=this.speed;

      if(this.x <=-this.width){
        this._init();
        this.x += 3*this.width*Pipe.len;
      }
    }
  };
  w.getPipe =function(obj){
    return new Pipe(obj);
  }
}(window));
