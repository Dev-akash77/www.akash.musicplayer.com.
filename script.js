let music=document.getElementById('music');
let play=document.getElementById('play');
let range=document.getElementById('range');

music.onloadedmetadata=function(){
    music.max=range.duration;
    music.value=range.currentTime;
}
play.onclick=function(){
  if(play.classList.contains('fa-play')){
        music.play();
        play.classList.remove('fa-play')
        play.classList.add('fa-pause');
    }else{
        music.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
}
}
if(music.play()){
    setInterval(()=>{
        range.value=music.currentTime;
    },500);
}
var heart=document.querySelector('.fa-heart');


heart.onclick=()=>{
   if(heart.style.color='red'){
      setTimeout(()=>{heart.style.color='green';
   },2000);}}
  
