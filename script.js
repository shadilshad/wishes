
const nameInput = document.querySelector("input[type='text']");
const clickLink = document.querySelector("a");

// Function to validate name and proceed
function validateAndProceed(event) {
  const name = nameInput.value.trim();

  if (name === "") {
    event.preventDefault(); // stops link from opening
    alert("Please write your name");
  } else {
    alert("Welcome, " + name + "!");
    // link will work normally
  }
}

// Trigger when user clicks the link
clickLink.addEventListener("click", validateAndProceed);

// Trigger when user presses Enter inside the input
nameInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();      // prevent default Enter behavior
    clickLink.click();           // simulate clicking the link
  }
});
