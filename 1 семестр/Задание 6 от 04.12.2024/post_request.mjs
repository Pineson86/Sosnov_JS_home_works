(async () => {
  const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZyDJ_68Mj7io5vtjyNqul7ceNE1t5Z5KkkN7foqxbIcUsbg/formResponse';
  
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded', // Указываем тип данных
  };

  const body = 'entry.364005965=Sosnov42814'; // Исправлено тело запроса

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body,
    });

    const text = await response.text();
    console.log('Ответ сервера:', text);
  } catch (error) {
    console.error('Ошибка запроса:', error);
  }
})();
