(function ($) {
    $.fn.timeline = function () {
      var selectors = {
        id: $(this),
        item: $(this).find(".timeline-item"),
        activeClass: "timeline-item--active",
        img: ".timeline__img" };
  
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css("background-image","url(" +selectors.item.first().find(selectors.img).attr("src") +")"
);
  
      var itemLength = selectors.item.length;
      $(window).scroll(function () {
        var max, min;
        var pos = $(this).scrollTop();
        selectors.item.each(function (i) {
          min = $(this).offset().top;
          max = $(this).height() + $(this).offset().top;
          var that = $(this);
          if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
            selectors.item.removeClass(selectors.activeClass);
            selectors.id.css("background-image","url(" +selectors.item.last().find(selectors.img).attr("src") + ")");
  
            selectors.item.last().addClass(selectors.activeClass);
          } else if (pos <= max - 40 && pos >= min) {
            selectors.id.css("background-image","url(" +$(this).find(selectors.img).attr("src") + ")");
  
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
        });
      });
    };
  })(jQuery);
  
  $(".timeline-container").timeline();


  var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://www.rijksmuseum.nl/api/nl/usersets/2794823-rijks-museum-architecture?key=j1f0jRej&format=json")
ourRequest.onload = function(){
  ourData = JSON.parse(ourRequest.responseText)
  var rijksImage = ourData.userSet.setItems[0].image.cdnUrl
  $("#api_image").attr("src", rijksImage);
  var rijksImage1 = ourData.userSet.setItems[1].image.cdnUrl
  $("#api_image1").attr("src", rijksImage1);
  var rijksImage2 = ourData.userSet.setItems[2].image.cdnUrl
  $("#api_image2").attr("src", rijksImage2);
  var rijksImage3 = ourData.userSet.setItems[3].image.cdnUrl
  $("#api_image3").attr("src", rijksImage3);
  var rijksImage4 = ourData.userSet.setItems[4].image.cdnUrl
  $("#api_image4").attr("src", rijksImage4);

}
ourRequest.send();