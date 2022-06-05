// Создаем родительскую функцию-конструктор Appliances в нем характериситику - тип
function Appliances () {
    this.category = 'Appliances'
}
// Добавляем через прототип метод, который определяет - включен или выключен аппарат в розетку
Appliances.prototype.switchSocket = function switchSocket (ampere, volt) {
    if (ampere * volt > 0) {
        console.log('plugged')
    } else console.log('unplugged')
}
// Создаем функцию -конструктор компьютер, в нем прописываем основные характеристики тип и бренд.
function Computer (type, brand) {
    this.type = type
    this.brand = brand
}
// Привязываем к родительской функции
Computer.prototype = new Appliances()
//Создаем метод, который позволяет определить стоимость устройства (Не знал что ее можно придумать)
Computer.prototype.costEstimate = function costEstimate (price) {
    if (price > 1000) {
        console.log('Expensive device')
    } else console.log('cheap device')
}
// Создаем функцию -конструктор лампа, в нем прописываем основные характеристики
function Lamp (purpose, room) {
    this.purpose = purpose
    this.room = room
}
// Привязываем к родительской функции
Lamp.prototype = new Appliances()
//Создаем метод, который позволяет определить, какая лампочка подойдет для это типа светильника
Lamp.prototype.getBulbType = function getLampType () {
    if (this.purpose === 'Desk') {
        console.log('Bulb with white light')
    } else console.log('Bulb with yellow light')
}
// Выводим результат по компьютерам
let macbook = new Computer('Laptop', 'Apple')
console.log(macbook)
macbook.switchSocket(0,0)
macbook.costEstimate(1000)

// Выводим результат по лампам
let deskLamp = new Lamp('Desk', 'Living room')
console.log(deskLamp)
deskLamp.switchSocket(2,30)
deskLamp.getBulbType()