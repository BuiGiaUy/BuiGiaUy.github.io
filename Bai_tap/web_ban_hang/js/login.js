$(document).ready(function () {
  $("#mona-login-form").submit(function (e) {
    e.preventDefault();
    clearErrors();
    login();
  });

  function login() {
    var username = $("input[name='user_name']").val();
    var password = $("input[name='login_pass']").val();
    var errors = [];

    if (username === "") {
      errors.push({ field: "user_name", message: "Vui lòng nhập Họ và Tên" });
    }
    
    if (!password) {
      errors.push({ field: "login_pass", message: "Vui lòng nhập mật khẩu" });
    }

    if (errors.length > 0) {
      for (var i = 0; i < errors.length; i++) {
        showError(errors[i].field, errors[i].message);
      }
    } else {
      if (!localStorage.getItem(username)) {
        showError("user_name", "Tài khoản không tồn tại");
      } else if (localStorage.getItem(username) !== password) {
        showError("login_pass", "Mật khẩu không đúng");
      } else {
        $("#register-status").text("Đăng nhập thành công!");
        $("#myModal").modal("show");
        setTimeout(function () {
          window.location.href = "homepage.html";

        }, 600000);
      }
    }
  }

  function showError(field, message) {
    $("#" + field).text(message);
  }
  $("#btn-hide-pass").click(function () {
    var passField = $("#pass");

    if (passField.attr("type") === "password") {
      passField.attr("type", "text");
      $("#btn-hide-pass").removeClass("fa-eye-slash").addClass("fa-eye");
    } else {
      passField.attr("type", "password");
      $("#btn-hide-pass").removeClass("fa-eye").addClass("fa-eye-slash");
    }
  });

  function clearErrors() {
    $(".err_input").text("");
  }
});
