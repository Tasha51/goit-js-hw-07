import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkup = document.querySelector('.gallery');


galleryMarkup.insertAdjacentHTML('beforeend', createGalleryItemMarkup(galleryItems));

galleryMarkup.addEventListener('click', onGalleryClick);


console.log(createGalleryItemMarkup(galleryItems));

function createGalleryItemMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    }).join('');

};


function onGalleryClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    };
    createBasicLightbox(evt); 
};

function createBasicLightbox(evt) {
    const instance = basicLightbox.create(`
    <img src=${evt.target.dataset.source}>
`);

    instance.show();
 
    galleryMarkup.addEventListener('keydown', closeBasicLightboxByEscape);

    function closeBasicLightboxByEscape(e) {
   
    if (e.keyCode == 27) {
        console.log('close the window...');
        
        instance.close(); 
       document.removeEventListener('keydown', closeBasicLightboxByEscape);
    };
};
};



