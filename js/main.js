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

$(document).ready(function () {
  let $btns = $(".project-area .button-group button");
  let $grid = $(".grid").isotope({
    itemSelector: ".element-item",
    layoutMode: "fitRows",
  });

  $btns.click(function (e) {
    $btns.removeClass("active");
    $(this).addClass("active");

    let selector = $(this).attr("data-filter");
    $grid.isotope({ filter: selector });
  });
});
