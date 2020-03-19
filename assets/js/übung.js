// --------------------------------------------------------CodeFlow Übung lev1_2: getElementsByClassName
function myFunction() {
    for (i = 0; i < document.getElementsByClassName("example").length; i++) {
        document.getElementsByClassName("example")[i].style.color = "white";
        document.getElementsByClassName("example")[i].style.background = "black";
    }
}

// --------------------------------------------------------CodeFlow Übung lev2_1: DOM Elements
function reverse(s) {
    return s.split("").reverse().join("");
}
document.getElementById("navChange").addEventListener("click", () => {
    let x = document.getElementById("navHome").innerText;
    x = reverse(x);
    document.getElementById("navHome").innerText = x;
    document.getElementById("navHome").style.background = "pink";
})


// --------------------------------------------------------CodeFlow Übung lev2_2: DOM Elements

// let getFarbe = () => {
//     let j = document.getElementById("farbeAuswahlen").selectedIndex
//     let farbe = document.getElementById("farbeAuswahlen").options[j].innerHTML
//     console.log(farbe)
//     console.log(farbe.split(" "))
//     farbe = farbe.split(" ").join("")
//     return farbe
// }
// document.getElementById("button").addEventListener("click", (e) => {
//     document.querySelector("body").style.background = getFarbe()
// })

// document.getElementById("button").addEventListener("click", () => {
//     let i = document.getElementById("farbeAuswahlen").selectedIndex
//     event.preventDefault();
//     return document.body.style.background = document.getElementById("farbeAuswahlen").options[i].value.split(" ").join("")
// })