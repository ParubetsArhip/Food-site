document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__cap-menu').classList.toggle('open');
    document.querySelector('.header__cap-buttons').classList.toggle('hidden'); // Добавляем класс "hidden"
});

document.addEventListener("DOMContentLoaded", () => {
    // Выбираем все элементы <details> с классом .custom-details-mobil
    const detailsList = document.querySelectorAll(".custom-details-mobil");

    // Для каждого элемента <details> находим его родительский блок
    detailsList.forEach((details, index) => {
        const block = document.querySelectorAll(".subscription__mobil-block")[index]; // Индексируем блоки

        if (details && block) {
            details.addEventListener("toggle", () => {
                if (details.open) {
                    block.style.height = "495px"; // Увеличиваем высоту
                } else {
                    block.style.height = "357px"; // Возвращаем исходную высоту
                }
                block.style.transition = "height 0.3s ease"; // Плавное изменение
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".password-toggle-pas");

    toggleButtons.forEach((button) => {
        const input = button.parentElement.querySelector(".password-input-pas"); // Находим input в текущем контейнере
        const img = button.querySelector(".password-toggle-img-pas");

        button.addEventListener("click", () => {
            const isPassword = input.type === "password";

            // Переключение типа поля
            input.type = isPassword ? "text" : "password";

            // Смена изображения кнопки
            img.src = isPassword
                ? "./images/icon/eye-blue-icon.svg" // Скрытый пароль
                : "./images/icon/eye-icon.svg"; // Показанный пароль

            // Альтернативный текст для доступности
            img.alt = isPassword ? "Скрыть пароль" : "Показать пароль";
        });
    });
});

