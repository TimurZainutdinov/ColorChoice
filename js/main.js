// Поиск элементов на странице
let img = document.querySelector("#img"),
  buttons = document.querySelectorAll(".colorItem");

// Отслеживаю событие пользователя
buttons.forEach(function (item) {
  item.addEventListener("click", function (event) {


// Получаю имя файла из дата-атрибута + формирование нового значения для атрибута src
    img.src = `https://webcademy.ru/files/js2020/solaris/` + event.target.dataset.file;

    // Отключение активного класса colorItem--active у прошлой кнопки
    let activBtn = document.querySelector(".colorItem--active");
    activBtn.classList.remove("colorItem--active");

    // Создание кнопки со значением актив--active + добавлие класса
    event.target.classList.add("colorItem--active");
  });
});
