//DUMMY DATA

const data = [
  {
    id: 1,
    src: "https://www.mypoojabox.in/cdn/shop/files/ganesh-chaturthi_150x.png?v=18026463419690419427",
    title: "GANESH CHATURTHI",
  },
  {
    id: 2,
    src: "https://www.mypoojabox.in/cdn/shop/files/pooja-room-decor_150x.png?v=13088127822233399260",
    title: "POOJA ROOM DECOR",
  },
  {
    id: 3,
    src: "https://www.mypoojabox.in/cdn/shop/files/festive-decor_150x.png?v=12234306786707553895",
    title: "FESTIVE DECOR",
  },
  {
    id: 4,
    src: "https://www.mypoojabox.in/cdn/shop/files/healing-crystals_150x.png?v=13206244654126368593",
    title: "HEALING CRYSTALS",
  },
  {
    id: 5,
    src: "https://www.mypoojabox.in/cdn/shop/files/candles-diyas_150x.png?v=13050926839065904549",
    title: "CANDLES & DIYAS",
  },
  {
    id: 6,
    src: "https://www.mypoojabox.in/cdn/shop/files/pooja-thali-sets_150x.png?v=672908776050056586",
    title: "POOJA THALI SETS",
  },
  {
    id: 7,
    src: "https://www.mypoojabox.in/cdn/shop/files/incense_150x.png?v=944378954432543292",
    title: "INCENSE",
  },
  {
    id: 8,
    src: "https://www.mypoojabox.in/cdn/shop/files/god-idols_150x.png?v=5215903136971669243",
    title: "GOD IDOLS",
  },
  {
    id: 9,
    src: "https://www.mypoojabox.in/cdn/shop/files/evil-eye_150x.png?v=11809556625570820004",
    title: "EVIL EYE",
  },
  {
    id: 10,
    src: "https://www.mypoojabox.in/cdn/shop/files/salt-lamps_150x.png?v=11263706943469448234",
    title: "SALT LAMPS",
  },
  {
    id: 11,
    src: "https://www.mypoojabox.in/cdn/shop/files/urlis_150x.png?v=4903074234744943568",
    title: "URLS",
  },
  {
    id: 12,
    src: "https://www.mypoojabox.in/cdn/shop/files/pooja-essentials_150x.png?v=4812511085520059123",
    title: "POOJA ESSENTIALS",
  },
];

const searchButton = document.querySelector("#searchButton");
const searchInputContainer = document.querySelector("#searchInputContainer");
const searchCloseButton = document.querySelector("#searchCloseButton");
const menuButton = document.querySelector("#menuButton");
const menuContainer = document.querySelector("#menuContainer");
const menuCloseButton = document.querySelector("#menuCloseButton");
const secondMenuList = document.querySelector("#secondMenuList");
const subMenuContainerList = document.querySelectorAll(".sub-menu-container");
const mainMenuList = document.querySelector("#mainMenuList");
const footerNavGroup = document.querySelector("#footerNavGroup");

function expandDropDown() {
  const navEl = document.querySelector(".navbar-lg");
  navEl.addEventListener("click", (e) => {
    const target = e.target;
    if (target.id === "arrowDown" || target.id === "arrowUp") {
      const navItem = target.closest(".navbar-lg-item");
      const arrowDown = navItem.querySelector("#arrowDown");
      const arrowUp = navItem.querySelector("#arrowUp");
      const dropDown = navItem.querySelector(".dropdown-list");
      console.log(navItem);
      arrowDown.classList.toggle("active");
      arrowUp.classList.toggle("active");
      dropDown.classList.toggle("active");
    }
  });
}
expandDropDown();

mainMenuList.addEventListener("click", (event) => {
  const target = event.target;

  // Check if the clicked element is an arrow down or arrow up
  if (target.id === "arrowDown" || target.id === "arrowUp") {
    const menuItem = target.closest(".main-menu-item"); // Find the closest menu item
    const arrowDown = menuItem.querySelector("#arrowDown");
    const arrowUp = menuItem.querySelector("#arrowUp");
    const subMenuContainer = menuItem.querySelector(".sub-menu-container");
    arrowDown.classList.toggle("active");
    arrowUp.classList.toggle("active");
    subMenuContainer.classList.toggle("hidden");
  }
});

