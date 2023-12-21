var index = 0;
var interval = 5000;
var timer = null;
var count = 4;
var lock = false;

function slide(nextIndex) {

  if (lock) return;
  lock = true;

  var slider = document.querySelector("ul.banner-slider");
  slider.style.transitionDuration = "1s";
  slider.style.marginLeft = -1 * nextIndex + '00%';


  var indicators = document.querySelectorAll("ul.banner-indicator>li");
  indicators[index].className = "";


  if (nextIndex === count) {
    index = 0;
  } else if (nextIndex === -1) {
    index = count - 1;
  } else {
    index = nextIndex;
  }
  indicators[index].className = "active";

  setTimeout(function () {
    slider.style.transitionDuration = "0s";
    if (nextIndex === count) slider.style.marginLeft = "0%";
    if (nextIndex === -1) slider.style.marginLeft = -1 * (count - 1) + "00%";
    lock = false;
  }, 1020);
}


function play() {
  timer = setInterval(function () {
    slide(index + 1);
  }, interval);
}

let prev = document.querySelector('.banner-prev');
let nextPic = document.querySelector('.banner-next');

document.querySelector(".banner").onmouseover = function () {
  clearInterval(timer);
  prev.style.display = 'block';
  nextPic.style.display = 'block';
};

document.querySelector(".banner").onmouseout = function () {
  play();
  prev.style.display = 'none';
  nextPic.style.display = 'none';
};


var indicators = document.querySelectorAll("ul.banner-indicator>li");
for (var i = 0; i < indicators.length; i++) {
  indicators[i].b = i;
  indicators[i].onclick = function () {
    if (this.className === "active") return;
    slide(this.b);
  };
}


document.querySelector("span.banner-prev").onclick = function () {

  slide(index - 1);
};

document.querySelector("span.banner-next").onclick = function () {
  slide(index + 1);
};

play();



//1.点击某一个切换栏,当前切换栏变成红色,其他的不变
var tab_list = document.querySelector('.tab_list');
var lis = tab_list.querySelectorAll('li');
var items = document.querySelectorAll('.item');
items[0].style.display = 'block';
for (var i = 0; i < lis.length; i++) {
  //设置索引号
  lis[i].setAttribute('index', i);
  lis[i].onclick = function () {
    //干掉所有人
    for (var i = 0; i < lis.length; i++) {
      lis[i].className = '';
    }
    //留下我自己
    this.className = 'current';
    //下面的显示内容模块
    var index = this.getAttribute('index');
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
    }
    items[index].style.display = 'block';
  }
}

//1.点击某一个切换栏,当前切换栏变成红色,其他的不变
var tab_list_two = document.querySelector('.tab_list_two');
var lis_two = tab_list_two.querySelectorAll('li');
var items_two = document.querySelectorAll('.item_two');
items_two[1].style.display = 'block';
for (var i = 0; i < lis_two.length; i++) {
  //设置索引号
  lis_two[i].setAttribute('indexx', i);
  lis_two[i].onclick = function () {
    //干掉所有人
    for (var i = 0; i < lis_two.length; i++) {
      lis_two[i].className = '';
    }
    //留下我自己
    this.className = 'current_two';
    //下面的显示内容模块
    var indexx = this.getAttribute('indexx');
    for (var i = 0; i < items_two.length; i++) {
      items_two[i].style.display = 'none';
    }
    items_two[indexx].style.display = 'block';
    items_two[indexx].setAttribute('class','an');
  }
}

let li1 = document.querySelector('.li1');
let li2 = document.querySelector('.li2');
let li3 = document.querySelector('.li3');
let li4 = document.querySelector('.li4');
let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');
let div3 = document.querySelector('.div3');
let div4 = document.querySelector('.div4');
li1.onmouseover = function() {
  div1.style.display = 'block';
}
li1.onmouseout = function() {
  div1.style.display = 'none';
}

li2.onmouseover = function() {
  div2.style.display = 'block';
}
li2.onmouseout = function() {
  div2.style.display = 'none';
}

li3.onmouseover = function() {
  div3.style.display = 'block';
}
li3.onmouseout = function() {
  div3.style.display = 'none';
}

li4.onmouseover = function() {
  div4.style.display = 'block';
}
li4.onmouseout = function() {
  div4.style.display = 'none';
}