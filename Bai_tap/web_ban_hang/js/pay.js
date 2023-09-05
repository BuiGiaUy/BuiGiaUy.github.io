$(document).ready(function () {
  nameUser();
  function nameUser() {
    const name = localStorage.key(0);
    const uppercaseName = name.toUpperCase();
    $("#uppercase_name").text(uppercaseName).css("font-weight", "600");
  }
  // Kiểm tra xem đã có dữ liệu trong localStorage chưa
  let userData = JSON.parse(localStorage.getItem("user_info")) || [];
  console.log(userData);
  // Kiểm tra nếu có dữ liệu trong mảng user_data
  if (userData.length > 0) {
    // Lấy dữ liệu từ phần tử cuối cùng của mảng (hoặc bạn có thể chọn phần tử cụ thể trong mảng)
    const lastUserData = userData[userData.length - 1];

    // Gán giá trị từ dữ liệu lấy từ localStorage vào các trường input
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

    // Kiểm tra hợp lệ (ví dụ: kiểm tra xem các trường đã được điền)
    if (fullName && email && phoneNumber) {
      // Tạo một đối tượng chứa thông tin từ form
      const userObject = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
      };

      // Thêm đối tượng này vào mảng userData
      userData.push(userObject);

      // Lưu mảng userData vào localStorage
      localStorage.setItem("user_info", JSON.stringify(userData));

      // Nếu dữ liệu hợp lệ, sử dụng SweetAlert để hiển thị thông báo thành công
      Swal.fire({
        title: "Thành công!",
        text: "Dữ liệu đã được gửi đi và lưu vào localStorage.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      // Nếu dữ liệu không hợp lệ, sử dụng SweetAlert để hiển thị thông báo lỗi
      Swal.fire({
        title: "Lỗi!",
        text: "Vui lòng điền đầy đủ thông tin vào các trường.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }
});
