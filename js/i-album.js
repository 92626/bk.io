window.addEventListener('load', function () {
    var t_l = this.document.querySelector('.t_l');
    var t_r = this.document.querySelector('.t_r');
    var tt = this.document.querySelector('.tt');
    var ttWidth = tt.offsetWidth;
    tt.addEventListener('mouseenter', function () {
        // 鼠标经过tt即显示
        t_l.style.display = 'block';
        t_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    tt.addEventListener('mouseleave', function () {
        // 鼠标离开tt即隐藏
        t_l.style.display = 'none';
        t_r.style.display = 'none';
        timer = this.setInterval(function () {
            t_r.click();
        }, 2000); 
     })
    //  动态生成圆
    var ul = tt.querySelector('ul');
    var ol = tt.querySelector('.t_c');
    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) { 
        var li = this.document.createElement('li');
        // 设置索引号
        li.setAttribute('index', i);
        ol.appendChild(li);
        // 排他
        li.addEventListener('click', function () { 
            for (var i = 0; i < ol.children.length; i++) { 
                ol.children[i].className = '';
            }
            this.className = 'c_c';
            // 点圆移动图片（ul）
            // 获得索引号
            var index = this.getAttribute('index');
            // 将索引传给num circle
            num = circle = index;
            // console.log(ttWidth);
            animate(ul, -index * ttWidth);
        })
    }
    ol.children[0].className = 'c_c';
    // 点箭头移动图片
    // 克隆第一张图片
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    // 控制圆
    var circle = 0;
    // 右侧
    t_r.addEventListener('click', function () {
        if (num == ul.children.length - 1) { 
            ul.style.left = 0;
            num = 0;
        }
        num++
        animate(ul, -num * ttWidth);
        circle++;
        // 复原
        if (circle == ol.children.length) {
            circle = 0;
        }
        circleChange();
    });
    // 左侧
    t_l.addEventListener('click', function () {
        if (num == 0) { 
            num = ul.children.length - 1;
            ul.style.left = - num * ttWidth + 'px';
            
        }
        num--;
        animate(ul, -num * ttWidth);
        circle--;
        // 复原
        circle = circle < 0 ? ol.children.length - 1 : circle;
        circleChange();
    });
    function circleChange() { 
        for (var i = 0; i < ol.children.length; i++) { 
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'c_c';
    }
    // 自动播放
    var timer = this.setInterval(function () {
        t_r.click();
    }, 2000); 
})