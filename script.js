const form = document.getElementById("contactForm");

        // Додаємо обробник події submit
        form.addEventListener("submit", function(event) {
            // Зупиняємо стандартну поведінку форми (перезавантаження сторінки)
            event.preventDefault();

            // Отримуємо значення з полів
            const name = form.elements["name"].value; // Отримуємо ім'я
            const email = document.getElementById("email").value; // Отримуємо email
            const message = document.getElementById("textarea").value; // Отримуємо повідомлення

            // Виводимо alert з даними форми
            alert(`Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMessage: ${message}`);
        });