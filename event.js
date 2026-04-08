// ()
// #
let btn = document.querySelector("#btn");
btn.onclick = () =>{
    console.log("One Click at a time");
}

btn.onmouseover = (evt) =>{
    console.log("Your Mouse");
    console.log(evt);
}