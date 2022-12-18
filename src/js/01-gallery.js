// Add imports above this line
import SimpleLightbox from 'simpleLightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const murkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}"  alt="${description}"/>
    </a>
`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', murkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
