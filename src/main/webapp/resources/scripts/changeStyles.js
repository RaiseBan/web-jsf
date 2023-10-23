// Получаем все кнопки с классом "color-button"
const divElement = document.getElementById('choose-x');
const buttonsInDiv = divElement.querySelectorAll('button');


// Добавляем обработчик события клика на каждую кнопку
buttonsInDiv.forEach(button => {
    button.addEventListener('click', () => {
        // Удаляем класс "active" у всех кнопок
        buttonsInDiv.forEach(btn => btn.classList.remove('active'));

        // Добавляем класс "active" только кнопке, на которую был клик
        button.classList.add('active');
    });
});

