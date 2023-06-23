window.addEventListener('load', function () {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault;
      button.classList.add('animate');
      setTimeout(() => {
        button.classList.remove('animate');
      }, 600);
    });
  });
});

function GoBack() {
  setTimeout(function () {
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    let partes = dir.split('/');
    partes.pop();
    window.location.href = partes.join('/') + '/MainPage/index.html';
  }, 300);
}

function Navigate(dst) {
  setTimeout(function () {
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    let partes = dir.split('/');
    partes.pop();
    window.location.href = partes.join('/') + '/Sobre/' + dst + '.html';
  }, 300);
}
