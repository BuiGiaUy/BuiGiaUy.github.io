$(document).ready(function () {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const cartContainer = $("#cartContainer");
  const couponInput = document.getElementById("input-coupon");
  const btnDiscount = document.getElementById("btn_discount");

  btnDiscount.addEventListener("click", applyDiscount);

  applyDiscount();

  function applyDiscount() {
    const provisionalTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    if (couponInput.value === "DISCOUNTCODE10") {
      Swal.fire({
        icon: "success",
        title: "Áp dụng giảm giá!",
        text: "Bạn đã được giảm giá 10%!",
      });

      const discount = provisionalTotal * 0.1;
      const discountedTotal = provisionalTotal * 0.9;

      const html = ` <div class="fl-con aln-ct">
          <div class="mg-r">Giảm </div>
          <div>
            <span class="woocommerce-Price-amount amount"><bdi><span >-${discount.toFixed(
              2
            )}</span>&nbsp;<span class="woocommerce-Price-currencySymbol">vnđ</span></bdi></span>
          </div>
        </div>`;
      $("#discount_code").append(html);
      $("#totalValue").text(discountedTotal.toFixed(2));
    } else {
      $("#totalValue").text(provisionalTotal.toFixed(2));
    }

    $("#provisional").text(provisionalTotal.toFixed(2));

    cartContainer.empty();

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

      cartContainer.append(cartItem);
    });
  }
  $("#pay_btn").click(function () {
    const totalAmount = parseFloat($("#totalValue").text().replace(/\D+/g, "")); // Extract numeric value

    Swal.fire({
      title: "Chi tiết thanh toán",
      html: `
        <div>
          <p>Tổng cộng: ${totalAmount} VNĐ</p>
          <p>Quét mã QR để hoàn tất thanh toán:</p>
          <img src="./images/qr.png" alt="QR Code" width="200" height="200">
        </div>
      `,
      confirmButtonText: "OK",
      allowOutsideClick: false, 
    });
  });
  applyDiscount();

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
