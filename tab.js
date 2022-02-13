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

var 사이즈 = [26, 28, 30, 32, 34, 36, 38];
var 셔츠사이즈 = [90, 95, 100, 105, 110, 115];
$("#option1").on("change", function () {
  if ($("select").val() == "셔츠") {
    $("#option2").html("");
    for (var i = 0; i < 셔츠사이즈.length; i++) {
      var 템플릿 = `<option>${셔츠사이즈[i]}</option>`;
      $("#option2").append(템플릿);
    }
  } else if ($("select").val() == "바지") {
    $("#option2").html("");
    사이즈.forEach(function (i) {
      var 템플릿 = `<option>${[i]}</option>`;
      $("#option2").append(템플릿);
    });
  }
});
