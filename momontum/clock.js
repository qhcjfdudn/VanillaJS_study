const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".js-title");

function getTime() {
  const date = new Date();
  const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
};

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();