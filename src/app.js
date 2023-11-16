/**создали объект в котором ключ это ник, а значение это успеваемость.**/
const scores = {
  Anna: 10,
  Olga: 1,
  Ivan: 5,
  }
/**функция getScore принимает на вход объект и возвращает в ответ сумму всех баллов**/
function getScore(scores){
  let result = 0;  
  for (let key in scores) {
    result = result + scores[key]
  }
  return result;
} 

console.log("Cумма всех баллов = " + getScore(scores));
