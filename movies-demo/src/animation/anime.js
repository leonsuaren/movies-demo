import anime from 'animejs';

export const movieAnimation = { 
    targets: '.movieAnime',
    translateY: [ 400, 0 ],
    delay: anime.stagger(200, { grid: [3, 10], from: 'first' }),
};

export const actorsAnimation = {
  targets: '.tableAnimation',
  opacity: [0, 1],
  delay: 200,
  easing: 'easeInQuad'
}

export const carouselAnimation = {
  targets: '.carouselAnimation',
  opacity: [0, 1],
  delay: 200,
  easing: 'easeInQuad'
};

export const navbarAnimation = {
  targets: '.navbarAnimation',
  translateY: [ -100, 0 ]
};