const elemMain = document.querySelector('#Main');
const cookieStr = document.cookie;
if (!cookieStr.includes('isClosed')) { setTimeout(showAd, 500); }
function showAd() {
  elemMain.innerHTML += `
  <div class="ad" id="Ad">
  <a href="javascript:;" class="ad__link">
  <img class="ad__img" src="./images/ee6e7376381d5d0791e9cf1f5a802773.jpg" alt="ad" width="1000" height="500">
  </a>
  <button type="button" class="ad__close">X</button>
  </div>
  `
  setEvent();
}
function setEvent() {
  elemMain.querySelector('#Ad').addEventListener('click', atClick);
}
function recordTime() {
  const now = new Date();
  const exp = new Date(now.setDate(now.getDate() + 1));
  document.cookie = `isClosed = true; expires = ${exp.toUTCString()}`;
}
function atClick(e) {
  const self = e.target;
  if (self.nodeName !== 'BUTTON') return;
  elemMain.querySelector('#Ad').remove();
  recordTime();
}