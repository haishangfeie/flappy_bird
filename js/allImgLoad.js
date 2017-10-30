// 确保加载图片完成
function allImgLoad(imgUrl,fn){
  var tempImg = null;
  var imgLoadCounter =0;
  var imgObj={};
  var img_total=0;
  for(var key in imgUrl){
    img_total++;
    tempImg = new Image();
    imgObj[key] = tempImg;
    tempImg.addEventListener('load',function(){

      imgLoadCounter++;
      
      if(imgLoadCounter>=img_total){
        fn(imgObj);

      }
    });
    tempImg.src =imgUrl[key];
    
  }
  
}
