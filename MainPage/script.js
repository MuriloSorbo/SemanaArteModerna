window.addEventListener('load', function () {
  const button = document.querySelectorAll('.button');

  button[0].addEventListener('click', (e) => {
    e.preventDefault;
    button[0].classList.add('animate');
    setTimeout(() => {
      button[0].classList.remove('animate');
    }, 600);
  });

  button[1].addEventListener('click', (e) => {
    e.preventDefault;
    button[1].classList.add('animate');
    setTimeout(() => {
      button[1].classList.remove('animate');
    }, 600);
  });

  button[2].addEventListener('click', (e) => {
    e.preventDefault;
    button[2].classList.add('animate');
    setTimeout(() => {
      button[2].classList.remove('animate');
    }, 600);
  });
});

function Navigate(dst) {
  setTimeout(function () {
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    let partes = dir.split('/');
    partes.pop();
    window.location.href = partes.join('/') + '/' + dst + '/index.html';
  }, 300);
}
