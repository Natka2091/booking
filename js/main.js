
const types = ['palace','flat','house','bungalow']
const minX = 35.65000;
const maxX = 35.70000;
const minY = 139.70000;
const maxY = 139.80000;
const x = Math.random() * (maxX - minX + 1) + minX;
const y = Math.random() * (maxY - minY + 1) + minY;

function getAvatarUrl(number){
    return `img/avatars/user0${number}.png`
}

function getRandomCoordinates(){
    return {
        x: Number(x.toFixed(5)),
        y: Number(y.toFixed(5))
    };
}

function getRandomNumber(max){
   return  Math.floor(Math.random() * max); 
}

function getRandomElementFromArray(array){
    const randomNumber =getRandomNumber(array.length)
    
 return array[randomNumber]
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const offers = new Array(10).fill(null).map((el,index)=>{
    return {
        author: {
        avatar: getAvatarUrl(index+1)
        },
        offer: {
            title:  'Nice Apartment',
            address: getRandomCoordinates(),
            rooms: getRandomInt(1, 4),
            type: getRandomElementFromArray(types),
        },
    }
    
})
console.log(offers)
const advert = [
{
    autor: {avatar: 'img/avatars/user03.png'},
    offer: {
        title: 'Apartment in the city center',
        address: '35.67891, 139.75432',
        price: 25000,
        type: 'flat',
        rooms: 3,
        guests: 5,
        checkin: '14:00',
        checkout: '12:00',
        features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
        description: 'Bright apartment near the metro',
        photos: 'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    },
    location: {
      x: 35.67891,
      y: 139.75432
    }
},
{},
{},
{},
{},
{},
{},
{},
{},
{},
];