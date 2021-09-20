/**
 * mucking around
 */
export default class Interactions{


  runMenu = ()=>{
    const menuBtn = document.getElementById('nav-toggle');
    const mainMenu = document.getElementById('main-menu');
    const mainLoginBtn = document.getElementById('mainLoginBtn');

    const breedGalleryBtn = document.querySelector('.breedImages');
    const bodyEl = document.getElementsByTagName('body')[0];
    const galleryOverlay = document.getElementById('breedGalleryOverlay');
    const closeGallery = document.getElementById('closeBreedGallery');
    const breedGallery = document.getElementById('breedGallery');

    menuBtn.addEventListener('click', (evt)=>{
      if(mainMenu.classList.contains('hidden')){
        // show drop down menu
        mainLoginBtn.classList.remove('md:flex-grow');
        mainLoginBtn.classList.add('md:flex-grow-1');

        mainMenu.classList.remove('hidden');
      } else {
        // hide drop down menu
        mainMenu.classList.add('hidden');
        mainLoginBtn.classList.remove('md:flex-grow-1');
        mainLoginBtn.classList.add('md:flex-grow');

      } 
      
    });

    /* breedGalleryBtn.addEventListener('click', (evt) => {
      galleryOverlay.classList.remove('hidden');
    });

    closeGallery.addEventListener('click', (evt)=>{
      galleryOverlay.classList.add('hidden');
      
    }); */
  }


}