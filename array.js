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
// 가격순정렬
$(".btn-danger1")
  .eq(0)
  .click(function () {
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
// 가나다 정렬
$(".btn-danger1")
  .eq(1)
  .click(function () {
    products.sort(function (a, b) {
      return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    });

    $(".cardtitle").eq(0).html(products[0].title);
    $(".cardtitle").eq(1).html(products[1].title);
    $(".cardtitle").eq(2).html(products[2].title);
    $(".price").eq(0).html(products[0].price);
    $(".price").eq(1).html(products[1].price);
    $(".price").eq(2).html(products[2].price);
  });
// 5만원 이하 남기기
$(".btn-danger1")
  .eq(2)
  .click(function () {
    var newproducts = products.filter(function (a) {
      return a.price <= 60000;
    });

    newproducts.forEach(function (a) {
      var template = `<div class="card">
      <img src="https://via.placeholder.com/600" />
      <div class="card-body">
        <h5 class="cardtitle cardtitle2">Card title</h5>
        <p class="price">가격 : 70000</p>
        <button class="btn btn-danger">주문하기</button>
      </div>
    </div>`;
      $(".card-group").append(template);
    });

    $(".cardtitle").eq(0).html(newproducts[0].title);
    $(".cardtitle").eq(1).html(newproducts[1].title);
    $(".cardtitle").eq(2).html(newproducts[2].title);
    $(".price").eq(0).html(newproducts[0].price);
    $(".price").eq(1).html(newproducts[1].price);
    $(".price").eq(2).html(newproducts[2].price);
  });
