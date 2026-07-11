import {
    getRandomInt,
    getRandomElementFromArray
} from './util.js';

import {
    types,
    titles,
    coord,
    checkinCheckout,
    features,
    descriptions,
    photos
} from './constants.js';

function getAvatarUrl(){
    const number = getRandomInt(1, 8);
    return `img/avatars/user0${number}.png`
}

function getRandomCoordinates(){
    const x = Math.random() * (coord.maxX - coord.minX) + coord.minX;
    const y = Math.random() * (coord.maxY - coord.minY) + coord.minY;
    return {
        x: Number(x.toFixed(5)),
        y: Number(y.toFixed(5))
    };
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
const offers = new Array(10).fill(null).map(()=> {
    const time = getRandomCheckinCheckout();
    const coordinates = getRandomCoordinates();
    return {
        author: {
        avatar: getAvatarUrl()
        },
        offer: {
            title: getRandomElementFromArray(titles),
            address: `${coordinates.x}, ${coordinates.y}`,
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
        location: coordinates
    }
    
})
export { offers };