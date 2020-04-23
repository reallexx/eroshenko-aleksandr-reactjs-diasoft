# About

Модуль 3. JavaScript. Работа с DOM

# Description

getPath — поиск уникального селектора<br>
Написать алгоритм и функцию `getPath()`, находяющую уникальный css-селектор для элемента в документе.<br>
Уникальный селектор может быть использован в `document.querySelector()` и возвращать исходный элемент.<br>
`document.querySelectorAll()`, вызванный с этим селектором, не должен находить никаких элементов, кроме исходного.<br>

```javascript<br>
$0 // HTMLElement
getPath($0) // => "..."
```

# How to

Реализована функция getPath.<br>
Тестовые html файлы test.html, test2.html.<br>
Для проверки используется jest.<br>

Для запуска тестов сначала выполнить nmp i. После установки пакетов выполнить npm run test.

# Notes
