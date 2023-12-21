window.addEventListener("load", function () {
  //获取元素
  var focus = document.querySelector(".focus");
  var arrow_l = document.querySelector(".arrow-l");
  var arrow_r = document.querySelector(".arrow-r");
  var ul = document.querySelector(".theul");
  var ol = document.querySelector(".circle");
  var focusWidth = focus.offsetWidth;
  var num = 0;
  var circle = 0;
  //左右两侧按钮添加显示隐藏属性
  focus.addEventListener("mouseenter", function () {
    arrow_l.style.display = "block";
    arrow_r.style.display = "block";
    // 鼠标经过停止定时器
    clearInterval(timer);
    // 清除计时器变量
    timer = null;
  });
  focus.addEventListener("mouseleave", function () {
    arrow_l.style.display = "none";
    arrow_r.style.display = "none";
    // 启动定时器
    timer = setInterval(function () {
    arrow_r.click();
  }, 2000);
// });
  });
  // 动态生成小圆圈
  for (var i = 0; i < ul.children.length; i++) {
    // 创建li并添加到ol里面去
    var li = document.createElement("li");
    li.setAttribute("index", i);
    ol.append(li);
    li.addEventListener("click", function () {
      //利用排他思想，为小圆圈添加类名
      for (var j = 0; j < ol.children.length; j++) {
        // 先把所有ol里面所有li标签的类名置为空
        ol.children[j].className = "";
      }
      // 把当前li元素的类名置为red
      this.className = "red";
      var index = this.getAttribute("index");
      // console.log(focusWidth); //这里是获取元素的宽度
      // console.log(index); //获取元素的索引号
      //当我们点击了某个li，就把它的索引号给num
      num = index;
      //当我们点击了某个li，就把它的索引号给circle
      circle = index;
      // num = circle = index
      animate(ul, -index * focusWidth);
    });
  }
  //把我们的第一个li的按钮类名设置为red
  ol.children[0].className = "red";
  //克隆第一张图片
  var firstPicture = ul.children[0].cloneNode(true);
  ul.append(firstPicture);

  //点击右侧按钮，实现图片的滑动效果
  //flag 节流阀 ——防止用户点击过快
  var flag = true;
  arrow_r.addEventListener("click", function () {
   if(flag) {
     flag = false;
      //   如果我们走到了最后一张图,我们把left置为0,num也置为0;
    if (num == ul.children.length - 1) {
      ul.style.left = 0;
      num = 0;
    }
    num++;
    animate(ul, -num * focusWidth,function() { //回调函数，当动画执行结束才执行
      flag = true;
    });
    circle++;
    // 点击右侧按钮让小圆圈跟随一起变化
    if (circle == ul.children.length - 1) {
      circle = 0;
    }
    //先清除其他小圆圈的class类名
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
    }
    //留下当前小圆圈的类名
    ol.children[circle].className = "red";
   }
  });

  //左侧按钮的实现
  arrow_l.addEventListener("click", function () {
    if(flag) {
      flag = false;
                //   如果我们走到了最后一张图,我们把left置为0,num也置为0;
    if (num == 0) {
      ul.style.left = -num * focusWidth + "px";
      num = ul.children.length - 1;
    }
    num--;
    animate(ul, -num * focusWidth,function() {  
      flag = true;
    });
    circle--;
    // 点击右侧按钮让小圆圈跟随一起变化
    if (circle < 0) {
      circle = ol.children.length - 1;
    }
    //先清除其他小圆圈的class类名
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
    }
    //留下当前小圆圈的类名
    ol.children[circle].className = "red";
    }
  });

  // 动画的自动播放
  var timer = this.setInterval(function () {
    arrow_r.click();
  }, 3000);

  let ollis = document.querySelector(".circle").querySelectorAll('li');
  for(var i = 0; i < ollis.length;i++) {
    let Arr = ['壹','贰','叁','肆'];
    ollis[i].innerHTML = Arr[i];
  }
});

//动画函数的定义与封装
function animate(obj, target, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer);
      // if (callback) {
      //   callback();
      // }
      callback && callback(); //相当于上面的判断，有回调函数就执行回调函数，没有就跳过.(短路运算符)
    }
    obj.style.left = obj.offsetLeft + step + "px";
  }, 30);
}