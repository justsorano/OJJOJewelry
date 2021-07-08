"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
;

(function () {
  var Modal = document.createElement('div');
  Modal.classList.add('modal');
  Modal.innerHTML = "<div class='modal__body'>\n   <div class='modal__container'>\n   <nav class=\"modal__nav\">\n   <ul class=\"modal__row\">\n<li class=\"modal__item\"><a href=\"#\" class=\"modal__link\">\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C</a></li>\n<li class=\"modal__item\"><a href=\"#\" class=\"modal__link\">\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430\u043C</a></li>\n<li class=\"modal__item\"><a href=\"#\" class=\"modal__link\">\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438</a></li>\n<li class=\"modal__item\"><a href=\"#\" class=\"modal__link\">\u0412\u0445\u043E\u0434/\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</a></li>\n   </ul>\n      </nav>\n<hr/>\n         <div class='modal__icons'>\n         <a href=\"#\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n         <a href=\"#\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n         </div>\n<hr/>\n         <div class='modal__social'>\n         <a href=\"#\"><span class='modal__icon _icon-tube'></span></a>\n         <a href=\"#\"><span class='modal__icon _icon-vk'></span></a>\n         <a href=\"#\"><span class='modal__icon _icon-face'></span></a>\n         <a href=\"#\"><span class='modal__icon _icon-tg'></span></a>\n         <a href=\"#\"><span class='modal__icon _icon-etsy'></span></a>\n         </div>\n   </div>\n   </div>";
  document.querySelector('.header').appendChild(Modal);
})();

var toggle = document.querySelector('.nav__item_toggle');
var modal = document.querySelector('.modal');
toggle.addEventListener('click', function () {
  toggle.classList.toggle('hoverspans');

  if (modal.style.top === '88px') {
    modal.style.top = '-1000px';
  } else {
    modal.style.top = '88px';
  }
});
var wedding = document.querySelector('.navigation__item_black');
var linkWedding = document.querySelector('.navigation__link_black');
var nebox = document.querySelectorAll('.navigation__item');
var neitem = document.querySelectorAll('.navigation__link');
var arr = [];
var arr1 = [];

for (var i = 0; i < nebox.length; i++) {
  arr.push(nebox[i]);
}

for (var _i = 0; _i < nebox.length; _i++) {
  arr1.push(neitem[_i]);
}

function arrayPusher(array1, array2) {
  AaA2(arr[1], arr1[1]);
  AaA2(arr[2], arr1[2]);
  AaA2(arr[3], arr1[3]);
  AaA2(arr[4], arr1[4]);
  AaA2(arr[5], arr1[5]);
}

function AaA(box, item) {
  box.addEventListener('mouseenter', function () {
    if (box.classList.contains('bgcbg')) {
      box.classList.remove('bgcbg');
      box.classList.add('accentbg');
    } else {
      box.classList.remove('accentbg');
      box.classList.add('bgcbg');
    }

    if (item.classList.contains('accentcolor')) {
      item.classList.remove('accentcolor');
      item.classList.add('bgccolor');
    } else {
      item.classList.remove('bgccolor');
      item.classList.add('accentcolor');
    }
  });
  box.addEventListener('mouseleave', function () {
    if (box.classList.contains('bgcbg')) {
      box.classList.remove('bgcbg');
      box.classList.add('accentbg');
    }

    if (item.classList.contains('accentcolor')) {
      item.classList.remove('accentcolor');
      item.classList.add('bgccolor');
    }
  });
}

function AaA2(box, item) {
  box.addEventListener('mouseenter', function () {
    if (box.classList.contains('accentbg')) {
      box.classList.remove('accentbg');
      box.classList.add('bgcbg');
    } else {
      box.classList.remove('bgcbg');
      box.classList.add('accentbg');
    }

    if (item.classList.contains('bgccolor')) {
      item.classList.remove('bgccolor');
      item.classList.add('accentcolor');
    } else {
      item.classList.remove('accentcolor');
      item.classList.add('bgccolor');
    }
  });
  box.addEventListener('mouseleave', function () {
    if (box.classList.contains('accentbg')) {
      box.classList.remove('accentbg');
      box.classList.add('bgcbg');
    }

    if (item.classList.contains('bgccolor')) {
      item.classList.remove('bgccolor');
      item.classList.add('accentcolor');
    }
  });
}

arrayPusher(arr, arr1);
AaA(wedding, linkWedding);