function createChat () {
    // Вводим переменные, которые планируем использовать в чате
    const chatContainer = document.querySelector('.chat-container') //Контейнер с чатом
    const chatForm = document.querySelector('.chat-form') // Форма отправки сообщений
    const closeChatButton = document.querySelector('.close-chat') // Кнопка - закрыть чат
    const openChatButton = document.querySelector('.open-chat') // Кнопка открыть чат
    const messages = chatContainer.querySelector('.messages') // Блок с выводом сообщений
    const geoSubmit = chatContainer.querySelector('.geolocation')
    const webURL = 'wss://echo-ws-service.herokuapp.com' // УРЛ откуда будут приходить сообщения с сервера

    let websocket // Объект для работы с вебсокетом

    // Ставим обработчик на инпут, который активирует кнопку
    chatForm.querySelector('.chat-input').addEventListener('input', () => {
        const inputMessage = chatForm.querySelector('.chat-input')
        const submitMessage = chatForm.querySelector('.chat-submit')
        activateSubmit(inputMessage, submitMessage)
    })

    // Создаем функцию активации кнопки сабмит при непустом инпуте.
    function activateSubmit(input, submit) {
        if (input.value != '') {
            submit.classList.remove('no-active')
            submit.removeAttribute('disabled')
        } else {
            submit.classList.add('no-active')
            submit.setAttribute('disabled', '')
        }
    }

    //Создаем обработчик для открытия чата. Открываем чат и кнопку закрыть. Добавляем объект вебсокет в класс вебсокет и прописываем методы
    openChatButton.addEventListener('click', ev => {
        ev.preventDefault()
        hiddenShowBlocks([chatContainer, closeChatButton, openChatButton])
        websocket = new WebSocket(webURL)
        websocket.onopen = function (ev) {
            messages.innerHTML += `<span class="response-message">Создан чат</span>`
        }
        websocket.onmessage = function (ev) {
            try {
                JSON.parse(ev.data);
            } catch (e) {
                return innerClientMessage(ev.data, messages, 'server');//Если джейсон не парсится, отправляем сообщение
            }
            return console.log ('Данные геопозиции отправлены на сервер') // Если парсится не отправляем
        }
        websocket.onerror = function (ev) {
            messages.innerHTML += `<span class="response-message">Ошибка соединения. Повторите попытку позже</span>`
        }
    })

    //Создаем функцию для скрытия/показа блоков при клике по кнопкам отрыть закрыть
    function hiddenShowBlocks(arrBlocks) {
        arrBlocks.forEach(element => {
            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden')
            } else element.classList.add('hidden')
        })
    }

    // Создаем обработчик на отправку формы, в котором передаем велью инпута в функцию вывода сообщения и в вебсокет
    chatForm.addEventListener('submit', ev => {
        ev.preventDefault()
        let messageClient = chatForm.querySelector('.chat-input').value
        if (messageClient != '') {
            innerClientMessage(messageClient, messages, 'client')
            websocket.send(messageClient)
            chatForm.reset()
        } else messages.innerHTML += `<span class="response-message">Вы отправили пустое сообщение, повторите попытку</span>`
        chatForm.querySelector('.chat-submit').classList.add('no-active')
        chatForm.querySelector('.chat-submit').setAttribute('disabled', '')
    })

    // Создаем функцию вывода сообщений для клиента и сервера
    function innerClientMessage(message, container, sender) {
        if (sender === 'client') {
            container.innerHTML += `<div class="message-container client">
            <span class="sender">Клиент</span>
            <div class="message">
                <span>${message}</span>
            </div>
        </div>`
        } else if (sender === 'server') {
            container.innerHTML += `<div class="message-container server">
            <div class="message">
                <span>${message}</span>
            </div>
            <span class="sender">Сервер</span>
        </div>`
        } else console.log('Ошибка функции вывода сообщения')
        scrollMessages(messages)
    }

    // Создаем функцию скролла до последнего сообщения
    function scrollMessages(messageContainer) {
        messageContainer.scrollTop = messageContainer.scrollHeight
    }

    // Создаем функцию для закрытия вебсокета при клике на кнопку
    function closeChat() {
        websocket.close()
        websocket = null
    }

    // Создаем обработчик на кнопку закрытия
    closeChatButton.addEventListener('click', ev => {
        ev.preventDefault()
        closeChat()
        hiddenShowBlocks([chatContainer, closeChatButton, openChatButton])
    })
    //Вешаем обработчик на кнопку геолокации. При успехе вызываем функцию иннергеолокешен с координатами. Отдельно вешаем коллбэк на ошибку доступа и отсутствие поддержки функционала браузером
    geoSubmit.addEventListener('click', ev => {
        ev.preventDefault()
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const {coords} = position
                innerGeolocation(coords.latitude, coords.longitude)
            }, (err) => {
                if (err.PERMISSION_DENIED) {
                    messages.innerHTML += `<span class="response-message">Геолокацию не удалось опеределить. Разрешите определение геолокации в настройках браузера</span>`
                }
            })
        } else innerGeolocation()
    })
    // Создаем функцию иннерГеолокешен в которой выводим кнопку, которая при нажатии ведет на карту
    function innerGeolocation(latitude = '', longitude = '') {
        if (latitude != '' && longitude != '') {
            let dataWebsocket = JSON.stringify({'latitude': latitude, 'longitude': longitude}) // Передаем данные на сервер в формате джейсон, чтобы такой тип данных не отправлялся в чат (Мне видится это костылем)
            websocket.send(dataWebsocket)
            messages.innerHTML += `<div class="message-container server">
                               <a href="https://www.openstreetmap.org/#map=8/${latitude}/${longitude}" target="_blank">
                               <button class="chat-submit open-geolocation">Ваша геолокация</button>
                               </a>
                               </div>`
        } else messages.innerHTML += `<span class="response-message">Ваш браузер не поддерживает данную функцию</span>`
    }
}

document.addEventListener('DOMContentLoaded', createChat)

