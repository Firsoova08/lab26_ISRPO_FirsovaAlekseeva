//import { square, cube, E } from "./math.js";
//import { greet, add, PI } from "./utils.js";
//import { multiply as умножить } from "./utils.js";
//console.log("4 * 7 =", умножить (4, 7));
//import * as Utils from "./utils.js";
//console.log(Utils.greet("Мария"));
//onsole.log("Умножение:", Utils.multiply(3, 9));

//console.log("\n === Деструктуризация  массивов ===");
//const colors = ["red", "green", "blue"];
//const color1= colors[0];
//const color2= colors[1];
//console.log(color1, color2);
//const [firstColor, secondColor, thirdColor] = colors;
//console.log(firstColor, secondColor, thirdColor);
//const [primary, , tertiary] = colors;
//console.log(primary, tertiary);
//const [c1, c2, c3, c4 = "yellow"] = colors;
//console.log(c4);
//console.log("Деструктуризация объектов");
//const user = {
//  name: "Алиса",
//  age: 25,
//  city: "Москва",
//};
//const userName = user.name;
//const userAge = user.age;
//console.log(userName, userAge);
//const { name, age, city } = user;
//console.log(name, age, city);
//const { name: fullName, age:years } = user;
//console.log(fullName, years);
//const { name: personName, country = "Россия" } = user;
//console.log(personName, country);
//console.log("Деструктуризация в параметрах");
//function printUserOld(user) {
//  console.log(`Имя: ${user.name}`);
//  console.log(`Возраст: ${user.age}`);
//  console.log(`Город: ${user.city}`);
//}
//function printUser({name, age, city }) {
//  console.log(`Имя: ${name}`);
//  console.log(`Возраст: ${age}`);
//  console.log(`Город: ${city}`);  
//}
//printUserOld(user);
//console.log();
//printUser(user);
//const product = {
//    name: "Планшет",
//    price: 55000,
//    category: "Электроника",
//    inStock: true
//};
//function printProduct({ name, price, category, inStock }) {
//    console.log(`Название: ${name}`);
//    console.log(`Цена: ${price}`);
//    console.log(`Категория: ${category}`);
//    console.log(`В наличии: ${inStock ? "Да" : "Нет"}`);
//}
//printProduct(product);
//console.log("Spread для массивов");
//const arr1 = [1, 2, 3];
//const arr2= [4, 5, 6];
//const combined = [...arr1, ...arr2];
//console.log("Объединённый массив:", combined);
//const copy = [...arr1];
//console.log("Копия массива:", copy);
//const extended = [0,...arr1, 7, 8];
//console.log("Расширенный массив:", extended);
//console.log("Spread для объектов");
//const person = {
//  name: "Иван",
//    age: 30,
//};
//const address = {
//     city: "Санкт-Петербург",
//     street: "Невский проспект",
//};
//const fullInfo = { ...person, ...address }; 
//console.log("Полная информация:", fullInfo);
//const personCopy = {...person };
//console.log("Копия объекта:", personCopy);
//const updated = { ...person, age: 31, occupation: "Developer" };
//console.log("Обновлённый объект:", updated);
//console.log("Rest оператор");
//function sum(...numbers) {
//return numbers.reduce((total, num) => total + num, 0);
//}
//console.log("Сумма 1,2,3:", sum (1, 2, 3));
//console.log("Сумма 1,2,3,4,5:", sum (1, 2, 3, 4, 5));
//const numbers = [10, 20, 30, 40, 50];
//const [first, second, ...rest] = numbers;
//console.log("Первое число:", first);
//console.log("Второе число:", second);
//console.log("Остальные числа:", rest);
//const arr1 = [10, 20, 30];
//const arr2 = [40, 50, 60];
//const combinedNumbers = [...arr1, ...arr2];  
//console.log("Объединённый массив:", combinedNumbers);
//function findMax(...numbers) {
//    return Math.max(...numbers);
//}
//console.log("Максимум из (10, 20, 30):", findMax(10, 20, 30));
//console.log("Максимум из (5, 15, 25, 35, 45):", findMax(5, 15, 25, 35, 45));
//console.log("Максимум из (100, 200, 50):", findMax(100, 200, 50));
//const obj1 = {
//    brand: "Apple",
//    model: "iPad"
//};
//const obj2 = {
//    price: 55000,
//    inStock: true
//};
//const combinedObject = { ...obj1, ...obj2 };
//console.log("Объединённый объект:", combinedObject);
//console.log("Модули");
//console.log(greet ("Алексей"));
//console.log(" 5 + 3 =" , add(5, 3));
//console.log("Значение PI:", PI);
//console.log("Квадрат числа 4:", square(4));
//console.log("Куб числа 3:", cube(3));
//console.log("Число E:", E);
//console.log("Промисы");
//const simplePromise = new Promise((resolve, reject) => {
//  const success = true;
//  if (success) {
//    resolve("Операция выполнена успешно!");
//  } else {
//    reject("Произошла ошибка!");
//  }
//});
//simplePromise
//  .then((result) => console.log("Результат:", result))
//  .catch((error) => console.log("Ошибка:", error));
//function delay(ms) {
//  return new Promise((resolve) => {
//    setTimeout(() => {
//    }, ms);
//  });
//}
//delay(1000)
//  .then((message) => console.log(message));
//function fetchUserData(userId) {
//  return new Promise((resolve, reject) => {
//    setTimeout(() => {
//      if (userId > 0) {
//        resolve({
//          id: userId,
//          name: "Иван Иванов",
//          email: "ivan@example.com",
//        });
//      } else {
//        reject("Неверный ID пользователя");
//      }
//    }, 1500);
//  });
//}
//fetchUserData(1)
//  .then((user) => console.log("Пользователь:", user))
//  .catch((error) => console.log("Ошибка:", error));
//function step1() {
//  return new Promise((resolve) => {
//    setTimeout(() => resolve("Шаг 1 завершён"), 500);
//  });
//}  
//function step2 (previousResult) {
//  return new Promise((resolve) => {
//    setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершён`), 500);
//  });
//}
//function step3 (previousResult) {
//  return new Promise((resolve) => {
//    setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершён`), 500);
//  });
//}      
//step1()
//  .then((result1) => step2(result1))
//  .then((result2) => step3(result2))
//  .then((finalResult) => console.log("Финальный результат:", finalResult))
//  .catch((error) => console.log("Ошибка в цепочке:", error));
// console.log("Промисы");
// function checkInventory(productName, inStock) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (inStock) {
//                 resolve(`Товар "${productName}" есть в наличии!`);
//             } else {
//                 reject(`Товара "${productName}" нет на складе!`);
//             }
//         }, 1000);
//     });
// }
// checkInventory("Планшет", true)
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error));
// checkInventory("Ноутбук", false)
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error));

