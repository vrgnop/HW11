// Создаем класс Appliances в нем характериситику тип и метод, который определяется - включен или выключен аппарат в розетку
class Appliances {
    constructor() {
        this.category = 'Appliances'
    }
    switchSocket (amper, volt) {
        if (amper * volt > 0) {
            console.log ('plugged')
        } else console.log('unplugged')
    }
}
// Создаем класс компьютер, в нем прописываем основные характеристики тип и бренд. Создаем метод, который позволяет определить стоимость устройства (Не знал что ее можно придумать)
class Computer extends Appliances {
    constructor(options) {
        super();
        this.type = options.type
        this.brand = options.brand
    }
    costEstimate (price) {
        if (price > 1000) {
            console.log('Expensive device')
        } else console.log('cheap device')
    }
}
// Создаем класс Lamp. Заносим через конкструктор характеристики. Создаем метод, который определяет, какая лампочка подходит для данного типа лампы
class Lamp extends Appliances {
    constructor(options) {
        super();
        this.purpose = options.purpose
        this.room = options.room
    }
    getBulbType () {
    if (this.purpose === 'Desk') {
        console.log('Bulb with white light')
    } else console.log('Bulb with yellow light')
    }
}
// Придумываем объект для класса компьютеры, выводим его и все относящиеся к нему методы
let macbook = new Computer({
    type: 'Laptop',
    brand: 'Apple'
})
console.log(macbook)
macbook.switchSocket(0,0)
macbook.costEstimate(1000)
// Придумываем объект для класса лампы, выводим его и все относящиеся к нему методы
let deskLamp = new Lamp({
        purpose: 'Desk',
        room: 'Living room'
    }
)
console.log(deskLamp)
deskLamp.switchSocket(2,30)
deskLamp.getBulbType()