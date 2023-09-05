$(document).ready(function () {

  var productId = getProductIdFromURL();
  displayProductDetail(productId);
  $("#f-data-pd").submit(function() {
    
  });

  function getProductIdFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
    var productId = urlParams.get("id");

    return productId;
  }
  function displayProductDetail(productId) {
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

    var product = products.find(function (item) {
      return item.id == productId;
    });

    if (product) {
      var productDetail = $("#productDetail");
      var productInfo = $('<div class="product-info"></div>');
      var productName = $("<h2>" + product.name + "</h2>");
      var productImage = $('<img src="' + product.image + '" alt="" />');
      var productPrice = $("<p>Giá: " + product.price + "</p>");
      var productRating = $(
        "<p>Đánh giá: " +
          product.rating +
          ' <span><i class="fas fa-star" style="color: #ffd600"></i></span></p>'
      );

      productInfo.append(productName);
      productInfo.append(productImage);
      productInfo.append(productPrice);
      productInfo.append(productRating);

      productDetail.append(productInfo);
      $("#addToCartButton").click(function () {
        addToCart(product);
      });
    } else {
      var errorContainer = $("#content");
      errorContainer.append("<p>Sản phẩm không tồn tại!</p>");
    }
  }
  function addToCart(product) {
    var cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
    } else {
      cartItems = [];
    }

    cartItems.push(product);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    $("#cartModal").modal("show");
  }
});
