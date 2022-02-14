var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// for (var i = 0; i < products.length; i++) {
//   $(".cardtitle").html(products[i].title);
// }
// 아래꺼 반복문으로 바꾸고 싶다. 아직 반복문 사용법이 바로 안떠오름

$(".cardtitle").eq(0).html(products[0].title);
$(".cardtitle").eq(1).html(products[1].title);
$(".cardtitle").eq(2).html(products[2].title);
$(".price").eq(0).html(products[0].price);
$(".price").eq(1).html(products[1].price);
$(".price").eq(2).html(products[2].price);

var 어레이 = [7, 3, 5, 2];
어레이.sort(function (a, b) {
  return a - b;
});

$(".btn-danger").click(function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });

  $(".cardtitle").eq(0).html(products[0].title);
  $(".cardtitle").eq(1).html(products[1].title);
  $(".cardtitle").eq(2).html(products[2].title);
  $(".price").eq(0).html(products[0].price);
  $(".price").eq(1).html(products[1].price);
  $(".price").eq(2).html(products[2].price);
});
