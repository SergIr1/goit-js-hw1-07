const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

// ==============================Перший спосіб===================================

// const createGalleryCard = imegas => {

// const galleryItemEl = document.createElement('li');

// galleryItemEl.classList.add('js-gallery-item');

// const galleryImgEl = document.createElement('img');

//   galleryImgEl.src = imegas.url;

//   galleryImgEl.alt = imegas.alt;


// galleryItemEl.append(galleryImgEl);

  
// return galleryItemEl;
  
// }

// const galleryCardsArr = images.map(el => createGalleryCard(el));

// console.log(galleryCardsArr);

// document.querySelector('.gallery').append(...galleryCardsArr);

// ==============================Другий спосіб===================================

const createGalleryCards = elem => {
  return `<li class="js-gallery-item"><img src=${elem.url} alt=${elem.alt}></li>`;
}

// console.log(createGalleryCards(images));

document.querySelector('.gallery').innerHTML = images.map(img => createGalleryCards(img)).join('');

// ==============================Третій спосіб===================================

// const createGalleryCards = elem => {
//   return `<li class="js-gallery-item"><img src=${elem.url} alt=${elem.alt}></li>`;
// }

// // console.log(createGalleryCards(images));

// const galleryCardsTemplate = images.map(img => createGalleryCards(img)).join('');

// document.querySelector('.gallery').insertAdjacentHTML('afterbegin', galleryCardsTemplate);