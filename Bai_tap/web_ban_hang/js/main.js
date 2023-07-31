$(document).ready(function () {
  // Hiển thị danh sách sản phẩm khi trang chủ được tải
  displayProducts();

  function displayProducts() {
    var products = [
      {
        id: 1,
        name: "Levents® Bichontour Tee",
        image: "./images/Levents® Bichontour Tee.jpg",
        price: "200",
        rating: 5,
      },
      {
        id: 2,
        name: "Levents® Company & Mates Boxy Tee",
        image: "./images/Levents® Company & Mates Boxy Tee.jpg",
        price: "200",
        rating: 5,
      },
      {
        id: 3,
        name: "LEVENTS® CRAYON JEANS",
        image: "./images/LEVENTS® CRAYON JEANS.jpg",
        price: "500",
        rating: 5,
      },
      {
        id: 4,
        name: "Levents® Jogger Tee",
        image: "./images/Levents® Jogger Tee.jpg",
        price: "200",
        rating: 5,
      },
      {
        id: 5,
        name: "LEVENTS® KHAKI PANTS",
        image: "./images/LEVENTS® KHAKI PANTS.jpg",
        price: "500",
        rating: 5,
      },
      {
        id: 6,
        name: "LEVENTS® PLAY LOGO SHORTPANT",
        image: "./images/LEVENTS® PLAY LOGO SHORTPANT.jpg",
        price: "300",
        rating: 5,
      },
      {
        id: 7,
        name: "LEVENTS® POPPOP CARGO PANTS",
        image: "./images/LEVENTS® POPPOP CARGO PANTS.jpg",
        price: "500",
        rating: 5,
      },
      {
        id: 8,
        name: "LEVENTS®SHAPES OF HEART DROP SHOULDER TEE",
        image: "./images/LEVENTS®SHAPES OF HEART DROP SHOULDER TEE.jpg",
        price: "300",
        rating: 5,
      },
    ];

    var productList = $("#list-card");

    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      var cartItem = $('<div class="cart-item"></div>');
      var card = $('<div class="card"></div>');
      var anchor = $('<a href="productDetail.html?id=' + product.id + '"></a>');
      var imageDiv = $('<div class="image"></div>');
      var image = $('<img src="' + product.image + '" alt="" />');
      var content = $('<div class="content"></div>');
      var h2 = $("<h2>" + product.name + "</h2>");
      var info = $('<div class="info"></div>');
      var price = $("<p>" + product.price + "</p>");
      var rating = $(
        "<p>" +
          product.rating +
          ' <span><i class="fas fa-star" style="color: #ffd600"></i></span></p>'
      );

      imageDiv.append(image);
      content.append(h2);
      info.append(price);
      info.append(rating);
      content.append(info);
      anchor.append(imageDiv);
      anchor.append(content);
      card.append(anchor);
      cartItem.append(card);
      productList.append(cartItem);
    }
  }

  function redirectToProductDetail(productId) {
    window.location.href = "ProductDetail.html?id=" + productId;
  }
});
