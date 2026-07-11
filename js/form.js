const typeField = document.querySelector('#type');
const priceField = document.querySelector('#price');
const checkinField = document.querySelector('#timein');
const checkoutField = document.querySelector('#timeout');

const minPriceForType = {
    bungalow: 0,
    flat: 1000,
    house: 5000,
    palace: 10000
}

function updatePrice() {
    const minPrice = minPriceForType[typeField.value];
    priceField.value = "";
    priceField.min = minPrice;
    priceField.placeholder = minPrice;
}

function syncCheckinTime() {
    checkoutField.value = checkinField.value;
}

function syncCheckoutTime() {
    checkinField.value = checkoutField.value;
}

typeField.addEventListener('change', updatePrice);

checkinField.addEventListener('change', syncCheckinTime);

checkoutField.addEventListener('change', syncCheckoutTime);


updatePrice();