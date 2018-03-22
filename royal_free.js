var song;

function playSong() {
  song.play()
}

function pauseSong() {
  song.pause()
}




$(document).ready( () => {
  $('h4').click(function (event){

    // to pause any song that is already play8ing so 2 songs dont play at once.
  if(song !== undefined) {
    pauseSong()
  }

  if($(event.target).hasClass("active") === false) {
    $(event.target).addClass('active')
    song = $(event.target).next()[0];
    $("h4").not(this).removeClass('active')
    playSong()
    console.log(song)
  } else {
    $(event.target).removeClass('active')
    pauseSong()



  }

  //to change the artist name with each click
  $("#artistName").html($(event.target).prev().html())
  //to change the song title with each click
  $("#songTitle").html(event.target.innerHTML)



})







});
