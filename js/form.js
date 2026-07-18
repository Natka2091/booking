const typeField = document.querySelector('#type');
const priceField = document.querySelector('#price');
const checkinField = document.querySelector('#timein');
const checkoutField = document.querySelector('#timeout');
const adForm = document.querySelector('.ad-form');
const roomField = document.querySelector('#room_number');
const capacityField = document.querySelector('#capacity');

const minPriceForType = {
    bungalow: 0,
    flat: 1000,
    house: 5000,
    palace: 10000
};

function updatePrice() {
    const minPrice = minPriceForType[typeField.value];

    priceField.value = '';
    priceField.min = minPrice;
    priceField.placeholder = minPrice;
}

function syncCheckinTime() {
    checkoutField.value = checkinField.value;
}

function syncCheckoutTime() {
    checkinField.value = checkoutField.value;
}

function changeFormState(status) {
    const fieldsets = adForm.querySelectorAll('fieldset');

    if (status === 'active') {
        adForm.classList.remove('ad-form--disabled');

        fieldsets.forEach((fieldset) => {
            fieldset.disabled = false;
        });
    } else {
        adForm.classList.add('ad-form--disabled');

        fieldsets.forEach((fieldset) => {
            fieldset.disabled = true;
        });
    }
}

function validateCapacity() {
    const rooms = roomField.value;
    const guests = capacityField.value;

    capacityField.setCustomValidity('');

    switch (rooms) {
        case '1':
            if (guests !== '1') {
                capacityField.setCustomValidity(
                    'Для 1 кімнати доступний лише 1 гість.'
                );
            }
            break;
        case '2':
            if (guests !== '1' && guests !== '2') {
                capacityField.setCustomValidity(
                    'Для 2 кімнат доступно 1 або 2 гостя.'
                );
            }
            break;
        case '3':
            if (guests !== '1' && guests !== '2' && guests !== '3') {
                capacityField.setCustomValidity(
                    'Для 3 кімнат доступно від 1 до 3 гостей.'
                );
            }
            break;
        case '100':
            if (guests !== '0') {
                capacityField.setCustomValidity(
                    '100 кімнат не призначені для гостей.'
                );
            }
            break;
    }
}

typeField.addEventListener('change', updatePrice);
checkinField.addEventListener('change', syncCheckinTime);
checkoutField.addEventListener('change', syncCheckoutTime);
roomField.addEventListener('change', validateCapacity);
capacityField.addEventListener('change', validateCapacity);

updatePrice();
changeFormState();
validateCapacity();
export { changeFormState };