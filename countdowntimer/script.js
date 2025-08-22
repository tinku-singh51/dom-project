// let start = document.querySelector("#start");
// let end = document.querySelector("#end");
// let h3 = document.querySelector("h3");
// let int;
// start.addEventListener("click",function() {
//     let count = 0;
//     int = setInterval(function() {
//         h3.textContent = count;
//         count++;
//         console.log(count);    
//     }, 1000);
// });



let start = document.querySelector("#start");
let end = document.querySelector("#end");
let reset = document.querySelector("#reset");
let h1 = document.querySelector("h1");
let int = null;

start.addEventListener("click", function() {
    let count = 0;
    clearInterval(int); // Prevent multiple intervals from stacking
    int = setInterval(function() {
        h1.textContent = count;
        count++;
        console.log(count);    
    }, 1000);
});
end.addEventListener("click", function() {
    clearInterval(int);
    int = null;
});
reset.addEventListener("click", function(){
    clearInterval(int);
    int = null;
    h1.textContent = 0;
});