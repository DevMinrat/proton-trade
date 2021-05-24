const form = document.getElementById("form"),
  contactsSection = document.querySelector(".contacts"),
  contactsSuccess = document.querySelector(".contacts__success"),
  successBtn = document.querySelector(".contacts__success-btn");

form.addEventListener("submit", formSend);

async function formSend(e) {
  e.preventDefault();

  let formData = new FormData(form);

  contactsSection.classList.add("_sending");

  let response = await fetch("sendmail.php", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    let result = await response.json();

    form.reset();
    contactsSection.classList.remove("_sending");
    contactsSuccess.classList.remove("hide");
  } else {
    alert("Ошибка");
    contactsSection.classList.remove("_sending");
  }
}

successBtn.addEventListener("click", () =>
  contactsSuccess.classList.add("hide")
);
