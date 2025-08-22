// Step 1: Get all tab buttons and tab content sections
let tabs = document.querySelectorAll(".tab");
let contents = document.querySelectorAll(".tab-content");

// Step 2: Loop through each tab button
tabs.forEach(tab => {
    // Step 3: Add a click event listener to each tab
    tab.addEventListener("click", function(){
        let targetId = tab.getAttribute("data-tab"); // Get which tab to show
        // Step 4: Remove 'active' class from all tabs
        tabs.forEach(btn => btn.classList.remove("active"));
        // Step 5: Add 'active' class to the clicked tab
        tab.classList.add("active");
        // Step 6: Hide all content sections
        contents.forEach(content => {
            content.classList.remove("active");
        });
        // Step 7: Show the one that matches the clicked tab
        document.getElementById(targetId).classList.add("active");
    });
});