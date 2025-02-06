const blocksize=25
const canvas=document.getElementById("board")
const ctx=canvas.getContext("2d")
var x=0;
var y=0;
var x1=0,y1=0;
var foodX,foodY
if(!canvas){
    console.log("error");
}
ctx.fillStyle="black";
ctx.fillRect(0,0,canvas.height,canvas.width);
foodUpdate()
snakeUpdate()
addEventListener("keyup",keyPress);
function snakeUpdate(){
    ctx.fillStyle="lime";
    if(x==-1 || y==-1 || x==20 || y==20){
        alert("game Over")

    }
    else{
    ctx.fillRect(x*blocksize,y*blocksize,blocksize,blocksize);
    }
}
function foodUpdate(){
    ctx.fillStyle="red"
    foodX=Math.floor(Math.random()*20)
    foodY=Math.floor(Math.random()*20)
   
    ctx.fillRect(foodX*blocksize,foodY*blocksize,blocksize,blocksize);
    console.log(foodX," ",foodY)
}
   
function keyPress(event){
    if(foodX==x && foodY==y){
        if(event.key=="ArrowDown")y=y+1;
        else if(event.key=="ArrowUp")y=y-1;
        else if(event.key=="ArrowLeft")x=x-1;
        else if(event.key=="ArrowRight")x=x+1;
        foodUpdate();
    }
    else if(event.key=="ArrowDown" && y1!=-1){
        ctx.fillStyle="black";
        ctx.fillRect(x*blocksize,y*blocksize,blocksize,blocksize)
        y=y+1;
        y1=1
        x1=0
     }
     else if(event.key=="ArrowUp" && y1!=1){
        ctx.fillStyle="black";
        ctx.fillRect(x*blocksize,y*blocksize,blocksize,blocksize)
        y=y-1;
        y1=-1
        x1=0
     }
     else if(event.key=="ArrowLeft" && x1!=1){
        ctx.fillStyle="black";
        ctx.fillRect(x*blocksize,y*blocksize,blocksize,blocksize)
        x=x-1;
        x1=-1;
        y1=0
     }
     else if(event.key=="ArrowRight" && x1!=-1){
        ctx.fillStyle="black";
        ctx.fillRect(x*blocksize,y*blocksize,blocksize,blocksize)
        x=x+1;
        x1=1;
        y1=0
     }
     snakeUpdate();
    
    console.log(event);
}
function restart(){
    console.log("helo")
     window.location.reload();
}
