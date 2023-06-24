window.addEventListener('load', function () {
  const buttons = document.querySelectorAll('.button');
  for (let i = 0; i < buttons.length; i++) {
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

function scrowDownSmooth() {
  let i = 0;
  let intervalId = setInterval(function () {
    let spacing = 1;
    if (i >= 30 && i < 50) spacing = 3;
    if (i > 50 && i < 100) spacing = 2;
    window.scrollBy(0, spacing);
    i++;
    if (i++ >= 130) {
      clearInterval(intervalId);
    }
  }, 1);
}

function scrowUpSmooth() {
  let i = 0;
  let intervalId = setInterval(function () {
    let spacing = -1;
    if (i >= 30 && i < 50) spacing = -3;
    if (i > 50 && i < 100) spacing = -2;
    window.scrollBy(0, spacing);
    i++;
    if (i++ >= 130) {
      clearInterval(intervalId);
    }
  }, 1);
}

function ScrollUp() {
  //window.scrollBy(0, -100, 4);
  scrowUpSmooth();
}

function ScrollDown() {
  //window.scrollBy(0, 100, 4);
  scrowDownSmooth();
}
