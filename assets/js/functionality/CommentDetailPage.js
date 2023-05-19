// Nav tab info/review
const liInfo = document.querySelector('#li_info');
const liRevie = document.querySelector('#li_revie');
const tabInfo = document.querySelector('.tab-addInfo');
const tabRevie = document.querySelector('.tab-revie');
function openInfo() {
  tabInfo.style.display = "block";
  tabRevie.style.display = "none";
  liInfo.style.color = "rgb(36, 36, 36)";
  liRevie.style.color = "#A39D9D";
}
function openCmt() {
  tabRevie.style.display = "block";
  tabInfo.style.display = "none";
  liRevie.style.color = "rgb(36, 36, 36)";
  liInfo.style.color = "#A39D9D";
}

// Check input
const button = document.getElementById("submit_comment");

button.addEventListener('click', function validateEmail() {
  const emailInput = document.getElementById("email_Input");
  const nameInput = document.getElementById("name_Input");
  const mesInput = document.getElementById("mes_Input");

  const emailRegex = /\S+@\S+\.\S+/; // Bieu thuc chinh quy se khop voi chuoi dang "tu_khoa@ten_mien.ten_duoi VD: example@example.com"

  if (nameInput.value.trim() === "" || !emailRegex.test(emailInput.value)  || mesInput.value.trim() === "") {
    alert("Please enter all required information accurately")
  } else {
    alert("Thank you for rating and commenting")
  }

});