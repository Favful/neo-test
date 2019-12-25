
document.querySelectorAll('.slider-container').forEach(e => {
  const slider = tns({
    container: e,
    fixedWidth: 85,
    preventScrollOnTouch: 'auto',
    controls: false,
    nav: false,
    loop: false,
  })
})

const large = tns({
  container: '.slider-container-large',
  fixedWidth: 250,
  preventScrollOnTouch: 'auto',
  controls: false,
  nav: false,
  loop: false,
})

const logolist = tns({
  container: '.slider-container-logolist',
  preventScrollOnTouch: 'auto',
  controls: false,
  loop: false,
  nav: false,
  autoWidth: true
})
