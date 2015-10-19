/* Simple dynamic jquery gallery example */
$(document).ready(function() {
  // Boolean to switch auto loop on / off
  var auto = false;

  // Images array
  var imageName = [
    "http://images2.fanpop.com/images/photos/7100000/Raspberries-fruit-7152002-500-428.jpg",
    "http://images2.fanpop.com/images/photos/7100000/Oranges-fruit-7151783-800-496.jpg",
    "http://images.forbes.com/media/2009/07/07/healthiest-food_apples.jpg"
  ];
  // Image titles array
  var imageTitle = ["Raspberries", "Oranges", "Apples"];
  var counter = 0;
  // Main function for changing images
  var clickaway = function go() {
  	console.log("cnt", counter);
    $("#picture").fadeOut(300, function() {
      $("#picture").attr("src", imageName[counter]);
      $("#image-caption").text(imageTitle[counter]);
      counter++;
      if (counter > imageName.length - 1) {
        counter = 0;
      }
      $("#picture").fadeIn(500);
      if (auto === true) {
        $("#picture").fadeIn(500).delay(3000);
        go();
      }
    });

  }
  clickaway(); 
  
  $("#picture").click(clickaway);

  $('#loop-checked').change(function(){
    if(auto = true){
          console.log("checked");
      auto = false;
    }
    else {
      auto = true;
    }
  });

  // Resize images 
  var max_size = 250;
  $("img").each(function(i) {
    if ($(this).height() > $(this).width()) {
      var h = max_size;
      var w = Math.ceil($(this).width() / $(this).height() * max_size);
    } else {
      var w = max_size;
      var h = Math.ceil($(this).height() / $(this).width() * max_size);
    }
    $(this).css({
      height: h,
      width: w
    });
  });
});