var slideIndex = 0;

showSlidesBlogs();

function showSlidesBlogs() {

var slides= document.getElementsByClassName("slidesetblogs"); // [slideset,slideset,slideset]
for (var i = 0; i < slides.length; i++) {
  slides[i].style.display="none";
}
slideIndex++;

if (slideIndex > slides.length) {  
  {slideIndex = 1}
}

slides[slideIndex-1].style.display = "flex";
setTimeout(showSlidesBlogs, 5000);
}