// console.log("Async/Await");
// async function greet() {
//     return "Привет!";
// }
// greet().then((message) => console.log(message));
// function getWeather() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ temp: 22, condition: "Солнечно" });
//         }, 1000);
//     });
// }
// async function showWeather() {
// console.log("Загрузка погоды...");
// const weather = await getWeather();
// console.log(`Температура: ${weather.temp}°C, ${weather.condition}`);
// }
// showWeather();
// async function fetchData (shouldFail) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldFail) {
//                 reject("Ошибка при загрузке данных");
//             } else {
//                 resolve({ data: "Важные данные" });
//             }
//         }, 800);
//     });
// }
// async function getData() {
//     try {
//         const result=await fetchData (false);
//         console.log("Успешно:", result.data);
//         const failedResult = await fetchData(true);
//         console.log("Это не выполнится");
//     }
//     catch (error) {
//         console.log("Поймана ошибка:", error);
//     }
// }
// getData();
// async function cookDinner() {
// console.log("Начинаем готовить...");
// const pasta=await delay(1000).then(() => "Паста готова");
// console.log(pasta);
// const sauce = await delay(500).then(() => "Соус готов");
// console.log(sauce);
// const salad = await delay(700).then(() => "Салат готов"); console.log(salad);
// return "Ужин готов!";
// }
// cookDinner().then((result) => console.log(result));
// async function cookDinnerFast() {
//     console.log("Готовим всё одновременно...");
//     const [pasta, sauce, salad]=await Promise.all([
//         delay(1000).then(() => "Паста готова"),
//         delay(500).then(() => "Cоус готов"),
//         delay(700).then(() => "Салат готов"),
//     ]);
//     console.log(pasta, sauce, salad);
//     return "Ужин готов быстрее!";
// }
// cookDinnerFast().then((result) => console.log(result));
// async function processOrder(product, quantity) {
//     try {
//         console.log("Проверка наличия...");
//         const stock = await checkStock(product);
//         console.log("Товар в наличии");

