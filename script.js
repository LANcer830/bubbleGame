var timer=60;
var score=0;
var hitNo;
function inreaseScore()
{
    score+=10;
    document.querySelector("#score").textContent=score;
}
function getNewHit(){
     hitNo=Math.floor(Math.random()*10);
    document.querySelector("#hitValue").textContent=hitNo;
}
function makeBubble(){
    var clutter=""
for(var i=0;i<176;i++)
{
    var rNo=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rNo}</div>`; 
}
document.querySelector("#pBtm").innerHTML=clutter;
}
function timerRun(){
    var timerInt=setInterval(()=>{
        if(timer>0)
        {
            timer--;
            document.querySelector("#timerVal").textContent=timer;
        }
        else{
    
            clearInterval(timerInt);
            document.querySelector("#pBtm").innerHTML=`<h1>Game over</h1><h1>You scored ${score} points</h1>`;
        }
    },1000)
    
}
document.querySelector("#pBtm").addEventListener("click",function (dets){
    var clickedNo=Number(dets.target.textContent);
    if(clickedNo===hitNo)
    {
        inreaseScore();
        makeBubble();
        getNewHit();
    }
})
getNewHit()
timerRun()
makeBubble()
