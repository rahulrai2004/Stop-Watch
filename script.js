let min = 0;
let sec =0;
let count = 0;
let timer =false;

const btn = document.querySelectorAll('button')
function start(){
  timer = true;
  stopwatch()
}

function stop(){
  timer = false
}
function reset(){
  timer = false
    min = 0;
    sec =0;
    count = 0;
    document.querySelector('#minute').innerHTML = min;
    document.querySelector('#second').innerHTML = sec;
    document.querySelector('#count').innerHTML = count;
}

function stopwatch(){
  if(timer ==true){
    count =count+1;
    if(count === 100){
      sec = sec+1;
      count = 0;
    }
    if(sec == 60){
      min = min+1;
      sec = 0;
    }
    document.querySelector('#minute').innerHTML = min;
    document.querySelector('#second').innerHTML = sec;
    document.querySelector('#count').innerHTML = count;
    setTimeout('stopwatch()',10)
  }
}

btn[0].addEventListener('click', function(){
  start()
})
btn[1].addEventListener('click', function(){
  stop()
})
btn[2].addEventListener('click', function(){
  reset()
})
