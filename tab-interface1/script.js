let tabs = document.querySelectorAll(".tab");
let contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", function(){
        let targetId = tab.getAttribute("data-tab");
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        contents.forEach(content => {
            content.classList.remove("active");
        });
        document.getElementById(targetId).classList.add("active");
    });
});