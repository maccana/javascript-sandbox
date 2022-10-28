function playSomeSound(genre) {
  console.log("Genre: " + genre);
  SC.get(
    "/tracks",
    {
      genres: genre,
      bpm: {
        from: 100
      }
    },
    function(tracks) {
      console.log("trks ", tracks);
      var random = Math.floor(Math.random() * 49);
      //var track = SC.oEmbed(tracks[random].uri);
      SC.oEmbed(
        tracks[random].uri,
        { auto_play: true },
        document.getElementById("target")
      );
    }
  );
}

window.onload = function() {
  SC.initialize({
    client_id: "4fee7a0f34bbc2b2e67ab7979f33b9aa"
  });

  //   SC.get("/user/183/tracks").then(function(tracks) {
  //     alert("Latest track: " + tracks[0].title);
  //   });

  var menuLinks = document.getElementsByClassName("genre");

  for (var i = 0; i < menuLinks.length; i++)
    (function(i) {
      console.log("el: " + i);
      var menuLink = menuLinks[i];
      console.log("link: " + menuLink.innerHTML);
      menuLink.onclick = function(e) {
        e.preventDefault();
        playSomeSound(menuLink.innerHTML);
      };
    })(i);
};
