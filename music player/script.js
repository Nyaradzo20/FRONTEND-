let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrllcon = document.getElementById("ctrllcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;

}
function playPause(){
    if(ctrllcon.classList.contains("fa-pause")){
       song.pause(); 
       ctrllcon.classList.remove("fa-pause");
       ctrllcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrllcon.classList.add("fa-pause");
        ctrllcon.classList.remove("fa-play");

    }

}
if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    },500);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrllcon.classList.add("fa-pause");
    ctrllcon.classList.remove("fa-play");

}