// //getElementById
// document.getElementById("home").style.color = "red"

// //document.getElementsByClassName
// console.log(document.getElementsByClassName("msg"))
// // document.getElementsByClassName("msg")[0].style.color = "green"

// // document.getElementsByClassName("msg").forEach(element => {
// //     element.style.color = "green";
// // });
// // is not work as normal array

// function greener() {
//     let i
//     for (i = 0; i < document.getElementsByClassName("msg").length; i++)
//         document.getElementsByClassName("msg")[i].style.color = "green"
// }
// greener()


// for (let j = 0; j < document.getElementsByClassName("title").length; j++) {
//     if (j % 2 == 0) {
//         document.getElementsByClassName("title")[j].style.color = "green";
//     } else {
//         document.getElementsByClassName("title")[j].style.color = "tomato";
//     }
// }

// // function fontSize() {
// //     for (let i = 0; i < document.getElementsByTagName("p").length; i++) {
// //         document.getElementsByTagName("p")[i].style.fontSize = "3em";
// //     }
// // }

// for (let i of document.getElementsByTagName("p")) {
//     i.style.fontSize = "2rem"
// }


// //document.getElementsByName
// function getRounds() {
//     for (let i = 0; i < document.getElementsByName("radio").length; i++) {
//         if (document.getElementsByName("radio")[i].checked) {
//             console.log(document.getElementsByName("radio")[i].value)
//         }
//     }
// }

// //querySelector
// document.getElementsByTagName("h2")[0].style.color = "blue";
// document.querySelector("section div h2").style.color = "yellow";
// //document.querySelector("section div p").style.color = "red";

// //document.querySelector(".txt").style.color = "green"
// //document.querySelector(".txt1").style.color = "green"
// document.querySelector("#title").style.color = "tomato"

// //querySelectorAll
// console.log(document.querySelectorAll("section div p"))
// for (let i = 0; i < document.querySelectorAll("section div p").length; i++) {
//     document.querySelectorAll("section div p")[i].style.background = "pink"
// }


// for (let i = 1; i < document.querySelectorAll("footer ul li").length; i += 2) {
//     document.querySelectorAll("footer ul li")[i - 1].style.background = "blue"
//     document.querySelectorAll("footer ul li")[i].style.background = "pink"
// }

// let li = document.querySelectorAll("footer ul li")
// for (j = 0; j < li.length; j++) {
//     j % 2 == 0 ? li[j].style.color = "red" : li[j].style.color = "yellow"
// }


document.querySelector("section article").style.background = "yellow";
let ground = 0;
var daily = 0;
function calculate() {
    document.querySelector("section").style.display = "flex";
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var Height = document.getElementById("height").value;
    var Age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var active
    for (let i of document.getElementsByTagName("option")) {
        if (i.selected === true) {
            active = parseFloat(i.value);
        }
    }
    if (male === true) {
        ground = eval(664.7 + (13.7 * weight) + (5 * Height) - (6.8 * Age));
    } else if (female === true) {
        ground = eval(655.1 + (9.6 * weight) + (1.8 * Height) - (4.7 * Age));
    }
    var results = [];
    ground = ground.toFixed(2);
    results.push(ground);
    results.push(results[0] * 4.184)
    results.push(results[0] * active);
    results.push(results[2] * 4.184)
    for (j = 0; j < results.length; j++) {
        results[j] = results[j].toFixed(2)
        document.getElementsByClassName("result")[j].innerHTML = results[j];
    }
}