(async () => {
  const response = await (await fetch('https://www.worldtimeserver.com/current_time_in_RU-SPE.aspx?city=Saint_Petersburg')).text();
  const regex = /\d{2}:\d{2}:\d{2}/;
  
  // Найти время
  const timeMatch = response.match(regex);
  if (timeMatch) {
    const time = timeMatch[0];
    
    // Разделяем текст на строки
    const lines = response.split('\n');
    
    // Ищем строку с найденным временем
    const lineWithTime = lines.find(line => line.includes(time));
    
    console.log('Найденное время:', time);
    console.log('Строка с временем:', lineWithTime || 'Строка не найдена');
  } else {
    console.log('Время не найдено в ответе.');
  }
})();
