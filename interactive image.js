
(function ($) {
  $.fn.text_section = function () {
    var selectors = {
      id: $(this),
      item: $(this).find(".info_section"),
      activeClass: "info_section--active"};

    selectors.item.eq(0).addClass(selectors.activeClass);
    $( ".info_section").hide();
    
    $(".tower").click(function(){
     $(".section_content_tower1").parent().addClass(selectors.activeClass) 
    })
    
   
  
    
  };
})(jQuery);



$(".text_section").text_section();
