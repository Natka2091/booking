const adForm = document.querySelector('.ad-form');

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

changeFormState('disabled');
changeFormState('active');
export { changeFormState };