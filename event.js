// ()
// #
// let btn = document.querySelector("#btn");
// btn.onclick = () =>{
//     console.log("One Click at a time");
// }

// btn.onmouseover = (evt) =>{
//     console.log("Your Mouse");
//     console.log(evt);
// }

let modeBtn = document.querySelector("#btn");
let currMode = "light";
modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else{
        currMode = "light"
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});