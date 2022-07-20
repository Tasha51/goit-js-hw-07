import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryMarkup = document.querySelector('.gallery');

galleryMarkup.insertAdjacentHTML('beforeend', createGalleryItemMarkup(galleryItems));

function createGalleryItemMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
      <li>
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>
`;
    }).join('');

};

let gallery = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
     }); 

