$(document).ready(function () {
  $("#login-form").submit(function (e) {
    e.preventDefault();
    login();
  });

  function login() {
    var username = $("#username").val();
    var password = $("#password").val();

    var storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
      $("#login-status").text("Đăng nhập thành công!");
      setTimeout(function () {
        window.location.href = "homepage.html";
      }, 2000);
    } else {
      $("#login-status").text("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  }
});
