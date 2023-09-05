$(document).ready(function () {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartContainer = $("#cartContainer");

  cartItems.forEach((product, index) => {
    const cartItem = `
        <div class="cart__item fl-ct c-cus-69f6d9656e6d591bddd0d621c5d69954" data-key="${product.productId}" data-combo="">
          <div class="cart__img">   
            <a class="rto-box" href="productDetail.html?id=${product.productId}">
              <img width="300" height="300" src="${product.imgUrls[0]}" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="${product.title}" loading="lazy" sizes="(max-width: 300px) 100vw, 300px">
            </a>
          </div>
          <div class="cart__info">
            <div class="wrap-title">
              <a class="title" href="productDetail.html?id=${product.productId}">${product.title}</a>
            </div>
            <div class="txt">
              <pre>Size <span class="size">${product.size[0].size}</span></pre>
            </div>
            <div class="fl-ct">
              <p>x ${product.quantity}</p>
              <div class="price mg-l mona-custom-price-item-cart">
                <span class="woocommerce-Price-amount amount"><bdi>${product.price}&nbsp;<span class="woocommerce-Price-currencySymbol">vnđ</span></bdi></span>
              </div>
            </div>
            <small class="cart__notify"> </small>
          </div>
        </div>
      `;

    // Append the cart item to the cart container
    cartContainer.append(cartItem);
  });

  nameUser();
  function nameUser() {
    const name = localStorage.key(0);
    const uppercaseName = name.toUpperCase();
    $("#uppercase_name").text(uppercaseName).css("font-weight", "600");
  }
  let userData = JSON.parse(localStorage.getItem("user_info")) || [];
  console.log(userData);
  if (userData.length > 0) {
    const lastUserData = userData[userData.length - 1];

    $('input[name="full-name"]').val(lastUserData.fullName);
    $('input[name="email"]').val(lastUserData.email);
    $('input[name="phone-number"]').val(lastUserData.phoneNumber);
  }
  $("#f-user-info").submit(function (e) {
    e.preventDefault();
    getInfo();
  });
  function getInfo() {
    const fullName = $('input[name="full-name"]').val();
    const email = $('input[name="email"]').val();
    const phoneNumber = $('input[name="phone-number"]').val();

    if (fullName && email && phoneNumber) {
      const userObject = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
      };

      userData.push(userObject);

      localStorage.setItem("user_info", JSON.stringify(userData));

      Swal.fire({
        title: "Thành công!",
        text: "Dữ liệu đã được gửi đi và lưu vào localStorage.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Lỗi!",
        text: "Vui lòng điền đầy đủ thông tin vào các trường.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }
});
