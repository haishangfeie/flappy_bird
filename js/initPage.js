window.addEventListener('load',function(){
	var cvs = document.querySelector("#canvas");
	var ctx = cvs.getContext('2d');
	allImgLoad({
		'land':'./img/land.png',
		'sky':'./img/sky.png',
		'pipeDown':'./img/pipeDown.png',
		'pipeUp':'./img/pipeUp.png',
		'bird':'./img/bird.png',
	},initGame);
	function initGame(imgObj){
		cvs.width = imgObj.sky.width;
		cvs.height = imgObj.sky.height;
		var scene = getScene(ctx,imgObj);
		var gameover = getGameover(ctx);
		var isRun = true;


		startGame();

		document.querySelector("#reStart").onclick = function(){
			scene.roles=[];
			var bird = getBird();
			bird.resetBird = true;
			scene._initroles();

		}

		//不断绘制页面，进行游戏
		function 	startGame(){
			//添加结束事件
			scene.addListener(function(){
				isRun=false;
				gameover.draw();
			});
			run();
		}	

		document.querySelector("#start").onclick = function(){
			isRun= !isRun;
			run();
		};

		function run(){
			ctx.clearRect( 0, 0, cvs.width, cvs.height);
			scene.draw();
			if(isRun){
				requestAnimationFrame(run);
			}
		}
	}
});

