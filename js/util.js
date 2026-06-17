function getRandomNumber(max){
   return  Math.floor(Math.random() * max); 
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElementFromArray(array){
    const randomNumber = getRandomNumber(array.length)
    
 return array[randomNumber]
}

export {
  getRandomNumber,
  getRandomInt,
  getRandomElementFromArray
};