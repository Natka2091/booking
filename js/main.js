
const types = ['palace','flat','house','bungalow'];
const titles = ['Nice Apartment','Central Location','Comfortable Living','Quiet Area', 'Modern Interior', 'Great View','Convenient Stay','Elegant Design','Bright Rooms','Perfect Choice'];
const minX = 35.65000;
const maxX = 35.70000;
const minY = 139.70000;
const maxY = 139.80000;
const checkinCheckout = ['12:00', '13:00', '14:00','15:00','16:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const descriptions = [
  'Cozy apartment in a quiet neighborhood.',
  'Modern home with all necessary amenities.',
  'Perfect place for a comfortable stay.',
  'Bright and spacious accommodation.',
  'Stylish interior and convenient location.',
  'Ideal choice for business or leisure.',
  'Peaceful place near the city center.',
  'Comfortable rooms with modern design.',
  'Well-equipped property for guests.',
  'Charming place with a great atmosphere.'
];
const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];


function getAvatarUrl(number){
    return `img/avatars/user0${number}.png`
}

function getRandomElementFromArray(array){
    const randomNumber = getRandomNumber(array.length)
    
 return array[randomNumber]
}

function getRandomCoordinates(){
    const x = Math.random() * (maxX - minX + 1) + minX;
    const y = Math.random() * (maxY - minY + 1) + minY;
    return {
        x: Number(x.toFixed(5)),
        y: Number(y.toFixed(5))
    };
}

function getRandomNumber(max){
   return  Math.floor(Math.random() * max); 
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomUniqueItems(array) {
    const count = getRandomInt(1, array.length);
    const shuffledArray = [...array].sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
}

function getRandomCheckinCheckout() {
    const checkoutIndex = getRandomInt(0, checkinCheckout.length - 2);
    const checkout = checkinCheckout[checkoutIndex];
    const checkin = checkinCheckout[
        getRandomInt(checkoutIndex + 1, checkinCheckout.length - 1)
    ];
    return {
        checkin,
        checkout
    };
}

function getPhotoUrl(number) {

}

const offers = new Array(10).fill(null).map((el,index)=>{
    const time = getRandomCheckinCheckout();
    return {
        author: {
        avatar: getAvatarUrl(index+1)
        },
        offer: {
            title: getRandomElementFromArray(titles),
            address: getRandomCoordinates(),
            price: getRandomInt(800, 20000),
            type: getRandomElementFromArray(types),
            rooms: getRandomInt(1, 4),
            guests: getRandomInt(1, 4),
            checkin: time.checkin,
            checkout: time.checkout,
            features: getRandomUniqueItems(features),
            description: getRandomElementFromArray(descriptions),
            photos: getRandomUniqueItems(photos),
        },
    }
    
})
console.log(offers)
