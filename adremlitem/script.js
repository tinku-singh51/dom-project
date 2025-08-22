let add = document.querySelector("#add");
let remove = document.querySelector("#remove");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

function addItem() {
    if (inp.value.trim() !== '') {
        let li = document.createElement("li");
        li.innerText = inp.value;
        ul.appendChild(li);
        inp.value = "";
    }
}

// Add button click
add.addEventListener("click", addItem);

// Remove last item
remove.addEventListener("click", function(){
    if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }
});

// ⌨️ Enter key support
inp.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addItem();
    }
});
