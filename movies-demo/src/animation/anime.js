import anime from 'animejs';

export const movieAnimation = { 
    targets: '.movieAnime',
    translateY: [ 400, 0 ],
    delay: anime.stagger(200, { grid: [3, 10], from: 'first' }),
}