function expandNav() {
  const navSections = footerNavGroup.querySelectorAll(".footer-nav");
  if (window.innerWidth >= 768) {
    navSections.forEach((navSection) => {
      const navExpandEl = navSection.querySelector(".footer-nav-expand");
      const arrowDown = navSection.querySelector("#arrowDown");
      const arrowUp = navSection.querySelector("#arrowUp");
      navExpandEl.classList.remove("hidden");
    });
  }
}
window.addEventListener("resize", () => {
  expandNav();
});
document.addEventListener("DOMContentLoaded", () => {
  expandNav();
});
footerNavGroup.addEventListener("click", (e) => {
  const target = e.target;
  const navSection = target.closest(".footer-nav");
  const arrowDown = navSection.querySelector("#arrowDown");
  const arrowUp = navSection.querySelector("#arrowUp");
  const navExpandEl = navSection.querySelector(".footer-nav-expand");
  arrowDown.classList.toggle("active");
  arrowUp.classList.toggle("active");
  navExpandEl.classList.toggle("hidden");
});
menuButton.addEventListener("click", () => {
  menuContainer.classList.add("active");
});
menuCloseButton.addEventListener("click", () => {
  menuContainer.classList.remove("active");
});
searchButton.addEventListener("click", () => {
  searchButton.classList.add("hidden");
  searchInputContainer.classList.add("active");
});

searchCloseButton.addEventListener("click", () => {
  searchButton.classList.remove("hidden");
  searchInputContainer.classList.remove("active");
});

//function to create menu list using dummy data

function createMenuList(containerElement, data) {
  //querying list element to append items
  const listEl = containerElement.querySelector(".dynamic-menu-list");

  //iteraing through data and create list item to append
  if (!listEl) {
    return "error";
  }
  data.forEach((dataItem) => {
    //destructure title and source values from dataItem
    const { title, src } = dataItem;

    //create li element and add classname
    const itemEl = document.createElement("li");
    itemEl.classList.add("dynamic-list-item");

    //create anchor element, add classname and append it to the li element
    const anchorEl = document.createElement("a");
    anchorEl.href = "/";
    anchorEl.classList.add("dynamic-list-item-link");
    itemEl.append(anchorEl);

    //create img element, add classname, assign source value to src attribute and append it into anchor element
    const imgEl = document.createElement("img");
    imgEl.src = src;
    imgEl.classList.add("dynamic-list-item-image");
    imgEl.alt = title;
    anchorEl.append(imgEl);

    //create p element, add classname and assign value of title to it
    const textEl = document.createElement("p");
    textEl.classList.add("dynamic-list-item-title");
    textEl.textContent = title;
    anchorEl.append(textEl);

    //finally append li element to the list
    listEl.append(itemEl);
  });
}

//iterate throgh list of sub menu containers and call createMenuList function to create list in each sub menu container
subMenuContainerList.forEach((subMenuList) =>
  createMenuList(subMenuList, data)
);

//call function to create list in menu
createMenuList(secondMenuList, data.reverse());

function implementReadMoreOrLess() {
  const readMoreButton = document.querySelector("#readMoreButton");
  const readLessButton = document.querySelector("#readLessButton");
  const companyInfo1 = document.querySelector("#companyInfo1");
  const companyInfo2 = document.querySelector("#companyInfo2");

  readMoreButton.addEventListener("click", function () {
    companyInfo1.classList.add("hidden");
    companyInfo2.classList.remove("hidden");

    readMoreButton.classList.add("hidden");
    readLessButton.classList.remove("hidden");
  });
  readLessButton.addEventListener("click", () => {
    companyInfo1.classList.remove("hidden");
    companyInfo2.classList.add("hidden");

    readMoreButton.classList.remove("hidden");
    readLessButton.classList.add("hidden");
  });
}
implementReadMoreOrLess();
// categories swiper
const categoriesSwiper = new Swiper(".categories-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  // autoplay: {
  //   delay: 1000,
  // },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
  },
});
// reviews swiper
const reviewsSwiper = new Swiper(".reviews-section", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  mousewheel: true,
  keyboard: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
