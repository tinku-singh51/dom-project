// let input = document.querySelector("input");

// let data = [
//     { name: "Tinku", src: "https://images.unsplash.com/photo-1552234994-66ba234fd567?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D" },
//     { name: "Aman", src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Iftekhar", src: "https://plus.unsplash.com/premium_photo-1670573802857-aeae2b087487?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Anshu", src: "https://images.unsplash.com/photo-1519713958759-6254243c4a53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Kundan", src: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
// ]

// let pers = ""; //ek empty string banayi jisme saara HTML collect hoga.

// data.forEach(function (elem) {//Ye ek callback function hai jo forEach ke andar chalta hai.
//     // elem = abhi jo current element hai us array ka
//     //elem → ek person at a time
//     pers += `<div class="person">
//                     <div class="img">
//                         <img src="${elem.src}" alt="potrait">
//                     </div>
//                     <h4>${elem.name}</h4>
//                 </div>`
// });

// //pers me aapne students ki list banayi aur
// //innerHTML = pers ne usko "people" ke dabbe ke andar rakh diya.
// //people div ke andaer maine saare person daal diye
// document.querySelector(".people").innerHTML = pers;


// input.addEventListener("input", function () {
//     let matching = data.filter(function (e) {
//         return e.name.toLowerCase().startsWith(input.value.toLowerCase()); 
//     });

//     let newusers = "";

//     matching.forEach(function (elem) {
//         newusers += `<div class="person">
//                     <div class="img">
//                         <img src="${elem.src}" alt="potrait">
//                     </div>
//                     <h4>${elem.name}</h4>
//                 </div>`;
//     });

//     document.querySelector(".people").innerHTML = newusers;
// });



// 1. Input box ko pakadna (jo HTML me <input> hoga)
let input = document.querySelector("input");

// 2. Yeh ek array hai jisme objects bane hue hain (har ek person ka naam + photo link rakha hai)
let data = [
    { name: "Tinku", src: "https://images.unsplash.com/photo-1552234994-66ba234fd567?w=600&auto=format&fit=crop&q=60" },
    { name: "Aman", src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop" },
    { name: "Iftekhar", src: "https://plus.unsplash.com/premium_photo-1670573802857-aeae2b087487?q=80&w=687&auto=format&fit=crop" },
    { name: "Anshu", src: "https://images.unsplash.com/photo-1519713958759-6254243c4a53?q=80&w=687&auto=format&fit=crop" },
    { name: "Kundan", src: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=1170&auto=format&fit=crop" },
]

// 3. Ek empty string banayi jisme baad me saare persons ka HTML code store karenge
let pers = "";

// 4. forEach → data array ke har ek person (object) ko loop me ek-ek karke lega
data.forEach(function (elem) {
    // elem = current person (ek object jisme name + src hai)
    // pers me HTML string jodte ja rahe hain
    pers += `<div class="person">
                <div class="img">
                    <img src="${elem.src}" alt="portrait">
                </div>
                <h4>${elem.name}</h4>
             </div>`;
});

// 5. Jo HTML string banayi usko "people" naam ke div ke andar daal diya
// isse page par saare persons dikh jaayenge
document.querySelector(".people").innerHTML = pers;


// 6. Ab input box par "input" event lagate hain
// iska matlab: jaise hi user type karega, ye function chalega
input.addEventListener("input", function () {

    // 7. filter() ka use karke user ke input se matching names nikaale
    // startsWith → check karega ki name shuru ho raha hai user ke input se ya nahi
    // toLowerCase() → case insensitive search ke liye (Aman vs aman dono chalega)
    let matching = data.filter(function (e) {
        return e.name.toLowerCase().startsWith(input.value.toLowerCase());
    });

    // 8. Ek nayi empty string jisme matching persons ka HTML banayenge
    let newusers = "";

    // 9. Matching results ko loop karke HTML banaya
    matching.forEach(function (elem) {
        newusers += `<div class="person">
                        <div class="img">
                            <img src="${elem.src}" alt="portrait">
                        </div>
                        <h4>${elem.name}</h4>
                     </div>`;
    });

    // 10. Agar kuch match nahi mila toh message dikhana
    if (newusers === "") {
        newusers = "<p>No user found 😢</p>";
    }

    // 11. Naye matching persons ko "people" div me dikhana
    document.querySelector(".people").innerHTML = newusers;
});

