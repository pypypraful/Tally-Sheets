$(document).ready(function(){
  $('.tabs-wrapper nav').pushpin({ 
    top: $('#header').outerHeight(),
    bottom: $('#footer').offset().top - $('#sidebar nav').outerHeight()     
  });
  
  $('#content').css( 'width', $('#page').width()*0.8 );
  $('#sidebar, #sidebar nav').css( 'width', $('#page').width()*0.2 );
 
});