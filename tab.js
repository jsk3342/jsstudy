// $(".tab-button")
//   .eq(0)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");
//     $(".tab-button1").eq(0).addClass("active");
//     $(".tab-content1").eq(0).addClass("show");
//   });
// $(".tab-button")
//   .eq(1)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");
//     $(".tab-button").eq(1).addClass("active");
//     $(".tab-content").eq(1).addClass("show");
//   });
// $(".tab-button")
//   .eq(2)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");
//     $(".tab-button").eq(2).addClass("active");
//     $(".tab-content").eq(2).addClass("show");
//   });

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".nav-menu").addClass("nav-black");
  } else $(".nav-menu").removeClass("nav-black");
});

// 여기서 하나 클릭해도 계속 3번까지 돌아가는거 아닌가?
// 작동원리 모르겠음

for (let i = 0; i < $(".tab-button").length; i++) {
  $(".tab-button")
    .eq(i)
    .click(function () {
      $(".tab-button").removeClass("active");
      $(".tab-content").removeClass("show");
      $(".tab-button").eq(i).addClass("active");
      $(".tab-content").eq(i).addClass("show");
    });
}

$(".black-background").click(function (e) {
  if (e.target == e.currentTarget) {
    $(".black-background").removeClass("trans");
  }
});
