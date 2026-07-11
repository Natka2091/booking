
const adForm = document.querySelector('.ad-form');

function disabledForm(){
    
    adForm.classList.add('ad-form--disabled');

    const adFormFieldsets = adForm.querySelectorAll('fieldset');

    adFormFieldsets.forEach((fieldset) => {
        fieldset.disabled = true;
    });
}

function enableForm() {
    adForm.classList.remove('ad-form--disabled');

    const fieldsets = adForm.querySelectorAll('fieldset');

    fieldsets.forEach((fieldset) => {
        fieldset.disabled = false;
    });
}

disabledForm();
enableForm();
export { enableForm };