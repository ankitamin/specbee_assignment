(function ($, Drupal, once) {
  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
      jQuery(".tabs a").on("click", function () {
        jQuery(".tabs .tab-item").removeClass("active");
        jQuery(".tab-contents .tab-content").removeClass("active");
        jQuery(this).closest(".tab-item").addClass("active");

        var rel = jQuery(this).attr("rel").replace(/ /g, "");
        jQuery("#" + rel + "-content").addClass("active");

        jQuery(".paragraph--type--card-slider-container > div").slick(
          "setPosition"
        );
      });

      jQuery(".paragraph--type--card-slider-container > div").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
      });
    },
  };
})(jQuery, Drupal, once);
