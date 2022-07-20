const box = document.getElementById("caja");

const up = document.getElementById("arriba");
const left = document.getElementById("izquierda");
const right = document.getElementById("derecha");
const down = document.getElementById("abajo");
const reset = document.getElementById("reset")

let arribacont = -50;
let izquierdacont = -50;
let derechacont = -50;
let abajocont = -50;


up.addEventListener("click", () => {
    box.style.top = `${arribacont}px`
    arribacont = arribacont - 50;
})

left.addEventListener("click", () => {
    box.style.left = `${izquierdacont}px`
    izquierdacont = izquierdacont - 50;
})

right.addEventListener("click", () => {
    box.style.right = `${derechacont}px`
    derechacont = derechacont - 50;
})

down.addEventListener("click", () => {
    box.style.bottom = `${abajocont}px`
    abajocont = abajocont - 50;
})

reset.addEventListener("click", () => {
    box.style.top = "0px";
    box.style.right = "0px";
    box.style.left = "0px";
    box.style.bottom = "0px";

    arribacont = -50;
    derechacont = -50;
    izquierdacont = -50;
    abajocont = -50;

})