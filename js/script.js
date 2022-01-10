// получаем ноды всех кнопок
const buttons = document.querySelectorAll('.tab_button');
// получаем ноды всех полей табов
const textItems = document.querySelectorAll('.text_item');

// проходимся циклом по всем кнопкам
buttons.forEach(doLogic);

function doLogic(item) {
    // вызываем событие для каждой кнопки
    item.addEventListener('click', () => {
        // для удобства переименована кнопка внутри цикла
        let currentButton = item;
        // получаем атрибут дата каждой итерируемой кнопки что бы связать это кнопку с соответствующем полем
        let getId = currentButton.getAttribute('data-tab');
        // обращаемся по айди к соответствующему полю
        let currentText = document.querySelector(getId);
        // если у кнопки нету класса актив то выполняем данную логику
        if (!currentButton.classList.contains('active')) {
            // опять циклом по всем кнопкам что бы удалить имеющиеся классы актив у других кнопок
            buttons.forEach((item) => {
                item.classList.remove('active');
            });
            // удаляем классы актив у других полей
            textItems.forEach((item) => {
                item.classList.remove('active-text')
            });
            // добавляем только текущей кнопке класс актив
            currentButton.classList.add('active');
            // добавляем только текущему полю класс актив
            currentText.classList.add('active-text');
        }
    })
};
