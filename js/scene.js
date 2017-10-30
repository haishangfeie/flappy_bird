// 监听小鸟是否死亡
(function(w){
  function Scene(ctx,imgObj){
    this.ctx =ctx;
    this.imgObj =imgObj;
    //听众队列
    this.listeners =[];
    //场景内的角色
    this.roles =[];
    this._initroles();
  }
  Scene.prototype = {
    constructor:Scene,
    _initroles: function(){
      //创建天空
      this.roles.push(getSky(this.ctx,this.imgObj.sky,2));
      this.roles.push(getSky(this.ctx,this.imgObj.sky,2));

      //创建柱子
      for(var pi=0;pi<6;pi++){
        this.roles.push(getPipe({
          ctx:this.ctx,
          pipeDownImg:this.imgObj.pipeDown,
          pipeUpImg:this.imgObj.pipeUp,
          space:150,
          landHeight:this.imgObj.land.height,
          speed:2
        }));
      }

      //创建地面
      for(var li=0;li<4;li++){
        this.roles.push(getLand(this.ctx,this.imgObj.land,2));
      }

      //创建小鸟
      this.roles.push(getBird({
        ctx:this.ctx,
        birdImg:this.imgObj.bird,
        frame:3,
        speed:2,
        jumpSpeed:-1.5,
        gravity:0.05,
        birdX:30,
        birdY:50
      }));

      //创建计时器
      this.roles.push(getScoring(this.ctx));

    },
    //添加听众
    addListener: function(listener){
      this.listeners.push(listener);
    },
    //监听小鸟死亡
    triggerBirdOver:function(){
      this.roles.forEach(function(role){
        role.draw();
      });
      this.listeners.forEach(function(liste){
        liste();
      });
    },
    draw: function(startTime){
      //判断小鸟是否死亡
      if(startTime){
        Scene.startTime =startTime;
      }
      var bird = getBird();
      var birdCoreX =bird.birdX + bird.birdWidth/2;
      var birdCoreY =bird.birdY + bird.birdHeight/2;
      if(this.ctx.isPointInPath(birdCoreX,birdCoreY) || birdCoreY<0 || birdCoreY>(this.ctx.canvas.height -this.imgObj.land.height)
         ){
        //监听到小鸟死亡
        this.triggerBirdOver();
      } else {
        this.ctx.beginPath();
        this.roles.forEach(function(role){
          role.draw();
          role.update();
        });

      }
    }
  }
  w.getScene = function(ctx,imgObj){
    return new Scene(ctx,imgObj);
  }
}(window));
