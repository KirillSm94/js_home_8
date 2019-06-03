'use strict';

let incr = document.querySelector('#incr');

function addCounter() {
    let i = incr.value.split(' ');
    ++i[1];
    incr.value = i.join(' ');
}


//-------------------------------------------

let clc = document.querySelector('#clc'),
    clc2 = document.querySelector('#clc2'),
    clc3 = document.querySelector('#clc3');

    clc.addEventListener('click', function  cl (event) {
        event.target.classList.toggle('green');
    });

    clc2.addEventListener('click', function cl (event) {
        event.target.classList.toggle('green');
    });

    clc3.addEventListener('click', function cl (event) {
        event.target.classList.toggle('green');
    });
//---------------------------------------------

let area = document.querySelector('#area'),
    send = document.querySelector('#send'),
    insert = document.querySelector('#insert');

    send.addEventListener('click', function sn (event){
        let lc = new Date(),
            obj = { avatar: 'avatarka.gif',
                    author: 'Аноним',
                    text: area.value,
                    date: lc.toDateString()
            },
            div = document.createElement('div'),
            img = document.createElement('img');

    img.src = obj.avatar;
    console.log(img.src);
    document.body.appendChild(img);
    document.body.appendChild(div);
    div.innerText = obj.author + '\n' + obj.text + '\n' + obj.date;

});
