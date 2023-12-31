# Домашнее задание к лекции 8 «Декораторы»

Задача 1. Усовершенствовать кеширующий декоратор
Напишите усовершенствованный кеширующий декоратор cachingDecoratorNew, аналогичный рассмотренному на лекции, так, чтобы он кешировал только последние пять различных вызовов функции, то есть чтобы кеш мог хранить только пять значений.

Чтобы тесты выполнялись, функция должна возвращать следующие строки(!) «Вычисляем: 10» для первого вызова (10 для примера) и «Из кеша: 10» — для повторного. Подробнее смотрите в файле tests.js.

Для вычисления хеша нужно использовать алгоритм хеширования MD5. Для его применения в файл с тестами была подключена библиотека js-md5. То есть алгоритм MD5 применим в любой области видимости файлов скриптов, подключенных к странице с тестами.

const hasingText = "какой-нибудь текст";
console.log(md5(hasingText)); // 8d1d3ecc455a4220590e6d27e6c1a267
console.log(md5([10, 20, 30])); // 7f49b84d0bbc38e96493718013baace6
Рекомендуем параллельно выводить результаты в консоль, чтобы вам было удобнее отлаживать.

console.log("Вычисляем: " + result);
return "Вычисляем: " + result;
Подсказка 1.
Подсказка 2.
Подсказка 3.
Подсказка 4.
Какой результат мы хотели бы получить
const addAndMultiply = (a, b, c) => (a + b) * c;
const upgraded = cachingDecoratorNew(addAndMultiply);
upgraded(1, 2, 3); // вычисляем: 9
upgraded(1, 2, 3); // из кеша: 9
upgraded(2, 2, 3); // вычисляем: 12
upgraded(3, 2, 3); // вычисляем: 15
upgraded(4, 2, 3); // вычисляем: 18
upgraded(5, 2, 3); // вычисляем: 21
upgraded(6, 2, 3); // вычисляем: 24 (при этом кеш для 1, 2, 3 уничтожается)
upgraded(1, 2, 3); // вычисляем: 9  (снова вычисляем, кеша нет)
Задача 2. Декоратор debounce с моментальным вызовом и подсчётом количества вызовов
Усовершенствуйте рассмотренный на лекции debounce декоратор, добавив три дополнительные фичи:

Первый вызов происходил моментально, а следующий не раньше, чем через интервал времени, причём интервал должен задаваться в момент применения декоратора к функции. Дополнительная статья про debouncing и throttling.
Усовершенствуйте декоратор так, чтобы в свойстве count декорированной функции хранилось количество её вызовов. Для решения используйте подход, который был применён в лекции для декоратора-шпиона.
Усовершенствуйте декоратор так, чтобы в свойстве allCount декорированной функции хранилось количество вызовов декоратора. Для решения используйте подход, который был применён в лекции для декоратора-шпиона.
графическое представление

Подсказка 1.
Подсказка 2.
const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(() => upgradedSendSignal(1, 0)); // Сигнал отправлен + будет запланирован асинхронный запуск, который будет проигнорирован, так как следующий сигнал отменит предыдущий (300 - 0 < 2000)
setTimeout(() => upgradedSendSignal(2, 300), 300); // проигнорировано, так как следующий сигнал отменит предыдущий (900 - 300 < 2000)
setTimeout(() => upgradedSendSignal(3, 900), 900); // проигнорировано, так как следующий сигнал отменит предыдущий (1200 - 900 < 2000)
setTimeout(() => upgradedSendSignal(4, 1200), 1200); // проигнорировано, так как следующий сигнал отменит предыдущий (2300 - 1200 < 2000)
setTimeout(() => upgradedSendSignal(5, 2300), 2300); // Сигнал отправлен, так как следующий вызов не успеет отменить текущий: 4400-2300=2100 (2100 > 2000)
setTimeout(() => upgradedSendSignal(6, 4400), 4400); // проигнорировано, так как следующий сигнал отменит предыдущий (4500 - 4400 < 2000)
setTimeout(() => upgradedSendSignal(7, 4500), 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с
setTimeout(() => {
  console.log(upgradedSendSignal.count); // было выполнено 3 отправки сигнала
  console.log(upgradedSendSignal.allCount); // было выполнено 6 вызовов декорированной функции
}, 7000)


Результат при правильном решении задания
графическое представление

Требования к выполнению домашней работы
Все тесты успешно выполняются.
Соблюдается кодстайл.
Решение загружено в форкнутый репозиторий GitHub.
Решение опубликовано в GitHub Pages.
Решение задач
Откройте файл task.js в вашем редакторе кода и выполните задание.
Проверьте соблюдение кодстайла. Форматируйте ваш код через форматтер https://codebeautify.org/jsviewer.
Добавьте файл task.js в индекс git с помощью команды git add %file-path%, где %file-path% — путь до целевого файла git add ./8.decorators/task.js.
Сделайте коммит, используя команду git commit -m '%comment%', где %comment% — это произвольный комментарий к вашему коммиту git commit -m 'Восьмое задание полностью готово'.
Опубликуйте код в репозиторий homeworks с помощью команды git push -u origin main.
На проверку пришлите 2 ссылки. На файл с решением (task.js) и на страницу GitHub Pages — страницу с автотестами: https://%USERNAME%.github.io/bjs-2-homeworks/8.decorators.
Никакие файлы прикреплять не нужно.

Все задачи обязательны к выполнению для получения зачёта. Можете прислать на проверку как каждую задачу по отдельности, так и все задачи вместе. Во время проверки по частям у вашей домашней работы будет статус «На доработке».

Любые вопросы по решению задач задавайте в чате учебной группы.