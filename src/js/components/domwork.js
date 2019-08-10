import $ from 'jquery';

function random(min, max) {
    var randomX = max - min;
    var randomY = Math.floor(Math.random() * randomX) + min;
        return randomY;
}

function matOb(a, op, b) {  
    var res;
        if(op == '+'){
            res = a + b;
        }
        else if(op == '-'){
            res = a - b;
        }
        else if(op == '*'){
            res = a * b;
        }
        else if(op == '/'){
            res = a / b; 
        }
        else {
            res = false;
        }
    return res;
}

function codeToOp(num){
    var massive = ['-', '+', '*', '/'];
    return massive[num];
    }

function machine(){
var good = 0, erars = 0, errors = [];    
for (var i = 1; i <= 2  ; i++) {
    var x = random(3, 1);
    var y = random(3, 1);
    var code = random(0, 3);
    var op = codeToOp(code);
    var res = matOb(x, op, y);
    var usersum = +prompt('Сколько будет ' + x + ' ' + op + ' ' + y + ' = ?');

    while(usersum !== res) {
        if(isNaN(usersum)) {
            usersum = +prompt('Результат не соответствует числу ' + x + ' ' + op + ' ' + y + ' = ?');  
        }
        else {
            erars++;
            errors.push('Ответ был решен не правильно - ' + x + ' ' + op + ' '  + y + ' = ' + usersum + ' <- ваш ответ');
            usersum = +prompt('Ответ не верный, попытайтесь еще ' + x + ' ' + op + ' '  + y + ' = ?'); 
        }}
        if(res === usersum) {
            good++;
        console.log(x + ' ' + op + ' ' + y + ' = ' + usersum + ' Верный ответ. ');
    }
}

document.querySelector('.good').innerHTML = ('Количество вопросов ' + good);
document.querySelector('.bad').innerHTML  = ('Количество неправильных ответов ' + erars);

var divErrors = document.querySelector('.errors');
divErrors.innerHTML = '';

for(var h = 0; h < errors.length; h++) {
    divErrors.innerHTML += ('<p class="error-inhert">' + errors[h] + '</p>');
}}

// Анимация кнопки, при нажатии
var button = document.querySelector('.change-colors');
var container = document.querySelector('.container');
var checkmark = document.querySelector('svg');
var className = "animate";

function active(){ 
button.addEventListener('click', function (){
  if (!checkmark.classList.contains(className)) {
    checkmark.classList.add(className);
    
    setTimeout(function(){
        checkmark.classList.remove(className);
    }, 1700);  
  } 
});
};
// Анимация кнопки, при нажатии

// Изменение Header
var changeColors = document.querySelector('.change-colors');
var mainColorSquit = document.querySelector('.cyberial-syntwaiser-squit');
var d18 = document.querySelector('.cyberial-syntwaiser-squit--d18');
var actived14 = document.querySelector('.cyberial-syntwaiser-squit--d14');
var addInput = document.querySelector('.btn');

document.querySelector('.change-colors').onclick = function() {
    changeColors.style.display = 'none';    
    setTimeout(function() {
        mainColorSquit.classList.add('change-color');     
        d18.classList.add('active-d18');   
        actived14.classList.add('active-d14');
        addInput.innerHTML = '<button class="button buttonDel" id="suka">Press</button>';
    }, 1000);
};
// Изменение Header

// Изменение фото при нажатии
function randomPhoto() {
    var items = document.querySelectorAll('.items .item');
    function massivePhoto (num){
        var photo = ['2.jpg', '3.jpg', '4.jpg', '5.jpg', ];
        return photo[num];
    }
    for(var i = 0; i < items.length; i++){
        items[i].onclick = activeItem;
    }
    function activeItem(){
        var randomNum = random(0, 4);
        var getPhoto = massivePhoto(randomNum);
        var imageAdd = "<img src='src/img/asd/" + getPhoto + "' alt=' '>";
        this.innerHTML = imageAdd;
    }
};
// Изменение фото при нажатии

function gallery(){
    document.querySelector('.open-gallery').onclick = function(){
        var galleryItems = document.querySelector('.items');
        galleryItems.classList.toggle('vis');
    }
}


export {machine, randomPhoto, active, gallery};