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
  buttons[2].addEventListener('click', (e) => {
    e.preventDefault;
    buttons[2].classList.add('animate');
    setTimeout(() => {
      buttons[2].classList.remove('animate');
    }, 600);
  });
  buttons[3].addEventListener('click', (e) => {
    e.preventDefault;
    buttons[3].classList.add('animate');
    setTimeout(() => {
      buttons[3].classList.remove('animate');
    }, 600);
  });
});

function GoBack(code) {
  setTimeout(function () {
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    let partes = dir.split('/');
    partes.pop();
    if (code == 0) {
      window.location.href = partes.join('/') + '/ArtistasPlasticos/index.html';
    } else if (code == 1) {
      window.location.href = partes.join('/') + '/Escritores/index.html';
    } else if (code == 2) {
      window.location.href = partes.join('/') + '/Recomendacoes/index.html';
    }
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
