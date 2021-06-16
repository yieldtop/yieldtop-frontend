/* Табы Dashboard, Wallet, Rates
==================================*/
const tabTrigger = document.querySelectorAll('.js-tab-trigger');
const tabContent = document.querySelectorAll('.js-tab-content');

for (let i = 0; i < tabTrigger.length; i++) {
  tabTrigger[i].onclick = function () {
    for (let k = 0; k < tabTrigger.length; k++) {
      tabTrigger[k].classList.remove('active');
    }
    this.classList.add('active');

    let tabTriggerAttr = this.getAttribute('data-tab');

    for (let j = 0; j < tabContent.length; j++) {
      tabContent[j].classList.remove('active');
      let tabContentAttr = tabContent[j].getAttribute('data-tab');
      if (tabContentAttr === tabTriggerAttr) {
        tabContent[j].classList.add('active');
      }
    }
  }
}

/* Бургер меню
==================================*/
const burger = document.querySelector('.header__burger');
const burgerOverlay = document.querySelector('.burger-overlay');
const burgerMenu = document.querySelector('.header__burger-menu');
const burgerSvg = document.querySelector('.ham, .hamRotate, .ham4');

burger.onclick = function () {
  burger.classList.toggle('active');
  burgerOverlay.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  for (let i = 0; i < burgerSvg.length; i++) {
    burgerSvg[i].classList.toggle('active');
  }
}
burgerOverlay.onclick = function () {
  burger.classList.remove('active');
  burgerOverlay.classList.remove('active');
  burgerMenu.classList.remove('active');
  burgerSvg.classList.remove('active');
}

/* Смена темы оформления
==================================*/
document.querySelector(".themetoggle").addEventListener("click", (event) => {
  event.preventDefault();
  if (localStorage.getItem("theme") === "light") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "light");
  }
  addLightClassToBody();
});

function addLightClassToBody() {
  try {
    if (localStorage.getItem("theme") === "light") {
      document.querySelector("body").classList.add("light");
      document.querySelector(".themetoggle span").textContent = "brightness_5";
    } else {
      document.querySelector("body").classList.remove("light");
      document.querySelector(".themetoggle span").textContent = "brightness_4";
    }
  } catch (err) {
  }
}

addLightClassToBody();

/* Модальное окно Connect Wallet
==================================*/
const btnConnect = document.getElementById("btn-connect"),
  modal = document.getElementById("wrapper-modal"),
  btnClose = document.getElementById("btn-close"),
  overlay = document.getElementById("overlay");

btnConnect.addEventListener("click", (addClass = () => {
    modal.classList.add("active");
  })
);

const delClass = () => {
  modal.classList.remove("active");
};

btnClose.addEventListener("click", delClass);
overlay.addEventListener("click", delClass);
