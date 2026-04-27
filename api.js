const URL = "https://catfact.ninja/facts";
const factPara = document.querySelector(".fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factPara.innerText = data.data[1].fact;
};

btn.addEventListener("click", getFacts);