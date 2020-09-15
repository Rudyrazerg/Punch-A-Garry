const myGross = document.querySelectorAll('.myGross');
const garry = document.querySelectorAll('.garry');
const papanSkor = document.querySelector('.score-board');
const pop = document.querySelector('#pop');

let myGrossSebelumnya;
let selesai;
let skor;

function randomTanah(myGross) {
  const t = Math.floor(Math.random() * myGross.length);
  const tRandom = myGross[t];
  if (tRandom == myGrossSebelumnya) {
    randomTanah(myGross);
  }
  myGrossSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
  const tRandom = randomTanah(myGross);
  const wRandom = randomWaktu(300, 1000);
  tRandom.classList.add('muncul');

  setTimeout(() => {
    tRandom.classList.remove('muncul');
    if (!selesai) {
      munculkanTikus();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  munculkanTikus();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukul() {
  skor++;
  this.parentNode.classList.remove('muncul');
  pop.play();
  papanSkor.textContent = skor;
}

garry.forEach(t => {
  t.addEventListener('click', pukul);
});