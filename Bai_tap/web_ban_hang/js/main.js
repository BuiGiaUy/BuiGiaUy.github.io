$(document).ready(function () {
  var items = [
    {
      imgFront:
        "https://levents.asia/wp-content/uploads/2023/07/Male-3-Front-1000x1500.png",
      imgBehind:
        "https://levents.asia/wp-content/uploads/2023/07/Male-3-Behind-1000x1500.png",
      subtitle: "LEVENTS® BASIC BOXY HOODIE/ BROWN",
      link: "https://levents.asia/styling/",
    },
    {
      imgFront:
        "https://levents.asia/wp-content/uploads/2023/07/Famale-3-Front-1000x1500.png",
      imgBehind:
        "https://levents.asia/wp-content/uploads/2023/07/Famale-3-Behind-1000x1500.png",
      subtitle: "LEVENTS® HEART PUZZLE TEE/ BLACK",
      link: "https://levents.asia/styling/",
    },
    {
      imgFront:
        "https://levents.asia/wp-content/uploads/2023/07/Male-7-Front-1000x1500.png",
      imgBehind:
        "https://levents.asia/wp-content/uploads/2023/07/Male-7-Behind-1000x1500.png",
      subtitle: "LEVENTS® HOT AIR BALLOON TEE/ CREAM",
      link: "https://levents.asia/styling/",
    },
    {
      imgFront:
        "https://levents.asia/wp-content/uploads/2023/07/Famale-4-Front-1000x1500.png",
      imgBehind:
        "https://levents.asia/wp-content/uploads/2023/07/Famale-4-Behind-1000x1500.png",
      subtitle: "LEVENTS® FLOWER CART RAGLAN REGULAR TEE/ BLUE",
      link: "https://levents.asia/styling/",
    },
    {
      imgFront:
        "https://levents.asia/wp-content/uploads/2023/07/Male-5-Front-1000x1500.png",
      imgBehind:
        "https://levents.asia/wp-content/uploads/2023/07/Male-5-Behind-1000x1500.png",
      subtitle: "LEVENTS® PIXEL FLOWER TEE/ BLACK",
      link: "https://levents.asia/styling/",
    },
    {
      imgFront:
        "https://levents.asia/wp-content/uploads/2023/07/Famale-7-Front-1000x1500.png",
      imgBehind:
        "https://levents.asia/wp-content/uploads/2023/07/Famale-7-Behind-1000x1500.png",
      subtitle: "LEVENTS® JOGGER TEE/ GREEN",
      link: "https://levents.asia/styling/",
    },
  ];
  generateItems("#itemContainer", items);

  function generateItems(containerSelector, itemsArray) {
    var container = $(containerSelector);
    if (container.length) {
      var itemsHTML = itemsArray.map(generateItemHTML).join("");
      container.html(itemsHTML);
    }
  }
  function generateItemHTML(item) {
    var itemHTML = `
          <div class="col-xxl-6 col-12 sty__item aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
            <div class="sty__img">
              <div class="rto-box">
                <img width="1000" height="1500" src="${item.imgFront}" class="attachment-1000x9999 size-1000x9999" alt="" loading="lazy">
                <img width="1000" height="1500" src="${item.imgBehind}" class="attachment-1000x9999 size-1000x9999" alt="" loading="lazy">
              </div>
            </div>
            <div class="sty__content fl-col txt-ct">
              <div class="sty__subtitle">${item.subtitle}</div>
              <a href="${item.link}" class="btn-pri-whi hov-df sty__btn mg-ct">
                <h3>Xem bộ sưu tập</h3>
              </a>
            </div>
          </div>
        `;
    return itemHTML;
  }
});
