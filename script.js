// script.js

document.addEventListener('DOMContentLoaded', function () {
    const navButtons = document.querySelectorAll('.nav a');

    navButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Удаляем класс active у всех кнопок
            navButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });

            // Добавляем класс active к нажатой кнопке
            button.classList.add('active');
        });
    });
});










function openUhirovWindow() {
    var uhirovWindow = document.getElementById('uhirovWindow');
    uhirovWindow.style.display = 'block';
    uhirovWindow.classList.add('fade-in');
}

// Добавляем обработчик события для закрытия окна при клике вне его области
window.addEventListener('click', function(event) {
    var uhirovWindow = document.getElementById('uhirovWindow');
    if (event.target == uhirovWindow) {
        uhirovWindow.style.display = 'none';
        uhirovWindow.classList.remove('fade-in');
    }
});
