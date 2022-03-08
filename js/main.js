const elemMain = document.querySelector('#Main');
const isShow = check();
if (isShow) { setTimeout(showAd, 500); }
function showAd() {
  elemMain.innerHTML += `
  <div class="ad" id="Ad">
  <a href="javascript:;" class="ad__link">
  <img class="ad__img" src="./images/ee6e7376381d5d0791e9cf1f5a802773.jpg" alt="ad" width="1000" height="500">
  </a>
  <p class="ad__close">X</p>
  </div>
  `
  setEvent()
}

function setEvent() {
  elemMain.querySelector('#Ad').addEventListener('click', atClick, true)
}

function check() {
  let closedTime = parseInt(localStorage.getItem('time'));
  if (closedTime) {
    let now = Date.now();
    const expire = 1000 * 60 * 60 * 24
    if ((now - closedTime) > expire) {
      localStorage.removeItem('time');
      return true;
    }
    return false;
  } 
  return true
  
}

function recordTime() {
  let now = Date.now();
  localStorage.setItem('time', now);
}

function atClick(e) {
  const self = e.target;
  if (self.nodeName !== 'P') return;
  elemMain.querySelector('#Ad').remove();
  recordTime();
}