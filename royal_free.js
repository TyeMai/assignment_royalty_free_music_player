


$(document).ready( () => {
  $('h4').addClass("play")

$('h4').click(function (event){
  $('h4').removeClass('active')
  $(event.target).addClass('active')

  if($(event.target).hasClass("play")) {
    $(event.target).toggleClass('play').next()[0].play();
  } else {
    $(event.target).toggleClass('play').next()[0].pause();
  }

  $("#artistName").html($(event.target).prev().html())
  $("#songTitle").html(event.target.innerHTML)
  console.log('hey')

})







});
