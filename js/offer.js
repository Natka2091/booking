//import { features } from "./constants";
import { features, housTypes } from "./constants.js";
import { offers } from "./data.js";

function createCard(offerData){
const template = document.querySelector('#card').content;
const clone = template.querySelector('.popup').cloneNode(true);
const mapCanvas = document.querySelector('#map-canvas');

const avatarEl = clone.querySelector('.popup__avatar')
avatarEl.src = offerData.author.avatar;
const titleEl = clone.querySelector('.popup__title')
titleEl.textContent = offerData.offer.title;
const addresEl = clone.querySelector('.popup__text--address')
addresEl.textContent = offerData.offer.address;
const priceEl = clone.querySelector('.popup__text--price')
priceEl.textContent = `${offerData.offer.price} ₽/ночь`;
const typeEl = clone.querySelector('.popup__type')

typeEl.textContent = housTypes[offerData.offer.type];

const roomsGuestsEl = clone.querySelector('.popup__text--capacity')
roomsGuestsEl.textContent = `${offerData.offer.rooms} комнаты для ${offerData.offer.guests} гостей`

const checkinCheckoutEl = clone.querySelector('.popup__text--time')
checkinCheckoutEl.textContent = `Заезд после ${offerData.offer.checkin}, выезд до ${offerData.offer.checkout}`;

const descriptionEl = clone.querySelector('.popup__description')
descriptionEl.textContent = offerData.offer.description;

const featuresEl = clone.querySelector('.popup__features')
if(offerData.offer.features.length) {
    createFeatures(clone, offerData.offer.features)
} else {
    featuresEl.remove() 
}
const photosEl = clone.querySelector('.popup__photos')
if(offerData.offer.photos.length) {
    createPhotos(clone, offerData.offer.photos);
} else {
    photosEl.remove();
}

mapCanvas.append(clone);
return clone;
}

function createFeatures(clone, featuresList){
    const featuresEl = clone.querySelector('.popup__features')
    featuresEl.innerHTML =''
   
    featuresList.forEach((e) => {
        const liElement = document.createElement('li')
        liElement.classList.add('popup__feature')
        liElement.classList.add(`popup__feature--${e}`)
        featuresEl.append(liElement)
    })
}

function createPhotos(clone, photosList) {
    const photosEl = clone.querySelector('.popup__photos')
    photosEl.innerHTML ='';

    photosList.forEach((photo) => {
        const imgElement = document.createElement('img');
        imgElement.classList.add('popup__photo');
        imgElement.src = photo;
        photosEl.append(imgElement);
    })
}

export function createOffers(offers){
offers.forEach((offerData)=>{
   createCard(offerData)
})
}
export{createCard};


