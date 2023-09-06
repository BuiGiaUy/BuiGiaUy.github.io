$(document).ready(function () {
  $("#register-form").submit(function (e) {
    e.preventDefault();
    clearErrors();
    register();
  });
  function clearErrors() {
    $("input[name='register_name']").next(".err_input").text("");
    $("input[name='register_email']").next(".err_input").text("");
    $("input[name='register_phone']").next(".err_input").text("");
    $("input[name='register_birthday']").next(".err_input").text("");
    $("input[name='register_pass']").next(".err_input").text("");
    $("input[name='register_repass']").next(".err_input").text("");
    $("#invalidCheck2").next(".err_input").text("");
  }

  function register() {
    var name = $("input[name='register_name']").val();
    var email = $("input[name='register_email']").val();
    var phone = $("input[name='register_phone']").val();
    var birthday = $("input[name='register_birthday']").val();
    var pass = $("input[name='register_pass']").val();
    var repass = $("input[name='register_repass']").val();
    var invalidCheck2 = $("#invalidCheck2").prop("checked");

    var errors = [];

    if (!name) {
      errors.push({
        field: "register_name",
        message: "Vui lòng điền họ và tên",
      });
    }
    if (!email) {
      errors.push({ field: "register_email", message: "Vui lòng điền email" });
    } else if (!isValidEmail(email)) {
      errors.push({
        field: "register_email",
        message: "Email không đúng định dạng",
      });
    }
    if (!phone) {
      errors.push({
        field: "register_phone",
        message: "Vui lòng điền số điện thoại",
      });
    } else if (phone.length !== 10) {
      errors.push({
        field: "register_phone",
        message: "Số điện thoại phải có đúng 10 chữ số",
      });
    }

    if (!birthday) {
      errors.push({
        field: "register_birthday",
        message: "Vui lòng điền ngày sinh",
      });
    }
    if (!pass) {
      errors.push({
        field: "register_pass",
        message: "Vui lòng điền mật khẩu",
      });
    } else if (pass.length < 6) {
      errors.push({
        field: "register_pass",
        message: "Mật khẩu phải có ít nhất 6 ký tự",
      });
    }
    if (!repass) {
      errors.push({
        field: "register_repass",
        message: "Vui lòng điền nhập lại mật khẩu",
      });
    }
    if (pass !== repass) {
      errors.push({ field: "register_repass", message: "Mật khẩu không khớp" });
    }
    if (!invalidCheck2) {
      errors.push({
        field: "register_invalidCheck2",
        message: "Vui lòng chấp nhận tất cả điều khoản của chúng tôi",
      });
    }

    if (errors.length > 0) {
      for (var i = 0; i < errors.length; i++) {
        showError(errors[i].field, errors[i].message);
      }
    } else {
      var userInfo = {
        name: name,
        email: email,
        phone: phone,
        birthday: birthday,
      };
      localStorage.setItem("user_info", JSON.stringify(userInfo));

      var username = email;
      if (localStorage.getItem(username)) {
        $("#register-status").text("Tên đăng nhập đã tồn tại!");
        Swal.fire({
          icon: "error",
          title: "Tên đăng nhập đã tồn tại!",
          text: "Vui lòng chọn tên đăng nhập khác.",
        });
      } else {
        localStorage.setItem(username, pass);
        $("#register-status").text("Bạn đã đăng ký thành công");
        Swal.fire({
          icon: "success",
          title: "Đăng ký thành công!",
          text: "Bạn sẽ được chuyển hướng đến trang đăng nhập trong 2 giây.",
          timer: 2000,
          timerProgressBar: true,
          onOpen: () => {
            Swal.showLoading();
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            window.location.href = "login.html";
          }
        });
      }
    }
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
  $("#btn-hide-repass").click(function () {
    var passField = $("#repass");

    if (passField.attr("type") === "password") {
      passField.attr("type", "text");
      $("#btn-hide-repass").removeClass("fa-eye-slash").addClass("fa-eye");
    } else {
      passField.attr("type", "password");
      $("#btn-hide-repass").removeClass("fa-eye").addClass("fa-eye-slash");
    }
  });
  function isValidEmail(val) {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val);
  }
  function showError(field, message) {
    $("#" + field).text(message);
  }
});
