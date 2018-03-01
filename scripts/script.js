$(function(){
//slider 
  var slider = $('.slider').bxSlider({
    mode: 'fade',
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 1600,
    speed: 1000,
    ease: 6,
    pager: true,
  });

//mobile menu
  $('.top-button').click(function(){
    $('i').toggleClass('top-arrow');
    $('.dropdown-links').toggleClass('show');
  });

//smooth scroll
  $('a').on('click', function(event){
     if (this.hash !== ""){
       event.preventDefault();
       var hash = this.hash;
       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 3000, function(){
         window.location.hash = hash;
       });
     }
   });  
});  

//email validation
function ValidateEmail(inputText){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    document.form.address.focus();
    return true;
  }
  else{
    alert('Please enter a valid email address.');
    document.form1.address.focus();
    return false;
  }
}