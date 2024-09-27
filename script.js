function register() {
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

function logout() {
  localStorage.clear();
  activeUser = "";
  window.location = "./index.html";
}

function login() {
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

function deposit() {
  user = JSON.parse(localStorage.getItem(1));
  if (dPassword.value == user.password) {
    alert("Amount Added!");
    user.balance += parseInt(dAmmount.value);
    amountBalance.innerHTML = `${user.balance}`;
    localStorage.setItem(1, JSON.stringify(user));
  } else {
    alert("Password Incorrect!");
  }
}

function withdraw() {
  user = JSON.parse(localStorage.getItem(1));
  if (wPassword.value == user.password) {
    alert("Amount Withdrawn!");
    user.balance -= parseInt(wAmmount.value);
    amountBalance.innerHTML = `${user.balance}`;
    localStorage.setItem(1, JSON.stringify(user));
  } else {
    alert("Password Incorrect!");
  }
}
