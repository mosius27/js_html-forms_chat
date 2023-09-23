document.addEventListener('DOMContentLoaded', function () {
    const chatWidget = document.querySelector('.chat-widget');
    const messagesContainer = document.querySelector('.chat-widget__messages');
    const inputField = document.querySelector('.chat-widget__input');
  
    // Открываем окно чата при клике на красный бейдж
    chatWidget.addEventListener('click', function () {
      chatWidget.classList.add('chat-widget_active');
    });
  
    // Функция для генерации случайного ответа робота
    function generateRobotResponse() {
      const responses = [
        'Привет, как я могу вам помочь?',
        'Чем могу помочь?',
        'Какой у вас вопрос?',
        'Как поживаете?',
      ];
      const randomIndex = Math.floor(Math.random() * responses.length);
      return responses[randomIndex];
    }
  
    // Функция для добавления сообщения в чат
    function addMessage(text, isClient) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message');
      if (isClient) {
        messageDiv.classList.add('message_client');
      }
      const messageTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      messageDiv.innerHTML = `
        <div class="message__time">${messageTime}</div>
        <div class="message__text">${text}</div>
      `;
      messagesContainer.appendChild(messageDiv);
    }
  
    // Обработчик нажатия клавиши Enter в поле ввода
    inputField.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' && inputField.value.trim() !== '') {
        const userMessage = inputField.value;
        addMessage(userMessage, true); // Добавляем сообщение пользователя в чат
        inputField.value = ''; // Очищаем поле ввода
        const robotResponse = generateRobotResponse();
        setTimeout(function () {
          addMessage(robotResponse, false); // Добавляем ответ робота через некоторое время
        }, 1000); // Задержка в миллисекундах перед ответом робота
      }
    });
  });
  