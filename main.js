const barIcon = document.querySelector(".barIcon");
const sidebar = document.querySelector(".sidebar");

barIcon.addEventListener("click", () => {
  if (sidebar.style.display == "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
});
