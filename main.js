
// 최상단 3개 메뉴
const menu1 = document.getElementById("arrow1");
const first = document.getElementsByClassName("first");
const second = document.getElementsByClassName("second");
const third = document.getElementsByClassName("third");

first[0].addEventListener('click', function(){
    first[0].classList.toggle('open');
    first[0].style.cursor="pointer";
})
second[0].addEventListener('click', function(){
    second[0].classList.toggle('open');
    second[0].style.cursor="pointer";
})
third[0].addEventListener('click', function(){
    third[0].classList.toggle('open');
    third[0].style.cursor="pointer";
})

// 로그인 버튼
const log = document.getElementById("log");

log.addEventListener('click', function(){
    log.style.cursor="pointer";
})

// 가입 버튼
const sign = document.getElementById("signup");

sign.addEventListener('click', function(){
    sign.style.cursor="pointer";
    alert("Sign Up");
})

// 중간 2개 버튼
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener('click', function(){
    btn1.style.cursor="pointer";
})
btn2.addEventListener('click', function(){
    btn2.style.cursor="pointer";
})