function alertScreenSize () {
    //Создаем переменную кнопка
    const button = document.querySelector('.button')
    //Создаем функцию, где находим размеры экрана
    function getScreenSize () {
        const width = window.screen.width
        const height = window.screen.height
        return width + 'x' + height
    }
    // Создаем фукнцию, которая определяет тип устройства
    function identifyDevice () {
        if (+window.screen.width >= 1000) {
            return 'Десктоп'
        } else return 'Мобильное устройство'
    }
    // Создаем обработчик на клик по кнопке, где выводим алерт с нужными значениями
    button.addEventListener('click', (ev) => {
        ev.preventDefault()
        const screenSize = getScreenSize()
        const device = identifyDevice()
        alert(`Ваш размер экрана - ${screenSize}. Вероятно, у вас - ${device}`)
    })
}

document.addEventListener('DOMContentLoaded', alertScreenSize)