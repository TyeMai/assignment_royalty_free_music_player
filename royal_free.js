var song;

function playSong() {
  song.play()
}

function pauseSong() {
  song.pause()
}




$(document).ready( () => {

  $('h4').addClass("play")

  $('h4').click(function (event){
    // to remove active from any other <h4> that might have it, so there can't be more than one active at the same time
  $('h4').removeClass('active')

    // to pause any song that is already play8ing so 2 songs dont play at once.
  if(song !== undefined) {
    pauseSong()
  }

  if($(event.target).hasClass("play")) {
    $(event.target).removeClass('play').addClass('active')
    song = $(event.target).next()[0];
    playSong()
    console.log(song)
  } else {
    $(event.target).addClass('play');
    $(event.target).removeClass('acitve')
    pauseSong()
  }

  //to change the artist name with each click
  $("#artistName").html($(event.target).prev().html())
  //to change the song title with each click
  $("#songTitle").html(event.target.innerHTML)



})







});
