function showDetails(candle) {
    var description="";
   if (candle === "Vanilla") {
    description = "Vanilla Candle: A warm and sweet scent.";
}
else if (candle === "Rose") {
    description = "Rose Candle: A soft and romantic floral scent.";
}
else if (candle === "Lavender") {
    description = "Lavender Candle: A calming and relaxing scent.";
}
else if (candle === "Oud") {
    description = "Oud Candle: A rich and luxurious woody scent.";
}

document.getElementById("candle-details").innerHTML = description;

document.getElementById("candle-details").style.backgroundColor = "#F2E5D8";

document.getElementById("candle-details").style.borderRadius = "12px";
var candleImage = document.getElementById("candle-detail-image");

if (candle === "Vanilla") {
    candleImage.src = "Images/vanilla.jpg";
}
else if (candle === "Rose") {
    candleImage.src = "Images/rose.jpg";
}
else if (candle === "Lavender") {
    candleImage.src = "Images/lavender.jpg";
}
else if (candle === "Oud") {
    candleImage.src = "Images/oud.jpg";
}

candleImage.style.display = "block";
candleImage.style.margin = "15px auto";
}
var candleNames = ["Vanilla", "Rose", "Lavender", "Oud"];
var total = 0;

for (var i = 0; i < candleNames.length; i++) {
    total++;
}
if(document.getElementById("candle-count")){
document.getElementById("candle-count").innerHTML =
    "Total Candle Scents: " + total;

}
 /* Login and Sign Up Validation */

function showMessage(element, message, type) {
element.textContent = message;

if (type === "error") {
    element.style.color = "red";
} else {
    element.style.color = "green";
}
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function handleLogin(event) {
event.preventDefault();

const email = document.getElementById("loginEmail").value.trim();
const password = document.getElementById("loginPassword").value;
const message = document.getElementById("loginMessage");

if (email === "" || password === "") {
    showMessage(message, "Please fill in both fields.", "error");
}
else if (!isValidEmail(email)) {
    showMessage(message, "Please enter a valid email address.", "error");
}
else {
    showMessage(message,
        "Login details validated successfully!",
        "success");
}
}

function handleSignup(event) {
event.preventDefault();

const name = document.getElementById("fullName").value.trim();
const email = document.getElementById("signupEmail").value.trim();
const password = document.getElementById("signupPassword").value;
const confirmPassword = document.getElementById("confirmPassword").value;
const message = document.getElementById("signupMessage");

if (name === "" || email === "" ||
    password === "" || confirmPassword === "") {
    showMessage(message, "Please complete all fields.", "error");
}
else if (!isValidEmail(email)) {
    showMessage(message, "Please enter a valid email address.", "error");
}
else if (password.length < 8) {
    showMessage(message,
        "Password must contain at least 8 characters.",
        "error");
}
else if (password !== confirmPassword) {
    showMessage(message,
        "Passwords do not match. Please try again.",
        "error");
}
else {
    showMessage(message,
        "Sign up details validated successfully!",
        "success");
}
}

document.addEventListener("DOMContentLoaded", function() {

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
}

if (signupForm) {
    signupForm.addEventListener("submit", handleSignup);
}
});
