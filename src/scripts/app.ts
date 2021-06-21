const helpSectionContainer = document.querySelector(".help-section-container");
const errorContainer = document.querySelector(".error-container");
const successContainer = document.querySelector(".success-container");
const emailInputBox = document.querySelector("#input-box") as HTMLInputElement;
const validEmailText = document.querySelector(".valid-check-text");

document.querySelector(".reset-button").addEventListener("click", async () => {
  const emailInput = emailInputBox.value;

  if (validateEmail(emailInput)) {
    let body = { email: emailInput };

    const response = await fetch(
      "http://localhost:3005/customer/account/resetPassword",
      {
        method: "POST",
        body: JSON.stringify({ email: emailInput }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 200) {
      successContainer.classList.toggle("hide");
    } else {
      errorContainer.classList.toggle("hide");
    }
  } else {
    validEmailText.classList.toggle("hide");
  }
});

function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

document.querySelector(".help-section-link").addEventListener("click", () => {
  helpSectionContainer.classList.toggle("hide");
});
