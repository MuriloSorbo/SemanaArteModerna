window.addEventListener('load', function () {
  const buttons = document.querySelectorAll('.button');

  buttons[0].addEventListener('click', (e) => {
    e.preventDefault;
    buttons[0].classList.add('animate');
    setTimeout(() => {
      buttons[0].classList.remove('animate');
    }, 600);
  });

  buttons[1].addEventListener('click', (e) => {
    e.preventDefault;
    buttons[1].classList.add('animate');
    setTimeout(() => {
      buttons[1].classList.remove('animate');
    }, 600);
  });
});

function GoBack() {
  setTimeout(function () {
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    let partes = dir.split('/');
    partes.pop();
    window.location.href = partes.join('/') + '/ArtistasPlasticos/index.html';
  }, 300);
}
