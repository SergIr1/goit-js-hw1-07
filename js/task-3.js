const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output')

const onInputText = () => {

    const inputValue = inputEl.value.trim();

    // ====================1 Запис=============================

        if (inputValue === '') {
        spanEl.textContent = "Anonymous";
    } else {
        spanEl.textContent = inputEl.value;
    }

    // ====================2 Запис=============================

    // inputValue === '' ? spanEl.textContent = "Anonymous" : spanEl.textContent = inputEl.value;

    // ====================3 Запис=============================

    // switch (inputValue) {
    //     case '': spanEl.textContent = "Anonymous";
    //         break;
    //     default: spanEl.textContent = inputEl.value;
    // }

}

inputEl.addEventListener('input', onInputText);