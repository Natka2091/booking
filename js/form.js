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

const capacityByRooms = {
    '1': ['1'],
    '2': ['1', '2'],
    '3': ['1', '2', '3'],
    '100': ['0']
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

   if (capacityByRooms[rooms].includes(guests)) {
        capacityField.setCustomValidity('');
    } else {
        capacityField.setCustomValidity(
            'Кількість гостей не відповідає кількості кімнат.'
        );
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