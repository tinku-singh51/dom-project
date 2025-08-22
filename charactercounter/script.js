let txtara = document.querySelector("textarea");
let counter = document.querySelector("#counter");

txtara.addEventListener("input", function(){
    counter.textContent = txtara.value.length;
});