const body = document.querySelector('body');

body.addEventListener('click', function() {
  const noice = new Audio('noice.wav');
  noice.play();
});

