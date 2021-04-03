$("#image").click(function(){
  $("#image").toggleClass("flip");
  $(".connection-ways").slideToggle("slow");
});
//Toggle the contact ways


setInterval(function(){
  $('.img-by-url').fadeIn("slow");
  $('.img-by-url').fadeOut("slow");
  $('.img-by-url').fadeIn("slow");
},3000);
// flash the contact image

var cloudBottom = $('.middle_cloud');
var cloudTop = $('.top_cloud');
//assign variables to Clouds

for (var i=0 ; i<=1000 ; i++) {
  cloudBottom.animate({left:'60px'}, 2500);
  cloudTop.animate({right: '3.75rem'},2500);
  cloudBottom.animate({left: '12.5rem'}, 2500);
  cloudTop.animate({right: '15rem'}, 3000);
}
//looping them for animation

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
