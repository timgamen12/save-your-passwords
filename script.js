const formView = document.getElementById("formView");
const listView = document.getElementById("listView");
const passwordForm = document.getElementById("passwordForm");
const credentialsList = document.getElementById("credentialsList");
const addNewBtn = document.getElementById("addNewBtn");

// Show list of saved credentials
function showListView() {
  formView.classList.add("hidden");
  listView.classList.remove("hidden");
  renderCredentials();
}

// Show the form to add a new password
function showFormView() {
  listView.classList.add("hidden");
  formView.classList.remove("hidden");
}

// Save to localStorage
function saveCredential(website, username, password) {
  const creds = JSON.parse(localStorage.getItem("credentials")) || [];
  creds.push({ website, username, password });
  localStorage.setItem("credentials", JSON.stringify(creds));
}

// Render stored credentials
function renderCredentials() {
  credentialsList.innerHTML = "";
  const creds = JSON.parse(localStorage.getItem("credentials")) || [];
  if (creds.length === 0) {
    credentialsList.innerHTML = "<li>No passwords saved.</li>";
    return;
  }
  creds.forEach(({ website, username, password }, index) => {
    const li = document.createElement("li");
    li.textContent = `${website} | ${username} | ${password}`;
    credentialsList.appendChild(li);
  });
}

// Form submission
passwordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const website = document.getElementById("website").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  saveCredential(website, username, password);
  passwordForm.reset();
  showListView();
});

// "Add Password" button
addNewBtn.addEventListener("click", showFormView);

// Load list view on page load
document.addEventListener("DOMContentLoaded", showListView);
function showDetail(index) {
  const creds = JSON.parse(localStorage.getItem("credentials")) || [];
  const selected = creds[index];
  if (selected) {
    // Show all fields clearly
    detailWebsite.textContent = selected.website;
    detailUsername.textContent = selected.username;
    detailPassword.textContent = selected.password;
    showView(detailView);
  }
}

