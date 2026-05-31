const modal = document.getElementById("modalOverlay");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const passwordInput = document.querySelector("#password");

const togglePassword = document.querySelector("#togglePassword");
const loginForm = document.querySelector("#loginForm");

togglePassword.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  // Toggle the icon class
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
});
// Close Modal when X is clicked
openBtn.addEventListener("click", () => {
  // alert("please login first");
  modal.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  // alert("please login first");
  modal.style.display = "none";
});

// Close Modal when clicking outside the white box
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    
    alert("please login first");
  }
});
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.querySelector("#username").value;
  const password = passwordInput.value;
  if (username === "amit" && password === "1234") {
    alert("Login Successful! Welcome, Amit.");
    openBtn.innerText = "Welcome," + username;
    modal.style.display = "none";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
