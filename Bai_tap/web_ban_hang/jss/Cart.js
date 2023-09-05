$(document).ready(function () {
  displayCartItems();

  function displayCartItems() {
    var cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
    } else {
      cartItems = [];
    }

    var cartContainer = $("#cartItems");
    var totalAmount = 0;

    for (var i = 0; i < cartItems.length; i++) {
      var product = cartItems[i];
      var listItem = $('<li class="cart-item"></li>');
      listItem.append("<h3>" + product.name + "</h3>");
      listItem.append("<p>Giá: $" + product.price + "</p>");

      // Tạo input để nhập số lượng sản phẩm
      var quantityInput = $(
        '<input type="number" min="1" value="1" class="quantity-input">'
      );
      quantityInput.attr("data-index", i);
      listItem.append("<label>Số lượng:</label>");
      listItem.append(quantityInput);

      quantityInput.change(function () {
        var index = $(this).attr("data-index");
        var quantity = parseInt($(this).val());
        updateQuantity(index, quantity);
      });

      cartContainer.append(listItem);

      totalAmount += product.price;
    }

    var totalValueElement = $("#totalValue");
    totalValueElement.text(totalAmount);
  }

  function updateQuantity(index, quantity) {
    var cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
    } else {
      cartItems = [];
    }

    cartItems[index].quantity = quantity;

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    var totalAmount = 0;
    for (var i = 0; i < cartItems.length; i++) {
      totalAmount += cartItems[i].price * cartItems[i].quantity;
    }

    var totalValueElement = $("#totalValue");
    totalValueElement.text(totalAmount);
  }
});
