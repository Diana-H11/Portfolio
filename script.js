const form = document.getElementById("contactForm");

// Додаємо обробник події submit
form.addEventListener("submit", function(event) {
    // Зупиняємо стандартну поведінку форми (перезавантаження сторінки)
    event.preventDefault();

    // Отримуємо значення з полів
    const name = form.elements["name"].value; // Отримуємо ім'я
    const email = document.getElementById("email").value; // Отримуємо email
    const message = document.getElementById("textarea").value; // Отримуємо повідомлення

    // Створення об'єкта з даними форми
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Використовуємо fetch для відправлення форми на сервер (FormSubmit)
    fetch("https://formsubmit.co/2fda29d5e9cfee627f4d852d13964ca8", {
        method: "POST",
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            // Якщо форма успішно надіслана
            alert(`Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMessage: ${message}`);
        } else {
            // Якщо сталася помилка при відправленні
            alert("Oops! Something went wrong. Please try again.");
        }
    })
    .catch(error => {
        // Якщо сталася помилка при з'єднанні
        alert("Oops! Something went wrong. Please try again.");
    });
});
