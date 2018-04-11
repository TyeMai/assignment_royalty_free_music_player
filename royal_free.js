var song;
var $song;

function playSong() {
  song.play()
  //console.log(.then)
};

function pauseSong() {
  song.pause()
};

$(document).ready( () => {
  $('h4').click(function (event){
      // to pause any song that is already play8ing so 2 songs dont play at once.
    if(song !== undefined) {
      pauseSong()
    }
    if(!$(event.target).hasClass("active")) {
      //start with non highlighting so everything not active.
      $(event.target).addClass('active')
      song = $(event.target).next()[0];
      $("h4").not(this).removeClass('active')
      playSong()
    } else { //for
      $(event.target).removeClass('active')
      pauseSong()
    }
    //to change the artist name with each click
    $("#artistName").html($(event.target).prev().html())
    //to change the song title with each click
    $("#songTitle").html(event.target.innerHTML)
  });


  $('#play').click(function() {
    //$song.prev()addClass('active')
    playSong()
  });

  $('#pause').click(function() {
    //$('h4').removeClass('active')
    pauseSong()
  });

  $('#back').click(function() {
    pauseSong() // can use song.play directoly
    var $songList = $('audio')
    $song = $(song)
    song = $songList.eq($songList.index($song) - 1)[0]
    playSong()
  });

  $('#forward').click(function() {
    pauseSong()
    var $songList = $('audio')
    $song = $(song)
    if($songList.index($song) === 4) {
    song = $songList.eq($songList.index($song) - 4)[0]
    } else {
    song = $songList.eq($songList.index($song) + 1)[0]
    }
    playSong()
  });










});
