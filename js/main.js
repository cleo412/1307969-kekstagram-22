'use strict'
/*https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random*/
let ERROR_IN_PARAMETERS = 'Ошибка';
let getRandNum = function (min, max) {
  if (min < 0 || max < 0 || max <= min) {
    return ERROR_IN_PARAMETERS;
  } return Math.floor(Math.random() * ((max - min) + min));
}

getRandNum(10, 20)

/*https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length*/
let getMaxlength = function (str, controlLenghtStr) {
  return str.lenght > controlLenghtStr;
}

getMaxlength(130, 140)
getMaxlength(150, 140)
