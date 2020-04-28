const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const getPath = require('./getPath');

function itNode(node, index, document) {
	it(`testNode${index}`, () => {
		const path = getPath(node); // строим селектор
		//console.log(index, path);		
		expect(path).toBeDefined(); // проверяем что он есть
		expect(path).not.toBe(""); // проверяем что он не пустая строка
		const findNodeAll = document.querySelectorAll(path); // пытаемся найти все элементы
		expect(findNodeAll.length).toBe(1); // проверяем что нашелся один элемент	
		const findNode = document.querySelector(path); // пытаемся найти элемент
		//console.log(index, node.innerHTML);
		//console.log(index, findNode.innerHTML);
		expect(findNode).toEqual(node); // проверяем что найденный элемент совпадает с текущим проверяемым
	});
}

describe('getPath', () => {
	const testHtml = fs.readFileSync(__dirname + '/test.html', 'UTF-8'); // читаем файл
	const {
		document
	} = (new JSDOM(testHtml)).window; //парсим файл (используется либа jsdom)
	const items = document.querySelectorAll('*'); // формируем список всех элементов
	items.forEach((node, index) => itNode(node, index, document)); // бежим по элементам
});

describe('getPath2', () => {
	const testHtml = fs.readFileSync(__dirname + '/test2.html', 'UTF-8'); // читаем файл
	const {
		document
	} = (new JSDOM(testHtml)).window; //парсим файл (используется либа jsdom)
	const items = document.querySelectorAll('*'); // формируем список всех элементов
	items.forEach((node, index) => itNode(node, index, document)); // бежим по элементам
});