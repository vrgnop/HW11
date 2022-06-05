const user = {
    gender: 'male'
}

// Создаем прототип в объекте
const customer = Object.create(user)

// Наполняем объект свойствами
customer.name = 'Nikita'
customer.female = 'Smirnov'
customer.orders = 10
console.log(customer)

// Находим все ключи объекта customer
const getKeys = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) console.log(key)
    }
}

getKeys(customer)
