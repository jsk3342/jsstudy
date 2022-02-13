$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".nav-menu").addClass("nav-black");
  } else $(".nav-menu").removeClass("nav-black");
});

// for (let i = 0; i < $(".tab-button").length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .click(function () {
//       탭열기(i);
//     });
// }

function 탭열기(숫자) {
  $(".tab-button").removeClass("active");
  $(".tab-content").removeClass("show");
  $(".tab-button").eq(숫자).addClass("active");
  $(".tab-content").eq(숫자).addClass("show");
}

$(".black-background").click(function (e) {
  if (e.target == e.currentTarget) {
    $(".black-background").removeClass("trans");
  }
});

$(".list").click(function (e) {
  탭열기(e.target.dataset.id);
});

var 어레이 = ["BMW", 520];
var 오브젝트 = { brand: "BMW", model: 520 };
var 자료 = [{ brand: "BMW" }, { model: 520 }];
$(".modelname").html(자료[0].brand);
$(".modelmain").html(자료[1].model);

$("#option1").on("change", function () {
  if ()
});
