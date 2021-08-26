var slideIndex = 0;

showSlidesVideos();

function showSlidesVideos() {

var slides= document.getElementsByClassName("slidesetvideos"); // [slideset,slideset,slideset]
for (var i = 0; i < slides.length; i++) {
  slides[i].style.display="none";
}
slideIndex++;

if (slideIndex > slides.length) {  
  {slideIndex = 1}
}

slides[slideIndex-1].style.display = "flex";
setTimeout(showSlidesVideos, 5000);
}
