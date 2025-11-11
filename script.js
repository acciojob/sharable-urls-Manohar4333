// Get the elements from the page
let button = document.getElementById("button");
let nameInput = document.getElementById("name");
let yearInput = document.getElementById("year");
let urlText = document.getElementById("url");

// When the button is clicked
button.addEventListener("click", function(event) {
  // Stop the page from reloading
  event.preventDefault();

  // Get the values from the inputs
  let nameValue = nameInput.value;
  let yearValue = yearInput.value;

  // Start with the base URL
  let baseUrl = "https://localhost:8080/";

  // If both inputs have values, add them to the URL
  if (nameValue && yearValue) {
    let newUrl = baseUrl + "?name=" + nameValue + "&year=" + yearValue;
    urlText.textContent = newUrl;
  } else {
    // If any input is empty, just show the base URL
    urlText.textContent = baseUrl;
  }
});
