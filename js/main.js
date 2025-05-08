// $(document).ready(function () {
//   let $btns = $(".project-area .button-group button");
//   $btns.click(function (e) {
//     $(".project-area .button-group button").removeClass("active");
//     e.target.classList.add("active");

//     let selector = $(e.target).attr("data-filter");
//     $(".project-area.grid").isotope({
//       filter: selector,
//     });
//     return false;
//   });
// });

// $(document).ready(function () {
//   let $btns = $(".project-area .button-group button");
//   let $grid = $(".grid").isotope({
//     itemSelector: ".element-item",
//     layoutMode: "fitRows",
//   });

//   $btns.click(function (e) {
//     $btns.removeClass("active");
//     $(this).addClass("active");

//     let selector = $(this).attr("data-filter");
//     $grid.isotope({ filter: selector });
//   });
// });
// $(document).ready(function () {
//   $(".filter-btn").click(function () {
//     var filterValue = $(this).attr("data-filter");

//     // Toggle active class
//     $(".filter-btn").removeClass("active");
//     $(this).addClass("active");

//     if (filterValue === "*") {
//       $(".element-item").show();
//     } else {
//       $(".element-item").hide();
//       $(filterValue).show();
//     }
//   });

//   $(".project-area .button-group #btn1").trigger("click");
// });
$(document).ready(function () {
  // Initialize Isotope
  var $grid = $(".grid").isotope({
    itemSelector: ".element-item",
    layoutMode: "fitRows",
  });

  // Filter items on button click
  $(".filter-btn").click(function () {
    var filterValue = $(this).attr("data-filter");

    // Toggle active class
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    // Apply filter
    $grid.isotope({ filter: filterValue });
  });

  // Trigger the 'All' button click on page load to initialize layout
  $('.filter-btn[data-filter="*"]').trigger("click");
});
