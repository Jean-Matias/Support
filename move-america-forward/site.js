const signupForm = document.querySelector("#signup");
const signupNote = document.querySelector("#signup-note");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  signupNote.textContent = "The signup service is pending. Your email was not sent or saved.";
});
