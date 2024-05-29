console.log("Hallo")

let lampje = document.querySelector("#bulb")
console.log (lampje)
lampje.src = "img/bulb_on.jpg"

function lichtKnop () {
    lampje.src = "img/bulb_on.jpg"
}

lampje.addEventListener('click', lichtKnop)

let lampStatus = false

if (lampStatus == true ){
    lampje.src = "img/bulb_on.jpg"
} else {
    lampje.src = "img/bulb_off.jpg"
}