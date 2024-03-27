const userInput = document.querySelector("#selector");
const amount = document.querySelector("#amount");
// const input = document.querySelector("#selector");


const monthlyAmount = ()=>{
    const inputVal = userInput.value;

    amount.innerHTML = `${inputVal}`;
}

setInterval(() => {
    monthlyAmount();
}, 100);


// userInput.addEventListener("change", ()=>{
//     const inputVal = userInput.value;

//        amount.innerHTML = `${inputVal}`;
// })

