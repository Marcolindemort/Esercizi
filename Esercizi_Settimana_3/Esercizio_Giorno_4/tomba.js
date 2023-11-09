
const randomNumberGenerator = function () {
    const button = document.getElementById("btn");
    button.addEventListener("click", function (){
        let random = Math.floor((Math.random()*91));
        document.getElementById("rng").innerText = "Numero: " + random;
        const cella = document.querySelectorAll (".numDiv");
        cella[random - 1].classList.add ("evidenzia")
    });
}

randomNumberGenerator()

const numbers = function () {
    const tabelloneDiv = document.getElementById("tabellone");
    for (let i = 1; i <= 90; i++) {
        const numDiv = document.createElement("div");
        numDiv.classList.add ("numDiv");
        const numValue = document.createElement("h3");
        numValue.innerText = i
        numDiv.appendChild(numValue)
        tabelloneDiv.appendChild(numDiv);        
    }
}

numbers()
