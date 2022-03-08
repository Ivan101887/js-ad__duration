const elemMain = document.querySelector('#Main');
console.log('the time now is ',Date())
const isShow = check();
console.log(isShow);
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
  console.log('last closed on: ',closedTime)
  if (closedTime) {
    let now = Date.now();
    const expire = 1000 * 60 * 60 * 24
    console.log('最大時限',expire)
    console.log('距離上次關閉廣告:',(now - closedTime) > expire);
    if ((now - closedTime) > expire) {
      console.log('removed')
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