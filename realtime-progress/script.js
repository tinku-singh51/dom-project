let prg = document.querySelector("#progress");
let h3 = document.querySelector("h3");

let count = 0;
let id = setInterval(function(){
    count++;
    prg.style.width = count+'%';
    if(count >= 100){
        clearInterval(id);
        h3.style.color = "Green";
        h3.style.fontSize = "10px" ;
        h3.style.opacity = "1";
    }
},50);