function generateOptions(maxVal){
    let options='';
    for(let i=0;i<maxVal; i=i+10){
        options +='<option value="'+i+'">'+i+'</option>';
    }
    return options;
}

function generateRGBOptions(){
    let options='';
    for(let i=0;i<256; i++){
        options +='<option value="'+i+'">'+i+'</option>';
    }
    return options;
}

function drawShape(){
    let shapeType=document.querySelector('#shapeType').value;
    let shapeWidth=document.querySelector('#shapeWidth').value;
    let shapeHeight=document.querySelector('#shapeHeight').value;

    document.querySelector('#myShape').style.width=shapeWidth+'px';
    document.querySelector('#myShape').style.height=shapeHeight+'px';
    
    if(shapeType=='rect'){
        document.querySelector('#myShape').style.borderRadius='0px';
    }
    else if(shapeType=='circle' ||shapeType=='oval'){
        document.querySelector('#myShape').style.borderRadius='50%';
    }
    else if(shapeType=='star'){
    }

    let shapeColor=document.querySelector('#shapeColor').value;
    if(shapeColor==undefined || shapeColor==''){
        let rValue=document.querySelector('#rValue').value;
        let gValue=document.querySelector('#gValue').value;
        let bValue=document.querySelector('#bValue').value;

        document.querySelector('#myShape').style.backgroundColor='rgb('+rValue+','+gValue+','+bValue+')';

        //document.querySelector('#myShape').style.backgroundColor=`rgb(${rValue},${gValue},${bValue})`;
    }
    else{
        document.querySelector('#myShape').style.backgroundColor=shapeColor;
    }
    let shapeX=document.querySelector('#shapeX').value;
    let shapeY=document.querySelector('#shapeY').value;
    console.log(shapeX,shapeY);
    document.querySelector('#myShape').style.left=shapeX+'px';
    document.querySelector('#myShape').style.top=shapeY+'px';

}

function getXandY(ev){
      document.querySelector('#xTip').innerText=ev.clientX;
      document.querySelector('#yTip').innerText=ev.clientY;
      //document.querySelector('#myShape').style.left=ev.clientX+'px';
    //document.querySelector('#myShape').style.top=ev.clientX+'px';
}

let widthOptions=generateOptions(300);
let heightOptions=generateOptions(300);
let rgbOptions=generateRGBOptions();

let heightSelect='<select id="shapeHeight">'+heightOptions+'</select>';

document.addEventListener("DOMContentLoaded", function(event) { 
    document.querySelector('#heightHolder').innerHTML=heightSelect;
});
