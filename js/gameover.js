//gameove
(function(w){
  function Gameover(ctx){
    this.ctx =ctx;
  }
  Gameover.prototype ={
    constructor:Gameover,
    draw:function(){
      this.ctx.save();
      this.ctx.fillStyle = 'rgba(100,100,100,0.7)';
      this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
      this.ctx.textAlign ='center';
      this.ctx.textBaxeline = 'middle';
      this.ctx.fillStyle ='red';
      this.ctx.font ='700 40px/45px MicroSoft YaHei';
      this.ctx.fillText('Gameover!!!',this.ctx.canvas.width/2,this.ctx.canvas.height/2);
      this.ctx.restore();

    }
  }
  w.getGameover = function(ctx){
    return new Gameover(ctx);
  }

}(window));
