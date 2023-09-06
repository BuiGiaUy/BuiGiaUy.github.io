$(document).ready(function () {
  $("#logOut").click(function () {
    Swal.fire({
      title: "Bạn có muốn đăng xuất?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Đăng xuất",
      cancelButtonText: "Không",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem(username);
        Swal.fire({
          icon: "success",
          title: "Đăng xuất thành công!",
          text: "Bạn đã đăng xuất khỏi tài khoản.",
        }).then(() => {
          window.location.href = "login.html";
        });
      }
    });
  });
  $("#fl-we-title").click(function () {
    $("#fl-we").toggleClass("hide");
  });
  $("#fl-alo-title").click(function () {
    $("#fl-alo").toggleClass("hide");
  });
  $("#fl-product-title").click(function () {
    $("#fl-product").toggleClass("hide");
  });
  $("#fl-help-title").click(function () {
    $("#fl-help").toggleClass("hide");
  });
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
      {
        productId: "5",
        productCat: "240",
        imgUrls: [
          "https://levents.asia/wp-content/uploads/2023/01/z4367002708309_a2fb1e3b394a3f4279cfae987f220365-400x500.jpg",
          "https://levents.asia/wp-content/uploads/2023/01/z4367002710446_635e3efd6469e410dcd337e7ce5efc67-400x500.jpg",
        ],
        title: "Levents® Knit Polo Special/ Brown",
        price: "530000",
      },
      {
        productId: "6",
        productCat: "240",
        imgUrls: [
          "https://levents.asia/wp-content/uploads/2023/06/z4367003180441_cb38293a8ae6a05e50885f9f29488a10-400x500.jpg",
          "https://levents.asia/wp-content/uploads/2023/06/z4367003172443_b1dd5d8a72beac82159fd535e65971ee-400x500.jpg",
        ],
        title: "Levents® Knit Polo Special/ Black",
        price: "530000",
      },
      {
        productId: "7",
        productCat: "49",
        imgUrls: [
          "https://levents.asia/wp-content/uploads/2023/06/z4447583619807_c72ec71c4dff66d10ba9b9a9621772c8-1-400x500.jpg",
          "https://levents.asia/wp-content/uploads/2023/05/z4407015135957_0b0ccec8ae6db7b2bff154022a0031cf-400x500.jpg",
        ],
        title: "Levents® Pixel Flower Tee/ White",
        price: "380000",
      },
      {
        productId: "8",
        productCat: "49",
        imgUrls: [
          "https://levents.asia/wp-content/uploads/2023/05/z4407015339773_67175f198d6947319f9b7e6c39ac01fb-400x500.jpg",
          "https://levents.asia/wp-content/uploads/2023/05/z4407015339839_758a20d8d2e6e5644c8ff3d10f83e6dc-400x500.jpg",
        ],
        title: "Levents® Pixel Flower Tee/ Black",
        price: "380000",
      },
    ];

    const productRow = $("#productRow");

    products.forEach((product) => {
      const productDiv = $("<div>", {
        class: "col-xxl-3 col-6 pd__item aos-init aos-animate",
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
});
