document.querySelector("a").addEventListener("click", function(event) {
  const name = document.querySelector("input[type='text']").value.trim();

  if (name === "") {
    event.preventDefault(); // stops link from opening
    alert("Please write your name");
  } else {
    alert("Welcome, " + name + "!");
    // It will then go to main.html as normal
  }
});
