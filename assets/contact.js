document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const fields = ["name", "email", "subject", "message"];
  const successMsg = document.createElement("p");
  successMsg.id = "success";
  successMsg.dataset.testid = "test-contact-success";
  successMsg.classList.add("success");
  successMsg.style.display = "none";
  form.appendChild(successMsg);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("full-name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const errorName = document.getElementById("error-name");
    const errorEmail = document.getElementById("error-email");
    const errorSubject = document.getElementById("error-subject");
    const errorMessage = document.getElementById("error-message");

    // Reset
    [errorName, errorEmail, errorSubject, errorMessage].forEach(
      (el) => (el.textContent = "")
    );
    successMsg.style.display = "none";

    if (!name.value.trim()) {
      errorName.textContent = "Full name is required.";
      valid = false;
    }
    if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
      errorEmail.textContent = "Enter a valid email (example@mail.com).";
      valid = false;
    }
    if (!subject.value.trim()) {
      errorSubject.textContent = "Subject is required.";
      valid = false;
    }
    if (!message.value.trim() || message.value.length < 10) {
      errorMessage.textContent = "Message must be at least 10 characters long.";
      valid = false;
    }

    if (valid) {
      successMsg.textContent = "✅ Message sent successfully!";
      successMsg.style.display = "block";
      form.reset();
    }
  });
});
