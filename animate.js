let animInterval=null;
function animateMe(){
   if(animInterval!=null){
     clearInterval(animInterval);
   }
   let leftPos=0; 
   let goingRight=true;
   
   let browserWidth=window.innerWidth ||document.body.clientWidth;
   let browserHeight=window.innerHeight || document.body.clientHeight;

   animInterval=setInterval(
      function(){
        if(leftPos<browserWidth && goingRight){
            leftPos+=10;
            //goingRight=true;
            //console.log('goin rigtht',leftPos);
            document.querySelector('#myShape').style.left=leftPos+'px';
        }
        else if(leftPos>=browserWidth && goingRight){//Going Right but hit the boundary
            leftPos-=10;
            document.querySelector('#myShape').style.left=leftPos+'px';
            goingRight=false;
        }
        else if(leftPos>0 && goingRight==false){//Going left
            leftPos-=10;
            document.querySelector('#myShape').style.left=leftPos+'px';
        }
        else if(leftPos<=0 && goingRight==false){//Going left hit the left boundary
            leftPos+=10;
            document.querySelector('#myShape').style.left=leftPos+'px';
            goingRight=true;
        }
      },
      100
   );
}

function stopAnimation(){
    clearInterval(animInterval);
}