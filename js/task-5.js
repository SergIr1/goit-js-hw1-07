function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElemChangeColor = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color')

const onBtnClick = () => {
  const color = getRandomHexColor();

      bodyEl.style.backgroundColor = color;
      spanEl.textContent = color;
}

btnElemChangeColor.addEventListener('click', onBtnClick);
