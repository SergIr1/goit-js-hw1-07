function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
console.log(inputEl);

const btnCreateEL = document.querySelector('button[data-create]');
console.log(btnCreateEL);

const btnDestroyEL = document.querySelector('button[data-destroy]');
console.log(btnDestroyEL);

const boxEl = document.querySelector('#boxes');

// boxEl.width = 30;
// boxEl.height = 30;
// boxEl.style.backgroundColor = getRandomHexColor();


const createBoxes = amount => {
  const box = [];
  let size = 30;

  for (let i = 0; i < amount; i++){
    const div = document.createElement('div');
    
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.marginRight = `44px`;
    boxEl.style.display = 'flex';
    boxEl.style.flexWrap = 'wrap';
    boxEl.style.alignContent = 'flex-start';
    boxEl.style.padding = '32px';


    size += 10;

    box.push(div);
  }
  boxEl.append(...box);
}
 

const onClearbox = () => {
  boxEl.innerHTML = "";
  inputEl.value = "";
}




  btnCreateEL.addEventListener('click', () => {
    const amount = Number(inputEl.value);

    if (amount >= inputEl.min && amount <= inputEl.max) {
      onClearbox();
      createBoxes(amount);
    }
  })

btnDestroyEL.addEventListener('click', onClearbox);