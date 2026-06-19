import { offers } from "./data";

function createCard(offerData){
const template = document.querySelector('#card').content;
const clone = template.querySelector('.popup').cloneNode(true);
const mapCanvas = document.querySelector('#map-canvas')
console.log(mapCanvas);

const avatarEl = clone.querySelector('.popup__avatar')
avatarEl.src = offerData.author.avatar;
const titleEl = clone.querySelector('.popup__title')
titleEl.textContent = offerData.offer.title;
const addresEl = clone.querySelector('.popup__text--address')
addresEl.textContent = offerData.offer.address;
const priceEl = clone.querySelector('.popup__text--price')
priceEl.textContent = `${offerData.offer.price} ₽/ночь`;
const typeEl = clone.querySelector('.popup__type')
typeEl.textContent = offerData.offer.type;
const roomsGuestsEl = clone.querySelector('.popup__text--capacity')
roomsGuestsEl.textContent = `${offerData.offer.rooms} комнаты для ${offerData.offer.guests} гостей`
const checkinCheckoutEl = clone.querySelector('.popup__text--time')
checkinCheckoutEl.textContent = `Заезд после ${offerData.offer.checkin}, выезд до ${offerData.offer.checkout}`;

const featuresEl = clone.querySelector('.popup__features')
const featureList = clone.querySelectorAll('.popup__feature')
const textArray = Array.from(featureList).map(item => item.textContent)

const descriptionEl = clone.querySelector('.popup__description')
descriptionEl.textContent = offerData.offer.description;
const photosEl = clone.querySelector('.popup__photos')

mapCanvas.append(clone);

}


offers.forEach((offer)=>{

   createCard(offer)
})
