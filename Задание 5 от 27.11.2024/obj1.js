function task(x) {
  const pro = {};//создаем пустой прототип
  Object.defineProperty(pro, 'key1', {value: 2022, enumerable: false, configurable: true, writable: true});//создаем в прототипе свойство, которое будет несобственным неперечисляемым вв нашем объекте под именем key1
  Object.defineProperty(pro, 'key2', {value: 2023, enumerable: true, configurable: true, writable: true});//создаем в прототипе свойство, которое будет несобственным перечисляемым в нашем объекте под именем key2
  
  const newObj = Object.create(pro);
  newObj.login = '472514';
  Object.defineProperty(newObj, 'key3', {value: 2024, enumerable: false}); 
  return newObj;
};