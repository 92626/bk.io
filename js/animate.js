// 简单动画函数封装
// 动画必须加定位
function animate(obj, target, callback) { 
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // var step =Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsteLeft >= target) {
            clearInterval(obj.timer);
            // 回调函数
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}