$(document).ready(function () {
  displayProducts();
  function displayProducts() {
    const products = [
      {
        productId: "1",
        productCat: "337",
        imgUrls: [
          "https://levents.asia/wp-content/uploads/2023/07/z4504877495569_a7056de289863ece93a10d3cc75aed5e-400x500.jpg",
          "https://levents.asia/wp-content/uploads/2023/07/z4504877502788_e525b31ba8ddb6643f5f52b2d4dec44d-400x500.jpg",
        ],
        title: "Levents® Flower Cart Raglan Regular Tee/ Blue",
        price: "380000",
      },
      {
        productId: "2",
        productCat: "337",
        imgUrls: [
          "https://levents.asia/wp-content/uploads/2023/07/z4504877138178_b220a252eb178e9d9f858074eeeb4317-400x500.jpg",
          "https://levents.asia/wp-content/uploads/2023/07/z4504877126929_858a9c2bee5deac3d50aedd8aafdfefe-400x500.jpg",
        ],
        title: "Levents® Flower Cart Raglan Regular Tee/ Green",
        price: "380,000 ",
      },
      {
        productId: "3",
        productCat: "337",
        imgUrls: [
          "https://levents.asia/wp-content/uploads/2023/07/z4504877336753_3e992dc59ee081dd623cf788b97e90ce-400x500.jpg",
          "https://levents.asia/wp-content/uploads/2023/07/z4504877347306_6264e5af26638d450ebe38ff62324165-400x500.jpg",
        ],
        title: "Levents® Flower Cart Raglan Regular Tee/ Black",
        price: "380,000 ",
      },
      {
        productId: "4",
        productCat: "240",
        imgUrls: [
          "https://levents.asia/wp-content/uploads/2023/01/z4367002526620_e27a505da7ab2b96b07dc07b5c5dde36-400x500.jpg",
          "https://levents.asia/wp-content/uploads/2023/01/z4367002514596_dea7c7e606ac9fbb25ea7cd823ea7340-400x500.jpg",
        ],
        title: "Levents® Knit Polo Special/ Cream",
        price: "530000",
      },
    ];

    const productRow = $("#productRow");

    products.forEach((product) => {
      const productDiv = $("<div>", {
        class: "col-xxl-6 col-6 pd__item aos-init aos-animate",
        "data-productid": product.productId,
        "data-productcat": product.productCat,
      });

      const imagesHtml = product.imgUrls
        ? product.imgUrls
            .map(
              (image) =>
                `<img width="400" height="500" src="${image}" alt="Product Image" loading="lazy" />`
            )
            .join("")
        : "";

      const productContent = `
              <div class="pd__top coJS" stt="">
                <a href="productDetail.html?id=${product.productId}" class="pd__img dp-block">
                  <div class="rto-box">${imagesHtml}</div>
                </a>
                <div class="pd__color fl-wrap"></div>
              </div>
              <div class="pd__bot">
                <a href="productDetail.html?id=${product.productId}" title="${product.title}" class="pd__title hov-df">${product.title}</a>
                <div class="pd__price" data-price="${product.price}">
                  <span class="big m-black" >
                    <span class="woocommerce-Price-amount amount">
                      <bdi>${product.price}&nbsp;<span class="woocommerce-Price-currencySymbol">vnđ</span></bdi>
                    </span>
                  </span>
                </div>
              </div>
            `;

      productDiv.html(productContent);
      productRow.append(productDiv);
    });
  }

  const productContainer = $("#product-container");

  // Retrieve cart items from localStorage or initialize an empty array
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Function to update quantity and save changes to localStorage
  function updateQuantity(index, quantity) {
    cartItems[index].quantity = quantity;

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Calculate the total amount and update the totalValueElement
    const totalAmount = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    console.log(totalAmount);
    $("#totalValue").text(totalAmount);
  }
  updateTotalAmount();
  function updateTotalAmount() {
    const totalAmount = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    $("#totalValue").text(totalAmount);
  }
  function removeCartItem(index) {
    if (index >= 0 && index < cartItems.length) {
      // Use SweetAlert to confirm the removal
      Swal.fire({
        title: "Bạn có chắc không?",
        text: "Bạn sắp xóa mặt hàng này khỏi giỏ hàng của mình.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Tôi chắn chắn.",
      }).then((result) => {
        if (result.isConfirmed) {
          // Remove the item from the cartItems array
          cartItems.splice(index, 1);

          // Update localStorage
          localStorage.setItem("cartItems", JSON.stringify(cartItems));

          // Remove the item from the UI
          const removedItem = $(`.row[data-index="${index}"]`);
          removedItem.remove();

          // Update the total amount
          updateTotalAmount();

          Swal.fire(
            "LOẠI BỎ!",
            "Mặt hàng của bạn đã bị xóa khỏi giỏ hàng.",
            "thành Công "
          ).then(() => {
            // Reload the page
            location.reload();
          });
        }
      });
    }
  }

  // Attach a click event listener to all "Remove" buttons with class "remove-item-cart"

  // Iterate through each cart item and build the HTML
  if (cartItems.length === 0) {
    productContainer.html("<p class='txt'>Giỏ hàng rỗng</p>");
  } else {
    cartItems.forEach((product, index) => {
      const productItem = `
      <div class="col-xxl-12">
      <div class="row " >
        <div class="cart__img col-xxl-6">
          <a class="rto-box" href="#">
            <img
              width="300"
              height="300"
              src="${product.imgUrls[0]}"
              alt="${product.title}"
              loading="lazy"
              sizes="(max-width: 300px) 100vw, 300px"
            />
          </a>
        </div>
        <div class="cart__info col-xxl-6">
          <div class="wrap-title">
            <a class="title" href="#">${product.title}</a>
            <div class="remove-item-cart" data-index="${index}">
               x 
            </div>
          </div>
          <div class="txt">
            <pre>Size<span class="size">: ${product.size[0].size}</span></pre>
          </div>
          <div class="fl-ct">
            <div class="amount fl-ct amoJS">
              <div class="minus hov-df amoM"></div>
              <input
                type="number"
                class="number rs-form amoVal m-change-quantity"
                value="${product.quantity}"
                data-index="${index}"
                min="0"
                max="999"
              />
              <div class="plus hov-df amoP"></div>
            </div>
            <div class="price mg-l mona-custom-price-item-cart">
              <span class="woocommerce-Price-amount amount"><bdi>${product.price}&nbsp;<span class="woocommerce-Price-currencySymbol">vnđ</span></bdi></span>
            </div>
          </div>
          <small class="cart__notify"> </small>
        </div>
      </div>
      </div>
    `;

      // Append the productItem HTML to the productContainer
      productContainer.append(productItem);
      // Attach a change event listener to the quantity input
      const quantityInput = $(`input[data-index="${index}"]`);
      quantityInput.change(function () {
        const newQuantity = parseInt($(this).val());

        updateQuantity(index, newQuantity);
      });
    });
  }
  $(".remove-item-cart").on("click", function () {
    const index = $(this).data("index");
    removeCartItem(index);
  });
  $("#pay_btn").on("click", function () {
    if (cartItems.length === 0) {
      // Show SweetAlert message for an empty cart
      Swal.fire({
        icon: "info",
        title: "Giỏ hàng của bạn không có gì!",
        text: "Vui lòng thêm các mặt hàng vào giỏ hàng của bạn trước khi tiến hành thanh toán.",
        confirmButtonText: "OK",
      });
    } else {
      // Redirect to the checkout page if the cart is not empty
      window.location.href = "Pay.html";
    }
  });
});
