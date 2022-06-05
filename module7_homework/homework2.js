const user = {
    name: 'Nikita',
    female: 'Smirnov',
    orders: 10,
    gender: 'male'
}

const checkStringInObject = (obj, str) => {
    let sumTrue = 0 //Вводим переменную для подсчета трушных значений
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === str) sumTrue++ // Если значение у свойства имя совпадает со строкой то прибавляем единицу
    }
    sumTrue > 0 ? console.log(true) : console.log(false) //Если хотя бы один раз строка совпала с именем, выводим тру в ином случае фолс
}

checkStringInObject(user,'Nikita')