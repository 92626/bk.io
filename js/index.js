window.addEventListener('load', function () { 
    var night = this.document.querySelector('.night');
    var un = this.document.querySelector('.un');
    // var clrd = this.document.querySelector('.clrd');
    var intro = this.document.querySelector('.intro');
    var journal = this.document.querySelector('.journal');
    var footer = this.document.querySelector('.footer');
    // var album = this.document.querySelector('.footer');
    // var music = this.document.querySelector('.footer');
    // var film = this.document.querySelector('.footer');
    var aix1 = this.document.querySelector('.aix1');
    var aix2 = this.document.querySelector('.aix2');
    var aix3 = this.document.querySelector('.aix3');
    var dianzan = this.document.querySelector('.dianzan');
    night.addEventListener('click', function () { 
        // intro.className = 'moon'
        intro.style.backgroundColor = 'rgba(0,0,0,.3)';
        journal.style.backgroundColor = 'rgba(0,0,0,.3)';
        footer.style.backgroundColor = 'rgba(0,0,0,.3)';
        // album.style.backgroundColor = 'rgba(0,0,0,.3)';
        // music.style.backgroundColor = 'rgba(0,0,0,.3)';
        // film.style.backgroundColor = 'rgba(0,0,0,.3)';
    })
    un.addEventListener('click', function () { 
        // intro.className = 'moon'
        intro.style.backgroundColor = 'rgba(250,250,250,.3)';
        journal.style.backgroundColor = 'rgba(250,250,250,.3)';
        footer.style.backgroundColor = 'rgba(250,250,250,.3)';
        // album.style.backgroundColor = 'rgba(250,250,250,.3)';
        // music.style.backgroundColor = 'rgba(250,250,250,.3)';
        // film.style.backgroundColor = 'rgba(250,250,250,.3)';
    })
    var i = 0;
    function changeColor(obj) { 
        if (i++ % 2 == 0) {
            obj.style.color = 'red';
        } else { 
            obj.style.color = '#000';
        }
    }
    aix1.addEventListener('click', function () { 
        changeColor(aix1);
    })
    aix2.addEventListener('click', function () { 
        changeColor(aix2);
    })
    aix3.addEventListener('click', function () { 
        changeColor(aix3);
    })
    dianzan.addEventListener('click', function () { 
        changeColor(dianzan);
    })
})