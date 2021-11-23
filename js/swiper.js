/**
 * use swiper mobile 
 */

// set it all up

// right side swipers
const swiper1 = new Swiper('.swiper1', {
  loop: false,
  slidesPerView: 'auto',
  loopedSlides: 6,
  

  // pagination
  pagination: {
    clickable: true,
    horizontalClass: '',
    type: 'bullets',
    el: '.pagination1'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  // And if we need scrollbar
  /* scrollbar: {
    el: '.swiper-scrollbar',
  }, */

  on: {
    'paginationRender': function(sw, el){
      // horizontalClass param not working ????
      // interferes with alignment - wth
      el.classList.remove('swiper-pagination-horizontal');
    }
  }
});

const swiper2 = new Swiper('.swiper2', {
  loop: false,
  slidesPerView: 'auto',
  loopedSlides: 6,
  

  // pagination
  pagination: {
    clickable: true,
    horizontalClass: '',
    type: 'bullets',
    el: '.pagination2'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  // And if we need scrollbar
  /* scrollbar: {
    el: '.swiper-scrollbar',
  }, */

  on: {
    'paginationRender': function(sw, el){
      // horizontalClass param not working ????
      // interferes with alignment - wth
      el.classList.remove('swiper-pagination-horizontal');
    }
  }
});

const swiper3 = new Swiper('.swiper3', {
  loop: false,
  slidesPerView: 'auto',
  loopedSlides: 6,
  

  // pagination
  pagination: {
    clickable: true,
    horizontalClass: '',
    type: 'bullets',
    el: '.pagination3'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  // And if we need scrollbar
  /* scrollbar: {
    el: '.swiper-scrollbar',
  }, */

  on: {
    'paginationRender': function(sw, el){
      // horizontalClass param not working ????
      // interferes with alignment - wth
      el.classList.remove('swiper-pagination-horizontal');
    }
  }
});

// bottom swiper
const swiper5 = new Swiper('.swiper5', {
  loop: false,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  //loopedSlides: 2,
  
  breakpoints: {
    640: {
      slidesPerGroup: 2
    },
    1024: {
      slidesPerGroup: 3
    },
    1200: {
      slidesPerGroup: 4
    }

  },
  // pagination
  pagination: {
    clickable: true,
    horizontalClass: '',
    type: 'bullets',
    el: '.pagination5'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  // And if we need scrollbar
  /* scrollbar: {
    el: '.swiper-scrollbar',
  }, */

  on: {
    'paginationRender': function(sw, el){
      // horizontalClass param not working ????
      // interferes with alignment - wth
      el.classList.remove('swiper-pagination-horizontal');
    }
  }
});

// gallery swiper

const swiper5G = new Swiper('.swiperg', {
  loop: false,
  slidesPerView: 'auto',
  loopedSlides: 5,
  

  // pagination
  /* pagination: {
    clickable: true,
    horizontalClass: '',
    type: 'bullets',
    el: '.paginationg'
  }, */

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  // And if we need scrollbar
  /* scrollbar: {
    el: '.swiper-scrollbar',
  }, */

  /* on: {
    'paginationRender': function(sw, el){
      // horizontalClass param not working ????
      // interferes with alignment - wth
      el.classList.remove('swiper-pagination-horizontal');
    }
  } */
});

// bottom dogs/cats swiper
const swiper6 = new Swiper('.swiper6', {
  loop: false,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  // loopedSlides: 6,
  
  breakpoints: {
    1200: {
      slidesPerGroup: 2
    }

  },

  // pagination
  pagination: {
    clickable: true,
    horizontalClass: '',
    type: 'bullets',
    el: '.pagination6'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  // And if we need scrollbar
  /* scrollbar: {
    el: '.swiper-scrollbar',
  }, */

  on: {
    'paginationRender': function(sw, el){
      // horizontalClass param not working ????
      // interferes with alignment - wth
      el.classList.remove('swiper-pagination-horizontal');
    }
  }
});

const swiper7 = new Swiper('.swiper7', {
  loop: false,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  // loopedSlides: 6,
  
  breakpoints: {
    1200: {
      slidesPerGroup: 2
    }

  },
  
  // pagination
  pagination: {
    clickable: true,
    horizontalClass: '',
    type: 'bullets',
    el: '.pagination7'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  // And if we need scrollbar
  /* scrollbar: {
    el: '.swiper-scrollbar',
  }, */

  on: {
    'paginationRender': function(sw, el){
      // horizontalClass param not working ????
      // interferes with alignment - wth
      el.classList.remove('swiper-pagination-horizontal');
    }
  }
});

const profileSwiper = new Swiper('.profileSwiper', {
  allowTouchMove: false,
  /* autoHeight: true */
});

            