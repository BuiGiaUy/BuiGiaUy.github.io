$(document).ready(function () {
  $("#register-form").submit(function (e) {
    e.preventDefault();
    register();
  });

  function register() {
    var username = $("#username").val();
    var password = $("#password").val();
    var confirmPassword = $("#confirm-password").val();

    if (password !== confirmPassword) {
      $("#register-status").text("Mật khẩu và xác nhận mật khẩu không khớp!");
      return;
    }

    if (localStorage.getItem(username)) {
      $("#register-status").text("Tên đăng nhập đã tồn tại!");
    } else {
      localStorage.setItem(username, password);
      $("#register-status").text("Đăng ký thành công!");
      setTimeout(function () {
        window.location.href = "login.html";
      }, 2000);
    }
  }
});
