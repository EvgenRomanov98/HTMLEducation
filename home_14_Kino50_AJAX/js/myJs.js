// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();
// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", false);
// 3. Отсылаем запрос
xhr.send();
// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status !== 200) {
    // обработать ошибку
    alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
} else {
    // вывести результат
    var objResponse = JSON.parse(xhr.responseText); // парс объекта
}

var listFilm = document.getElementById('list-film');//мой список фильмов ul
var fragment = document.createDocumentFragment(); // создаю фрагмент, который не отображается в DOM, буду в него добавлять елементы пез перещета HTML
var template = document.getElementById('templateIMG'); // мой шаблон, который мне позволит добавлять елементы в фрагмент, а потом все разом в список фильмов

var figure = template.content.querySelector('li > figure'); // тег figure
var img = figure.querySelector('img'); // тег img
var figcaption = figure.querySelector('figcaption'); //описание figure

for (let i = 0; i < 50; i++) {

    figcaption.textContent = objResponse[i].title; //добавляю описание к картинке
    img.src = objResponse[i].thumbnailUrl; // добавляю ссылку на маленькую картинку
    img.alt = "attentional"; //фльтернативный текст

    img.id = i;// присваиваю id к картинке, что бы потом можно было ее  искать в обекте из json

    var cloneTemplate = document.importNode(template.content, true); // клонирую свой шаблон template
    fragment.appendChild(cloneTemplate); // вставляю его в фрагмент
}

listFilm.appendChild(fragment); // вставляю весь список картинок одним разом из фрагмента.

//событие на родительском теге, списке ul
listFilm.onclick = function (event) {
    var target = event.target;

    while (target !== listFilm) {//выполняю до тех пор, пока не дойду до ul - верхнего родителя картинок
        target = target.parentElement;
        if (target.matches("li")) { // если это li, значит это верхний родитель елемента, который активировал событие.
            var img = target.querySelector("figure > img"); // дохожу до картинки для которой было активировано событие
            if (img.biggest === true) {// проверяю, какой размер у картинки
                //если большой, то уменьшу
                img.biggest = false; // установлю флаг маленькой картинки
                img.src = objResponse[img.id].thumbnailUrl; // поменяю ссылку на маленькую картинку
            } else {
                // если картинка маленькая
                img.biggest = true; //установлю флаг большой картинки
                img.src = objResponse[img.id].url; // помяняю ссылку на большую картинку
            }
            return;
        }
    }
};
