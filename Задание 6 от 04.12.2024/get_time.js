(async () => {
  const response = await (await fetch('https://www.worldtimeserver.com/current_time_in_RU-SPE.aspx?city=Saint_Petersburg')).text();
  const regex = /\d{2}:\d{2}:\d{2}/;
  const time = response.match(regex)[0].replace(/:/g, '');
  console.log(time);
})();
