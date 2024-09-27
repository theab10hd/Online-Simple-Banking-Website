function register() {
  if (username.value == "" || fname.value == "" || password.value == "") {
    errorText.innerHTML = "Please fill the Form!";
  } else {
    if (confirmPassword.value != password.value) {
      errorText.innerHTML = "Password Not Match!";
    } else {
      newUser = {
        id: username.value,
        name: fname.value,
        email: email.value,
        password: password.value,
        balance: 0,
      };

      if (localStorage.getItem(username.value)) {
        alert("Username Exits");
      } else {
        localStorage.setItem(1, JSON.stringify(newUser));
        alert("Account Created!");
        window.location = "./dashboard.html";
      }
    }
  }
}

function logout() {
  localStorage.clear();
  activeUser = "";
  window.location = "./index.html";
}

function login() {
  if (username.value == "" || password.value == "") {
    errorText.innerHTML = "Please fill the Form!";
  } else {
    textData = "";

    if (!localStorage.getItem(username.value)) {
      textData = "Username Didnt Exits!";
    } else {
      account = JSON.parse(localStorage.getItem(username.value));
      console.log(account.password, password.value);

      if (account.password != password.value) {
        console.log(account);
        textData = "Incorrect Password!";
      } else {
        alert("Login Success");
        window.location = "./dashboard.html";
      }
    }

    errorText.innerHTML = textData;
  }
}

function deposit() {
  user = JSON.parse(localStorage.getItem(1));
  if (dPassword.value == user.password) {
    if (dAmmount.value == "") {
      dErrorText.innerHTML = `Amount Incorrect!`;
    } else {
      alert("Amount Added!");
      user.balance += parseInt(dAmmount.value);
      amountBalance.innerHTML = `${user.balance}`;
      localStorage.setItem(1, JSON.stringify(user));
    }
  } else {
    dErrorText.innerHTML = `Password Incorrect!`;
  }

  setTimeout(() => {
    dErrorText.innerHTML = "";
  }, 3000);
}

function withdraw() {
  amount = parseInt(wAmmount.value);
  user = JSON.parse(localStorage.getItem(1));
  if (wAmmount.value == "") {
    wErrorText.innerHTML = `Amount Incorrect!`;
  } else if (amount > user.balance) {
    wErrorText.innerHTML = `Not Enough Money!`;
  } else {
    if (wPassword.value == user.password) {
      alert("Amount Withdrawn!");
      user.balance -= amount;
      amountBalance.innerHTML = `${user.balance}`;
      localStorage.setItem(1, JSON.stringify(user));
    } else {
      wErrorText.innerHTML = `Password Incorrect!`;
    }
  }

  setTimeout(() => {
    wErrorText.innerHTML = "";
  }, 3000);
}
