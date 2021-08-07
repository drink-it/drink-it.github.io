var songs = {
  "0.7": "https://cdn.glitch.com/739040a0-e172-43f0-872b-5830d0b4d3a9%2F0.7.mp3?v=1628351635191",
  "1.5": "https://cdn.glitch.com/739040a0-e172-43f0-872b-5830d0b4d3a9%2F1.5.mp3?v=1628351635408"
}

var rdInt = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

var keys = Object.keys(songs);
length = keys.length;
// 1,3一首歌，2,4一首歌
var song = keys[rdInt%2];
console.log(song);
$("#audio").attr('src', songs[song]);
$("#audio").attr('alt', song);
var audio = document.getElementById("audio");
audio.play();

if(rdInt <= 2){
  // blue
  document.getElementById("one").style.display="none";
  document.documentElement.style.setProperty('--color-bg', '#8CA7FF');
  document.documentElement.style.setProperty('--color-card-bg', '#b3c7fc');
  document.documentElement.style.setProperty('--color-card-border', '#8CA7FF');
  document.documentElement.style.setProperty('--color-card-text', '#435b99');
} else {
  // pink
  document.getElementById("two").style.display="none";
  document.documentElement.style.setProperty('--color-bg', '#FF899C');
  document.documentElement.style.setProperty('--color-card-bg', '#FFC2CC');
  document.documentElement.style.setProperty('--color-card-border', '#F593A0');
  document.documentElement.style.setProperty('--color-card-text', '#B96774');
}

$('#random').text("感谢您对本研究的参与和支持！您的编号为【"+rdInt+"】，请记住此编号以便回答接下来的问题。现在，您可以点击下方链接完成问卷：");


