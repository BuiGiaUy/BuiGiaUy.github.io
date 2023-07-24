const products = [
  {
    id: 1,
    name: "Product Item 1",
    description: "Description for Product Item 1",
    price: 5.99,
    quantity: 2,
  },
  {
    id: 2,
    name: "Product Item 2",
    description: "Description for Product Item 2",
    price: 9.99,
    quantity: 1,
  },
];
function renderUI() {
  let html = "";
  let total = 0;
  if (products.length === 0) {
    html += "<li>Không có sản phẩm nào trong giỏ hàng</li>";
  } else {
    for (let i = 0; i < products.length; i++) {
      total += products[i].price;
      html += `
      <li class="row">
      <div class="col left">
          <div class="thumbnail">
              <a href="#">
                  <img src="https://via.placeholder.com/200x150" alt="${products[i].name}" />
              </a>
          </div>
          <div class="detail">
              <div class="name"><a href="#">${products[i].name}</a></div>
              <div class="description">${products[i].description}
              </div>
              <div class="price" id="price_${products[i].id}">$${products[i].price}</div>
          </div>
      </div>

      <div class="col right">
          <div class="quantity">
              <input type="number" class="quantity" step="1" value="1" autocomplete="off" id="product_${products[i].id}" onkeyup="handleOnChangeQuantity(${products[i].id},${products[i].price})"/>
          </div>

          <div class="remove">
              <span class="close" onclick="removeProduct(${products[i].id})"><i class="fa fa-times" aria-hidden="true"></i></span>
          </div>
      </div>
  </li>
        `;
    }
    document.getElementById("subtotal").innerHTML = "$" + total;
  }
  document.getElementById("products").innerHTML = html;
}
function handleOnChangeQuantity(id, price) {
  let quantity = document.getElementById("product_" + id).value;
  let newPrice = quantity * price;
  document.getElementById("price_" + id).innerHTML = "$" + newPrice;
  calculateTotalPrice();
}
function calculateTotalPrice() {
  let subtotal = 0;
  for (let i = 0; i < products.length; i++) {
    const quantity = document.getElementById("product_" + products[i].id).value;
    subtotal += products[i].price * quantity;
  }

  const total = subtotal + 5;

  document.getElementById("subtotal").innerHTML = "$" + subtotal.toFixed(2);
  document.getElementById("total").innerHTML = "$" + total;
}
//Mã Giảm Giá
function applyPromoCode() {
  const promoCode = document.getElementById("promo-code").value;

  if (promoCode === "DISCOUNT10") {
    const currentSubtotal = parseFloat(
      document.getElementById("subtotal").innerHTML.replace("$", "")
    );
    const discountValue = currentSubtotal * 0.1;
    const newTotal = currentSubtotal - discountValue;

    document.querySelector(".discount").classList.remove("hide");
    document.getElementById("discount").innerHTML =
      "$" + discountValue.toFixed(2);
    document.getElementById("total").innerHTML = "$" + newTotal.toFixed(2);
  } else {
    if (promoCode !== "") {
      document.getElementById("error-message").style.display = "block";
    }
  }
}
function removeProduct(id) {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    renderUI();
    calculateTotalPrice();
  }
}
renderUI();
applyPromoCode();
calculateTotalPrice();
