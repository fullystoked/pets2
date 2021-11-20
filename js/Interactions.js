/**
 * mucking around
 */
export default class Interactions{


  


  onNavTabClick = (tabs, panels)=>{
    return (evt) => {
      tabs.forEach(el => {
        el.classList.remove('active');
      });
      panels.forEach(el => {
        el.classList.remove('active');
      });

      // turn on the right tab
      evt.target.classList.add('active');
      // display correct panel
      const panel = evt.target.dataset.panel;
      console.log(document.getElementsByClassName(panel)[0].classList);
      document.getElementsByClassName(panel)[0].classList.add('active'); 
    }
  };


  runInit = ()=>{
    const menuBtn = document.getElementById('nav-toggle');

    const menuBtnOpen = document.getElementById('nav-toggle-open');
    const menuBtnClose = document.getElementById('nav-toggle-close');

    const mainMenu = document.getElementById('main-menu');
    const mainLoginBtn = document.getElementById('mainLoginBtn');
    const userAccIcons = document.getElementsByClassName('userAcc');

    const breedGalleryBtn = document.querySelector('.breedImages');
    const bodyEl = document.getElementsByTagName('body')[0];
    const galleryOverlay = document.getElementById('breedGalleryOverlay');
    const closeGallery = document.getElementById('closeBreedGallery');
    const breedGallery = document.getElementById('breedGallery');

    const tabs = document.querySelectorAll('.navtab');
    const panels = document.querySelectorAll('.tab-content');

   
    if(menuBtn){
      menuBtn.addEventListener('click', (evt)=>{
        // main menu
        if(mainMenu.classList.contains('-translate-x-full')){
          // display main menu
          mainMenu.classList.remove('-translate-x-full');
        } else {
          // hide drop down menu
          mainMenu.classList.add('-translate-x-full');
        } 

        // change to open / close menu
        menuBtn.childNodes.forEach(child => {
          if(child.classList){
            if(child.classList.contains('hidden')){
              child.classList.remove('hidden');
            } else {
              child.classList.add('hidden');
            }
          }
        });
      });
    }

    if(menuBtnOpen){
      // new open close
      menuBtnOpen.addEventListener('click', (evt)=>{
        // display main menu
        mainMenu.classList.remove('-translate-x-full');
      });
    }
    
    if(menuBtnClose){
      // new open close
      menuBtnClose.addEventListener('click', (evt)=>{
        // hide main menu
        mainMenu.classList.add('-translate-x-full');
      });
    }
    

    /* breedGalleryBtn.addEventListener('click', (evt) => {
      galleryOverlay.classList.remove('hidden');
    });

    closeGallery.addEventListener('click', (evt)=>{
      galleryOverlay.classList.add('hidden');
      
    }); */
    
    
  
    tabs.forEach(el => {
      el.addEventListener('click', this.onNavTabClick(tabs, panels));
    });


    const showItems = document.querySelectorAll('.showItems');
    showItems.forEach(el => {
      el.addEventListener('click', (e)=>{
        const items = document.querySelectorAll('.'+e.target.dataset.items);
        if(e.target.innerText.indexOf('See') >= 0){
          e.target.innerText = 'Hide';
          items.forEach(el =>{
            el.classList.remove('sr-only');
          });
        } else {
          e.target.innerText = 'See all';
          items.forEach(el =>{
            el.classList.add('sr-only');
          });
        }
      });
    });
  }

  


}