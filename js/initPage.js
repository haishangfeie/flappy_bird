window.addEventListener('load',initPage);
function initPage(){
  var cvs = document.querySelector("#canvas");
  var ctx = cvs.getContext('2d');
  allImgLoad({
    'land':'./img/land.png',
    'sky':'./img/sky.png',
    'pipeDown':'./img/pipeDown.png',
    'pipeUp':'./img/pipeUp.png',
    'bird':'./img/bird.png',
  },function(imgObj){
    // console.log(imgObj,'finish');
    cvs.width = imgObj.sky.width;
    cvs.height = imgObj.sky.height;
    var scene = getScene(ctx,imgObj);
    var gameove = getGameover(ctx);
    var isRun = true;
    var startFlag=true;
    //添加结束事件
    scene.addListener(function(){
      isRun=false;
      gameove.draw();
    });
    //不断绘制页面，进行游戏
    (function run(){
      ctx.clearRect( 0, 0, cvs.width, cvs.height);
      scene.draw();
      if(isRun){
        requestAnimationFrame(run);
      }
    }());
  });
}