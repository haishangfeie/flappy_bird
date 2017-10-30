(function(w){
  function Scoring(ctx){
    var startTime =(new Date()).getTime();
    this.ctx=ctx;
    this.startTime=startTime;
    this.time=0.00;
  }
  Scoring.prototype = {
    constructor:Scoring,
    update:function(){
      var newTime = (new Date()).getTime();
      var tempTime = newTime - this.startTime;
      //二次处理，将时间单位换为s
      this.time =Math.round(tempTime/1000*100)/100;
    },
    draw:function(){
      this.ctx.textAlign ='left';
      this.ctx.textBaxeline = 'middle';
      this.ctx.fillStyle ='red';
      this.ctx.font ='700 16px/20px MicroSoft YaHei';
      this.ctx.fillText('坚持时间：'+this.time+'s',this.ctx.canvas.width-150,30);
    }
  }
  w.getScoring = function(ctx){
    return new Scoring(ctx);
  }
}(window));