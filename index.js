$("#image").click(function () {
  $("#image").toggleClass("flip");
  $(".connection-ways").slideToggle("slow");
});
//Toggle the contact ways

setInterval(function () {
  $(".img-by-url").fadeIn("slow");
  $(".img-by-url").fadeOut("slow");
  $(".img-by-url").fadeIn("slow");
}, 3000);
// flash the contact image

var cloudBottom = $(".middle_cloud");
var cloudTop = $(".top_cloud");
//assign variables to Clouds

var mobile = $(window).width();
console.log( "this is window width : " + mobile);

function animation( value ){
    if (value > 900 ) {
    for( var i = 0 ; i < 100 ; i++ ){
      middleCloud.animate({left:'60px'}, 2500);
      topCloud.animate({right: '3.75rem'}, 2500);
      middleCloud.animate({left: '12.5rem'}, 2500);
      topCloud.animate({right: '15rem'}, 3000);
    }
  }
}

animation(mobile);


// $('body').ready(function(){  // when the body gets ready and loaded up
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop(); // also we could use window.pageYOffset instead $(window).scrollTop();
//     if (scroll < 100 ) { //we must change the 630 to 100 to fix the bug of mobile
//       console.log(scroll);
//         cloudBottom.animate({ left: "60px" }, 2500);
//         cloudTop.animate({ right: "3.75rem" }, 2500);
//         cloudBottom.animate({ left: "12.5rem" }, 2500);
//         cloudTop.animate({ right: "15rem" }, 3000);
//     } else{
//       cloudBottom.stop();
//       cloudTop.stop();
//     }
//   });
// });


// make clouds move when the window on them

$('#font').delay(800).fadeOut(1500 ,function(){
  $('#font').html("I'm Hamid.").fadeIn(1500 , function(){
    $('#appear').fadeOut(10 , function(){
      $('#appear').css('visibility','visible').fadeIn(800);
    })
  });
});
// Greeting feature


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

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
