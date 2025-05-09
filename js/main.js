$(document).ready(function () {
  // Smooth scroll for nav links
  $(".navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70, // Adjust for fixed navbar height
        },
        800 // Scroll duration in milliseconds
      );
    }
  });
});

$(document).ready(function () {
  // Initialize Isotope
  var $grid = $(".grid").isotope({
    itemSelector: ".element-item",
    layoutMode: "fitRows",
  });

  // Filter items on button click
  $(".filter-btn").click(function () {
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // Trigger the 'All' button click on page load
  $("#btn1").trigger("click");

  // Initialize Magnific Popup
  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

$(document).ready(function () {
  // Show or hide the button based on scroll position
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#btn-back-to-top").fadeIn();
    } else {
      $("#btn-back-to-top").fadeOut();
    }
  });

  // Scroll to top when the button is clicked
  $("#btn-back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
