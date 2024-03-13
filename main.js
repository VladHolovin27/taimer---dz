// const time = document.querySelector('.start-time');
// const start = document.querySelector('.start');
// const deleteS = document.querySelector('.delete');

// let startTime = 0;
// let a;

// function clock() {
//     const hours = Math.floor(startTime / 3600);
//     const minutes = Math.floor((startTime % 3600) / 60);
//     const seconds = startTime % 60;

//     const formattedTime = `${String(hours)}:${String(minutes)}:${String(seconds)}`;
//     time.textContent = formattedTime;
// }

// start.addEventListener('click', () => {
//     a = setInterval(function() {
//         startTime++;
//         clock()
//     }, 1000)
// })

// deleteS.addEventListener('click', () => {
//     clearInterval(a);
//     startTime = 0;
//     clock()
// });

// 2
// setTimeout(function() {
//     console.log("Hiii");
// }, 3000);

// 3
// setInterval(function() {
//     for (let index = 1; index <= 5; index++) {
//      console.log(index);
//     }
// }, 2000);

// 4
// function b(name) {
//   console.log(`Hi, ${name}`);
// }

// setInterval(function() {
//     b('John');
// }, 2000);


// function data(){
//     let date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()

//     console.log(`${hours}:${minutes}:${seconds}`);
// }

// setInterval(data, 1000)

// 5
// function dateIntуrval(){
//     let date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()

//     console.log(`${hours}:${minutes}:${seconds}`);
//     console.log('Це несподівано!')
// }

// let date = setInterval(dateIntуrval, 3000)
// console.log('Uraa');

// setTimeout(() => {
//    clearInterval(date)
//    console.log('Noo :-(');
// }, 3000);

// DZ - ex1
//  function nameB() {
//            console.log("Hi, 5 times!");
//  }
    
// const setIntervals = setInterval(nameB, 1000);

// setTimeout(() => {
//     clearInterval(setIntervals);
// }, 5000);

// DZ - ex2
const colorBtn = document.querySelector('.color');

const btnsInterval = setInterval(() => {
    let randomColor = '#' + Math.floor(Math.random() * 1000000);
    colorBtn.style.backgroundColor = randomColor;
}, 1000);

// DZ - ex3
const btnA = document.querySelector('.colorA');

let clickCount = 0;

btnA.addEventListener('click', () => {
    function names() {
        clickCount++;
        console.log("Натискань: " + clickCount);
    }

    const gameInterval = setInterval(() => {
        names();
    }, 1000);

    setTimeout(() => {
        clearInterval(gameInterval);
        console.log("Гра завершена. Натискань: " + clickCount);
    }, 10000);
});

// DZ - ex4
function seconds() {
    let second = prompt("Please enter your seconds");
    const getSecond = parseInt(second);

    if (isNaN(getSecond)) {
        console.log('Invalid input');
        return;
    }

    console.log('Seconds' + ':' + getSecond);

    const timeoutId = setTimeout(() => {
        console.log('Yeee! :)');
        clearTimeout(timeoutId);
    }, 1000); 
}

seconds();