//         console.log("Расчет стоимости...");
//         const cost = await calculateCost(product, quantity);
//         console.log("Стоимость:", cost.total);

//         console.log("Подтверждение заказа...");
//         const order = await confirmOrder(cost);
//         console.log("Заказ подтвержден. Номер:", order.orderId);
//     } catch (error) {
//         console.log("Ошибка:", error);
//     }
// }

// processOrder("iPhone", 2);
// console.log("Fetch API");
// async function getUsers() {
// try {

// const response=await fetch("https://jsonplaceholder.typicode.com/users");
// if (!response.ok) {
// throw new Error(`HTTP ошибка! Статус: ${response.status}`);
// }
// const users=await response.json();
// console.log("Первые 3 пользователя:");
// users.slice(0, 3).forEach((user) => {
// console.log(`-${user.name} (${user.email})`);
// });
// } catch (error) {
// console.log("Ошибка при загрузке пользователей:", error.message);
// }
// }
// getUsers();
// async function getUserById(id) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/${id}');
//         const user = await response.json();
//         console.log(`Пользователь #${id}:`);
//         console.log(`Имя: ${user.name}`);
//         console.log(`Город: ${user.address.city}`);
//         console.log(`Компания: ${user.company.name}`);
//     }  catch (error) {
//         console.log("Ошибка:", error.message);
//     }
// }
// getUserById(1);
// async function createPost() {
//     try {
//         const newPost = {
//             title: "Моя первая запись",
//             body: "Это содержание моей первой записи в блоге",
//             userId: 1,
//         };
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST", 
//             headers: {
//                 "Content-Type": "application/json", 
//             },
//             body: JSON.stringify(newPost), 
//         });
//         const createdPost=await response.json();
//         console.log("Создана новая запись:");
//         console.log("ID:", createdPost.id);
//         console.log("Заголовок:", createdPost.title);
//     } catch (error) {
//         console.log("Ошибка при создании записи:", error.message);
//     }
// }
// createPost();
// console.log("Optional Chaining");
// const user1 = {
//     name: "Андрей",
//     address: {
//         city: "Волжский",
//         street: "Пушкина",
//     },
// };
// const user2 = {
// name: "Дмитрий",
// // address отсутствует
// };
// const city1 = user2.address && user2.address.city;
// console.log("Город (старый способ):", city1); 
// const city2 = user2.address?.city;
// console.log("Город (новый способ):", city2); 
// const street = user1.address?.street;
// console.log("Улица:", street); 
// const admin = {
//     name: "Администратор",
//     permissions:
//     {
//         canDelete: () => true,
//     },
// };
// const guest = {
//     name: "Гость",
// };
// console.log("Админ может удалять?", admin.permissions?.
// canDelete?.()); 
// console.log("Гость может удалять?", guest.permissions?.
// canDelete?.()); 
// const company = {
//     name: "Tech Corp",
//     employees: [
//         { name: "Надежда", role: "Developer" },
//         { name: "Анна", role: "Designer" },
//     ],
// };
// const startup = {
//     name: "New Startup",
// };
// console.log("Первый сотрудник:", сompany.employees?. [0]?.name);
// console.log("Первый сотрудник стартапа:", startup.
// employees?.[0]?.name);
// console.log("Nullish Coalescing");
// const value1 = 0;
// const value2 = "";
// const value3 = false;
// const value4 = null;
// const value5 = undefined;
// console.log('value1 || "default":', value1 || "default");
// console.log('value2 || "default":', value2 || "default");
// console.log('value3 || "default":', value3 || "default");
// console.log('value1 ?? "default":', value1 ?? "default");
// console.log('value2 ?? "default":', value2 ?? "default");
// console.log('value3 ?? "default":', value3 ?? "default");
// console.log('value4 ?? "default":', value4 ?? "default");
// console.log('value5 ?? "default":', value5 ?? "default");
// function displayUserSettings(settings) {
//     const theme=settings?.theme ?? "light";
//     const fontSize = settings?.fontSize ?? 14;
//     const notifications = settings?.notifications ?? true;
//     console.log("Настройки пользователя:");
//     console.log("Тема:", theme);
//     console.log("Размер шрифта:", fontSize);
//     console.log("Уведомления: ", notifications);
// }
// displayUserSettings({theme:"dark",fontSize:16});
// displayUserSettings({notifications:false});
// displayUserSettings({});
// const apiResponse={
//     data:{
//         user:{
//             profile:{
//                 settings:{
//                     language:"ru",
//                 },
//             },
//         },
//     },
// };
// const language=apiResponse?.data?.user?.profile?.settings?.language??"en";
// console.log("Язык:",language);
// const emptyResponse={};
// const defaultLanguage=emptyResponse?.data?.user?.profile?.settings?.language??"en";
// console.log("язык по умолчанию:",defaultLanguage);
// function displayOrder(order) {
//     const name = order?.customer?.firstName ?? "Не указано";
//     const city = order?.shipping?.address?.city ?? "Не указан";
//     const payment = order?.payment?.method ?? "Не указан";
    
