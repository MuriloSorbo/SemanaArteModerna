window.addEventListener('load', function () {
  const buttons = document.querySelectorAll('.button');
  for(let i = 0; i < buttons.length; i++)
  {
    buttons[i].addEventListener('click', (e) => {
      e.preventDefault;
      buttons[i].classList.add('animate');
      setTimeout(() => {
        buttons[i].classList.remove('animate');
      }, 600);
    });
  }
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
