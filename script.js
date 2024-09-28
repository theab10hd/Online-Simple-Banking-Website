function register() {
  if (
    username.value != "" &&
    fname.value != "" &&
    password.value != "" &&
    confirmPassword.vlalue != ""
  ) {
    if (password.value != confirmPassword.value) {
      errorText.innerHTML = `Password Dont Match!`;
    } else {
      if (localStorage.getItem(username.value)) {
        errorText.innerHTML = `User Exits!`;
      } else {
        user = {
          id: username.value,
          name: fname.value,
          password: password.value,
          balance: 0,
        };

        localStorage.setItem(username.value, JSON.stringify(user));
        alert("Account Created!");
        window.location = "./login.html";
      }
    }
  } else {
    errorText.innerHTML = `Invalid credentials!`;
  }
}

function login() {
  if (username.value != "" && password.value != "") {
    user = JSON.parse(localStorage.getItem(username.value));
    if (user) {
      if (user.password != password.value) {
        errorText.innerHTML = `Password Invalid!`;
      } else {
        logginedUser = JSON.stringify(user);
        localStorage.setItem("logginedUser", logginedUser);
        alert("Login Success!");
        window.location = "./dashboard.html";
      }
    } else {
      errorText.innerHTML = `No User Found!`;
    }
  } else {
    errorText.innerHTML = `Invalid credentials!`;
  }
}

function logout() {
  localStorage.removeItem("logginedUser");
  alert("Logout Success!");
  window.location = "./index.html";
}

function deposit() {
  user = JSON.parse(localStorage.getItem("logginedUser"));
  if (dPassword.value == user.password) {
    if (dAmmount.value == "") {
      dErrorText.innerHTML = `Amount Incorrect!`;
    } else {
      alert("Amount Added!");
      user.balance += parseInt(dAmmount.value);
      amountBalance.innerHTML = `${user.balance}`;
      localStorage.setItem("logginedUser", JSON.stringify(user));
      updateUser();
      dForm.reset();
    }
  } else {
    dErrorText.innerHTML = `Password Incorrect!`;
  }
}

function withdraw() {
  amount = parseInt(wAmmount.value);
  user = JSON.parse(localStorage.getItem("logginedUser"));
  if (wAmmount.value == "") {
    wErrorText.innerHTML = `Amount Incorrect!`;
  } else if (amount > user.balance) {
    wErrorText.innerHTML = `Not Enough Money!`;
  } else {
    if (wPassword.value == user.password) {
      alert("Amount Withdrawn!");
      user.balance -= amount;
      amountBalance.innerHTML = `${user.balance}`;
      localStorage.setItem("logginedUser", JSON.stringify(user));
      updateUser();
      wForm.reset();
    } else {
      wErrorText.innerHTML = `Password Incorrect!`;
    }
  }
}

function updateUser() {
  logginedUser = JSON.parse(localStorage.getItem("logginedUser"));
  localStorage.setItem(logginedUser.id, JSON.stringify(logginedUser));
}