//     console.log("Клиент:", name);
//     console.log("Город:", city);
//     console.log("Оплата:", payment);
// }

// displayOrder(order);
const exchangeRates = {
    USD: 92.50,
    EUR: 98.20,
    GBP: 115.30,
    CNY: 12.80,
    JPY: 0.60,
    TRY: 2.85
};
const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');
function convertCurrency() {
    const amount = amountInput.value;
    const currency = currencySelect.value;
    
    if (amount === "") {
        resultDiv.innerHTML = "Ошибка: введите сумму";
        resultDiv.classList.add('show', 'error');
        return;
    }

    const numAmount = parseFloat(amount);
    
    if (isNaN(numAmount)) {
        resultDiv.innerHTML = "Ошибка: введите корректное число";
        resultDiv.classList.add('show', 'error');
        return;
    }
    
    if (numAmount <= 0) {
        resultDiv.innerHTML = "Ошибка: сумма должна быть больше нуля";
        resultDiv.classList.add('show', 'error');
        return;
    }
     const rate = exchangeRates[currency];
    

    const result = numAmount * rate;
    
    const currencyNames = {
        USD: "долларов",
        EUR: "евро",
        GBP: "фунтов",
        CNY: "юаней",
        JPY: "иен",
        TRY: "лир"
    };
    resultDiv.innerHTML = `${numAmount} ${currencyNames[currency]} = ${result.toFixed(2)} рублей`;
    resultDiv.classList.add('show');
    resultDiv.classList.remove('error');
}
convertBtn.addEventListener('click', convertCurrency);
amountInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertCurrency();
    }
});