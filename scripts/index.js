let menu = document.getElementsByClassName("piece");
let shape = document.getElementsByClassName("shape");

function visibility() {
    if (!menu[0].classList.contains("show")) {
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.add("show");
        }
        for (let i = 0; i < shape.length; i++) {
            shape[i].classList.add("show2");
        }
    } else if (menu[0].classList.contains("show")) {
        for (let i = 0; i < shape.length; i++) {
            shape[i].classList.remove("show2");
        }
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.remove("show");
        }
    }
}

document.getElementById("press1").addEventListener("click", visibility);
document.getElementById("press2").addEventListener("click", visibility);