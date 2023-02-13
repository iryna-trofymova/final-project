let uk = {
  hello: "Утилізація",
  name: "Небезпечних відходів",
  descr: "Ми використовуємо новітні екологічно безпечні технології",
  1: "  Рішення проблем збору",
  2: " Транспортування та подальшої утилізації небезпечних відходів",
  3: "переваги",
  4: "наші послуги",
  5: "як мипрацюємо",
  6: "наші документи",
  7: "відгуки",
  8: "контакти",
  9: "безкоштовна консультація",
  10: "Наші послуги",
};

let eng = {
  hello: "Disposal",
  name: " of hazardous waste",
  descr: "We use the latest environmentally safe technologies",
  1: "Solution to collection problems",
  2: "Transportation and further disposal of hazardous waste",

  3: "advantages",
  4: "our services",
  5: "how we work",
  6: "our documents",
  7: "feedback",
  8: "contacts",
  9: "free consultation",
  10: "Our services",
};
changeLagnuage();

function changeLagnuage() {
  let language = lang.checked ? uk : eng;
  document.querySelectorAll("[text]").forEach((el) => {
    el.innerHTML = language[el.getAttribute("text")];
  });
}

$(document).ready(function () {
  $(".table-offer-mob").slick({
    dots: true,
  });
});

$(document).ready(function () {
  $(".document").slick({});
});

var splide = new Splide(".splide", {
  arrows: false,
  autoWidth: true,
  pagination: true,
  perPage: 3,

  breakpoints: {
    1150: {
      perPage: 2,
    },
    767: {
      perPage: 1,
      rewind: true,
      rewindByDrag: true,
      autoWidth: false,
    },
  },
});

splide.mount();
/*popup не работает нифига
const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("html");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = dovument.querySelectorAll("._popup__close");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest("._popup"));
      e.preventDefault();
    });
  }
}
function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector("._popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      BodyLock();
    }
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest("._popup__content")) {
        popupClose(e.target.closest("._popup"));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = "0px";
      }
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener("keydown", function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector("._popup.open");
    popupClose(popupActive);
  }
});
*/
