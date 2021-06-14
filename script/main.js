/* Табы Dashboard, Wallet, Rates
==================================*/

const tabTrigger = document.querySelectorAll('.js-tab-trigger');
const tabContent = document.querySelectorAll('.js-tab-content');

for (let i = 0; i < tabTrigger.length; i++) {
  tabTrigger[i].onclick = function () {
    for (let k = 0; k <tabTrigger.length; k++){
      tabTrigger[k].classList.remove('active');
    }
    this.classList.add('active');

    let tabTriggerAttr = this.getAttribute('data-tab');

    for (let j =0; j < tabContent.length; j++) {
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
$(document).ready(function () {
  $(".header__burger").click(function (e) {
    $(".header__burger,.header__burger-menu, .burger-overlay").toggleClass(
      "active"
    );
  });
  $(".burger-overlay").click(function (e) {
    $(
      ".header__burger,.header__burger-menu, .burger-overlay, .ham, .hamRotate, .ham4"
    ).removeClass("active");
  });
});

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
