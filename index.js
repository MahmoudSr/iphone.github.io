const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  const navigation = document.getElementById("navigation");
  navigation.classList.toggle("toggle");
  document.body.classList.toggle("no-scroll");
  navToggle.classList.toggle("close");
});
